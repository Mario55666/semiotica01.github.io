import { useState, useRef, useCallback, useEffect } from 'react';
import type { SpeechRecognitionHook } from '../types/form.types.js';

// Type definitions for Web Speech API
interface SpeechRecognitionResult {
  isFinal: boolean;
  [index: number]: {
    transcript: string;
    confidence: number;
  };
  length: number;
}

interface SpeechRecognitionResultList {
  [index: number]: SpeechRecognitionResult;
  length: number;
}

interface SpeechRecognitionEvent {
  resultIndex: number;
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionErrorEvent {
  error: SpeechRecognitionErrorCode;
  message: string;
}

type SpeechRecognitionErrorCode =
  | 'no-speech'
  | 'aborted'
  | 'audio-capture'
  | 'network'
  | 'not-allowed'
  | 'service-not-allowed'
  | 'bad-grammar'
  | 'language-not-supported';

interface SpeechRecognitionInstance {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  maxAlternatives: number;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
  onstart: (() => void) | null;
  start(): void;
  stop(): void;
  abort(): void;
}

interface SpeechRecognitionConstructor {
  new (): SpeechRecognitionInstance;
}

declare global {
  interface Window {
    SpeechRecognition: SpeechRecognitionConstructor;
    webkitSpeechRecognition: SpeechRecognitionConstructor;
  }
}

/**
 * Custom hook for speech recognition functionality
 * @returns SpeechRecognitionHook with state and control functions
 */
export function useSpeechRecognition(): SpeechRecognitionHook {
  const [isListening, setIsListening] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [supported, setSupported] = useState<boolean>(true);
  
  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  const isListeningRef = useRef<boolean>(false);

  // Check for browser support
  useEffect(() => {
    const isSupported = 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
    setSupported(isSupported);
    
    if (!isSupported) {
      setError('El reconocimiento de voz no está soportado en este navegador. Use Chrome o Edge.');
    }
  }, []);

  // Initialize speech recognition
  useEffect(() => {
    if (!supported) return;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    
    const recognition = recognitionRef.current;
    
    if (recognition) {
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'es-ES';
      recognition.maxAlternatives = 1;

      recognition.onresult = (event: SpeechRecognitionEvent): void => {
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const result = event.results[i];
          const transcriptText = result[0]?.transcript ?? '';
          
          if (result.isFinal) {
            finalTranscript += transcriptText;
          }
        }

        if (finalTranscript) {
          setTranscript((prev) => prev + (prev ? ' ' : '') + finalTranscript);
        }
      };

      recognition.onerror = (event: SpeechRecognitionErrorEvent): void => {
        const errorMessages: Record<SpeechRecognitionErrorCode, string> = {
          'no-speech': 'No se detectó voz. Intenta de nuevo.',
          'aborted': 'Reconocimiento cancelado.',
          'audio-capture': 'No se pudo acceder al micrófono.',
          'network': 'Error de red. Verifica tu conexión.',
          'not-allowed': 'Permiso de micrófono denegado.',
          'service-not-allowed': 'Servicio de reconocimiento no disponible.',
          'bad-grammar': 'Error en la gramática del reconocimiento.',
          'language-not-supported': 'El idioma no está soportado.',
        };

        const errorMessage = errorMessages[event.error] ?? `Error: ${event.error}`;
        setError(errorMessage);
        setIsListening(false);
        isListeningRef.current = false;
      };

      recognition.onend = (): void => {
        // Only update state if we're still marked as listening
        // This prevents state updates after unmount
        if (isListeningRef.current) {
          setIsListening(false);
          isListeningRef.current = false;
        }
      };
    }

    return (): void => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch {
          // Ignore errors during cleanup
        }
      }
    };
  }, [supported]);

  const startListening = useCallback((): void => {
    if (recognitionRef.current && supported && !isListeningRef.current) {
      setError(null);
      setTranscript('');
      
      try {
        recognitionRef.current.start();
        setIsListening(true);
        isListeningRef.current = true;
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : 'Error al iniciar el reconocimiento';
        setError(errorMsg);
      }
    }
  }, [supported]);

  const stopListening = useCallback((): void => {
    if (recognitionRef.current && isListeningRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        // Ignore errors during stop
      }
      
      setIsListening(false);
      isListeningRef.current = false;
    }
  }, []);

  const resetTranscript = useCallback((): void => {
    setTranscript('');
  }, []);

  return {
    isListening,
    transcript,
    startListening,
    stopListening,
    error,
    supported,
  };
}

export default useSpeechRecognition;
