/**
 * Type definitions for the Semiotics Form
 * Aula y pasillo del piso 12 como realidad-signo en sismo
 */

// Sign types for visible signs
export type SignType = 'verbal' | 'visual' | 'espacial';

// Student data interface
export interface StudentData {
  nombre: string;
  correo: string;
  correoCopia?: string;
}

// Scenario description interface
export interface ScenarioDescription {
  aulaReferencia: string;
  descripcionInterior: string;
  descripcionPasillo: string;
}

// Visible sign interface
export interface VisibleSign {
  description: string;
  type: SignType;
}

// Hidden signs interface
export interface HiddenSigns {
  comportamientos: string[];
  rasgosEspaciales: string[];
}

// Semiotic analysis for a single sign
export interface SemioticAnalysis {
  signo: string;
  semantica: string;
  sintactica: string;
  pragmatica: string;
}

// Complete form data interface
export interface FormData {
  // Part 1: Student data
  nombre: string;
  correo: string;
  correoCopia?: string;

  // Part 2: Scenario
  aulaReferencia: string;
  descripcionInterior: string;
  descripcionPasillo: string;

  // Part 3: Visible signs
  signo1: string;
  tipoSigno1: SignType;
  signo2: string;
  tipoSigno2: SignType;
  signo3: string;
  tipoSigno3: SignType;
  signo4: string;
  tipoSigno4: SignType;
  signo5: string;
  tipoSigno5: SignType;
  signo6: string;
  tipoSigno6: SignType;

  // Part 4: Hidden signs - Corporales
  comportamiento1: string;
  comportamiento2: string;
  comportamiento3: string;
  comportamiento4: string;

  // Part 5: Hidden signs - Espaciales
  rasgoEspacial1: string;
  rasgoEspacial2: string;
  rasgoEspacial3: string;
  rasgoEspacial4: string;

  // Part 6: Semiotic analysis - Corporales
  corporal1: string;
  semanticaCorporal1: string;
  sintacticaCorporal1: string;
  pragmaticaCorporal1: string;
  corporal2: string;
  semanticaCorporal2: string;
  sintacticaCorporal2: string;
  pragmaticaCorporal2: string;
  corporal3: string;
  semanticaCorporal3: string;
  sintacticaCorporal3: string;
  pragmaticaCorporal3: string;

  // Part 7: Semiotic analysis - Espaciales
  espacial1: string;
  semanticaEspacial1: string;
  sintacticaEspacial1: string;
  pragmaticaEspacial1: string;
  espacial2: string;
  semanticaEspacial2: string;
  sintacticaEspacial2: string;
  pragmaticaEspacial2: string;
  espacial3: string;
  semanticaEspacial3: string;
  sintacticaEspacial3: string;
  pragmaticaEspacial3: string;

  // Part 8: Texto de signos
  textoSignos: string;

  // Part 9: Responsabilidad profesional
  responsabilidadProfesional: string;

  // Part 10: Multiple choice questions
  pregunta1: string;
  pregunta2: string;
  pregunta3: string;
  pregunta4: string;
  pregunta5: string;
}

// Email template parameters
export interface EmailTemplateParams {
  to_email: string;
  cc_email?: string;
  from_name: string;
  subject: string;
  message: string;
}

// Speech recognition types
export interface SpeechRecognitionHook {
  isListening: boolean;
  transcript: string;
  startListening: () => void;
  stopListening: () => void;
  error: string | null;
  supported: boolean;
}

// Form validation result
export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

// Step configuration
export interface StepConfig {
  number: number;
  title: string;
  icon: string;
}

// Multiple choice question
export interface MultipleChoiceQuestion {
  id: string;
  question: string;
  options: {
    value: string;
    label: string;
  }[];
  correctAnswer?: string;
}
