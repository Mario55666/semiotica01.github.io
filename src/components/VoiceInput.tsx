import React, { useState, useEffect } from 'react';
import { Mic, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useSpeechRecognition } from '@/hooks/useSpeechRecognition';

interface VoiceInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  label?: string;
}

export function VoiceInput({ value, onChange, placeholder, rows = 4, label }: VoiceInputProps) {
  const { isListening, transcript, startListening, stopListening, error, supported } = useSpeechRecognition();
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    if (transcript) {
      const newValue = localValue + (localValue ? ' ' : '') + transcript;
      setLocalValue(newValue);
      onChange(newValue);
    }
  }, [transcript]);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLocalValue(e.target.value);
    onChange(e.target.value);
  };

  const handleToggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  return (
    <div className="space-y-2">
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <div className="relative">
        <Textarea
          value={localValue}
          onChange={handleChange}
          placeholder={placeholder}
          rows={rows}
          className="pr-12 resize-none"
        />
        <div className="absolute bottom-2 right-2">
          <Button
            type="button"
            variant={isListening ? "destructive" : "secondary"}
            size="icon"
            onClick={handleToggleListening}
            disabled={!supported}
            className="h-8 w-8"
            title={isListening ? "Detener grabación" : "Iniciar grabación de voz"}
          >
            {isListening ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Mic className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
      {isListening && (
        <p className="text-xs text-green-600 flex items-center gap-1">
          <span className="animate-pulse">●</span> Escuchando... Habla ahora
        </p>
      )}
      {error && (
        <p className="text-xs text-red-500">{error}</p>
      )}
      {!supported && (
        <p className="text-xs text-amber-600">
          Tu navegador no soporta reconocimiento de voz. Usa Chrome o Edge para esta función.
        </p>
      )}
    </div>
  );
}
