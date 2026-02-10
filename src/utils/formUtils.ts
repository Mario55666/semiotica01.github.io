import type { FormData, EmailTemplateParams, ValidationResult } from '../types/form.types.js';

/**
 * Validates the current form step
 * @param stepNumber - The current step number
 * @param formData - The form data to validate
 * @returns ValidationResult with isValid flag and errors array
 */
export function validateStep(stepNumber: number, formData: Partial<FormData>): ValidationResult {
  const errors: string[] = [];

  switch (stepNumber) {
    case 1:
      if (!formData.nombre?.trim()) {
        errors.push('El nombre es obligatorio');
      }
      if (!formData.correo?.trim()) {
        errors.push('El correo electrónico es obligatorio');
      } else if (!isValidEmail(formData.correo)) {
        errors.push('El correo electrónico no es válido');
      }
      break;

    case 2:
      if (!formData.aulaReferencia?.trim()) {
        errors.push('El aula de referencia es obligatoria');
      }
      if (!formData.descripcionInterior?.trim()) {
        errors.push('La descripción del interior es obligatoria');
      }
      if (!formData.descripcionPasillo?.trim()) {
        errors.push('La descripción del pasillo es obligatoria');
      }
      break;

    case 3:
      for (let i = 1; i <= 6; i++) {
        const signoKey = `signo${i}` as keyof FormData;
        if (!formData[signoKey]?.trim()) {
          errors.push(`El signo ${i} es obligatorio`);
        }
      }
      break;

    case 4:
      for (let i = 1; i <= 4; i++) {
        const compKey = `comportamiento${i}` as keyof FormData;
        const espKey = `rasgoEspacial${i}` as keyof FormData;
        if (!formData[compKey]?.trim()) {
          errors.push(`El comportamiento ${i} es obligatorio`);
        }
        if (!formData[espKey]?.trim()) {
          errors.push(`El rasgo espacial ${i} es obligatorio`);
        }
      }
      break;

    case 5:
      for (let i = 1; i <= 3; i++) {
        const corpKey = `corporal${i}` as keyof FormData;
        const semCorpKey = `semanticaCorporal${i}` as keyof FormData;
        const sinCorpKey = `sintacticaCorporal${i}` as keyof FormData;
        const pragCorpKey = `pragmaticaCorporal${i}` as keyof FormData;
        
        if (!formData[corpKey]?.trim()) {
          errors.push(`El signo corporal ${i} es obligatorio`);
        }
        if (!formData[semCorpKey]?.trim()) {
          errors.push(`La semántica del signo corporal ${i} es obligatoria`);
        }
        if (!formData[sinCorpKey]?.trim()) {
          errors.push(`La sintáctica del signo corporal ${i} es obligatoria`);
        }
        if (!formData[pragCorpKey]?.trim()) {
          errors.push(`La pragmática del signo corporal ${i} es obligatoria`);
        }

        const espKey = `espacial${i}` as keyof FormData;
        const semEspKey = `semanticaEspacial${i}` as keyof FormData;
        const sinEspKey = `sintacticaEspacial${i}` as keyof FormData;
        const pragEspKey = `pragmaticaEspacial${i}` as keyof FormData;
        
        if (!formData[espKey]?.trim()) {
          errors.push(`El signo espacial ${i} es obligatorio`);
        }
        if (!formData[semEspKey]?.trim()) {
          errors.push(`La semántica del signo espacial ${i} es obligatoria`);
        }
        if (!formData[sinEspKey]?.trim()) {
          errors.push(`La sintáctica del signo espacial ${i} es obligatoria`);
        }
        if (!formData[pragEspKey]?.trim()) {
          errors.push(`La pragmática del signo espacial ${i} es obligatoria`);
        }
      }
      break;

    case 6:
      if (!formData.textoSignos?.trim()) {
        errors.push('El texto sobre signos es obligatorio');
      }
      if (!formData.responsabilidadProfesional?.trim()) {
        errors.push('La respuesta sobre responsabilidad profesional es obligatoria');
      }
      break;

    case 7:
      for (let i = 1; i <= 5; i++) {
        const pregKey = `pregunta${i}` as keyof FormData;
        if (!formData[pregKey]?.trim()) {
          errors.push(`La pregunta ${i} debe ser respondida`);
        }
      }
      break;

    default:
      break;
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Validates an email address
 * @param email - The email to validate
 * @returns boolean indicating if the email is valid
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Generates the email content from form data
 * @param data - The complete form data
 * @returns string with the formatted email content
 */
export function generateEmailContent(data: FormData): string {
  return `
TAREA SEMIÓTICA - AULA Y PASILLO DEL PISO 12 COMO REALIDAD-SIGNO EN SISMO

Estudiante: ${data.nombre}
Correo: ${data.correo}
${data.correoCopia ? `Copia a: ${data.correoCopia}` : ''}

================================================================================
PARTE 1: DESCRIPCIÓN DEL ESCENARIO
================================================================================

Aula de referencia: ${data.aulaReferencia}

Descripción del interior:
${data.descripcionInterior}

Descripción del pasillo:
${data.descripcionPasillo}

================================================================================
PARTE 2.1: SIGNOS VISIBLES
================================================================================

1. ${data.signo1} (Tipo: ${data.tipoSigno1})
2. ${data.signo2} (Tipo: ${data.tipoSigno2})
3. ${data.signo3} (Tipo: ${data.tipoSigno3})
4. ${data.signo4} (Tipo: ${data.tipoSigno4})
5. ${data.signo5} (Tipo: ${data.tipoSigno5})
6. ${data.signo6} (Tipo: ${data.tipoSigno6})

================================================================================
PARTE 2.2: SIGNOS CORPORALES
================================================================================

Declaro que voy a tratar estos comportamientos como signos corporales.

1. ${data.comportamiento1}
2. ${data.comportamiento2}
3. ${data.comportamiento3}
4. ${data.comportamiento4}

================================================================================
PARTE 2.2: SIGNOS ESPACIALES
================================================================================

Declaro que voy a analizar estos rasgos como signos espaciales (el espacio que "dice" algo sobre cómo moverse).

1. ${data.rasgoEspacial1}
2. ${data.rasgoEspacial2}
3. ${data.rasgoEspacial3}
4. ${data.rasgoEspacial4}

================================================================================
PARTE 3: ANÁLISIS SEMIÓTICO - SIGNOS CORPORALES
================================================================================

SIGNO CORPORAL 1: ${data.corporal1}
  • Semántica: ${data.semanticaCorporal1}
  • Sintáctica: ${data.sintacticaCorporal1}
  • Pragmática: ${data.pragmaticaCorporal1}

SIGNO CORPORAL 2: ${data.corporal2}
  • Semántica: ${data.semanticaCorporal2}
  • Sintáctica: ${data.sintacticaCorporal2}
  • Pragmática: ${data.pragmaticaCorporal2}

SIGNO CORPORAL 3: ${data.corporal3}
  • Semántica: ${data.semanticaCorporal3}
  • Sintáctica: ${data.sintacticaCorporal3}
  • Pragmática: ${data.pragmaticaCorporal3}

================================================================================
PARTE 3: ANÁLISIS SEMIÓTICO - SIGNOS ESPACIALES
================================================================================

SIGNO ESPACIAL 1: ${data.espacial1}
  • Semántica: ${data.semanticaEspacial1}
  • Sintáctica: ${data.sintacticaEspacial1}
  • Pragmática: ${data.pragmaticaEspacial1}

SIGNO ESPACIAL 2: ${data.espacial2}
  • Semántica: ${data.semanticaEspacial2}
  • Sintáctica: ${data.sintacticaEspacial2}
  • Pragmática: ${data.pragmaticaEspacial2}

SIGNO ESPACIAL 3: ${data.espacial3}
  • Semántica: ${data.semanticaEspacial3}
  • Sintáctica: ${data.sintacticaEspacial3}
  • Pragmática: ${data.pragmaticaEspacial3}

================================================================================
PARTE 4: AULA COMO TEXTO DE SIGNOS
================================================================================

${data.textoSignos}

================================================================================
PARTE 5: RESPONSABILIDAD PROFESIONAL
================================================================================

${data.responsabilidadProfesional}

================================================================================
PREGUNTAS DE OPCIÓN MÚLTIPLE
================================================================================

1. ¿Qué entiende la semiótica por "realidad como entramado de signos"?
   Respuesta: ${data.pregunta1}

2. ¿Cuál de los siguientes es un ejemplo de signo espacial?
   Respuesta: ${data.pregunta2}

3. En la tríada semiótica, la pragmática se refiere a:
   Respuesta: ${data.pregunta3}

4. ¿Por qué el comportamiento de "caminar en fila" durante una evacuación es un signo corporal?
   Respuesta: ${data.pregunta4}

5. ¿Cómo se relacionan la comunicación y el diseño con la semiótica en situaciones de emergencia?
   Respuesta: ${data.pregunta5}

================================================================================
FIN DEL INFORME
================================================================================
  `.trim();
}

/**
 * Creates email template parameters for sending
 * @param data - The complete form data
 * @returns EmailTemplateParams object
 */
export function createEmailParams(data: FormData): EmailTemplateParams {
  return {
    to_email: data.correo,
    cc_email: data.correoCopia,
    from_name: data.nombre,
    subject: `Tarea Semiótica - ${data.nombre}`,
    message: generateEmailContent(data),
  };
}

/**
 * Form data to object converter
 * @param formElement - The HTML form element
 * @returns Partial FormData object
 */
export function formToObject(formElement: HTMLFormElement): Partial<FormData> {
  const formData = new FormData(formElement);
  const data: Partial<FormData> = {};

  formData.forEach((value, key) => {
    (data as Record<string, unknown>)[key] = value as string;
  });

  // Get radio button values
  for (let i = 1; i <= 6; i++) {
    const radio = formElement.querySelector(`input[name="tipoSigno${i}"]:checked`) as HTMLInputElement;
    if (radio) {
      (data as Record<string, unknown>)[`tipoSigno${i}`] = radio.value;
    }
  }

  return data;
}

/**
 * Step configuration for the form
 */
export const STEP_CONFIG = [
  { number: 1, title: 'Estudiante', icon: '👤' },
  { number: 2, title: 'Escenario', icon: '📍' },
  { number: 3, title: 'Signos Visibles', icon: '👁️' },
  { number: 4, title: 'Signos Ocultos', icon: '🫂' },
  { number: 5, title: 'Análisis', icon: '📊' },
  { number: 6, title: 'Texto y Profesión', icon: '📝' },
  { number: 7, title: 'Preguntas', icon: '✅' },
] as const;

/**
 * Multiple choice questions
 */
export const MULTIPLE_CHOICE_QUESTIONS = [
  {
    id: 'pregunta1',
    question: '¿Qué entiende la semiótica por "realidad como entramado de signos"?',
    options: [
      { value: 'a', label: 'Que todo en la realidad está hecho de materiales físicos que podemos tocar' },
      { value: 'b', label: 'Que la realidad se construye y se interpreta a través de signos que transmiten significados' },
      { value: 'c', label: 'Que solo los objetos artificiales son signos, no los naturales' },
      { value: 'd', label: 'Que los signos solo existen en el lenguaje verbal escrito' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 'pregunta2',
    question: '¿Cuál de los siguientes es un ejemplo de signo espacial?',
    options: [
      { value: 'a', label: 'Un cartel con instrucciones de evacuación' },
      { value: 'b', label: 'El ancho de un pasillo que determina el flujo de personas' },
      { value: 'c', label: 'Una alarma sonora de emergencia' },
      { value: 'd', label: 'Un mensaje de texto enviado durante el sismo' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 'pregunta3',
    question: 'En la tríada semiótica, la pragmática se refiere a:',
    options: [
      { value: 'a', label: 'El significado literal del signo' },
      { value: 'b', label: 'La relación entre signos en un sistema' },
      { value: 'c', label: 'Los efectos y conductas que produce el signo en los usuarios' },
      { value: 'd', label: 'La historia y origen del signo' },
    ],
    correctAnswer: 'c',
  },
  {
    id: 'pregunta4',
    question: '¿Por qué el comportamiento de "caminar en fila" durante una evacuación es un signo corporal?',
    options: [
      { value: 'a', label: 'Porque es una acción física que no transmite ningún significado' },
      { value: 'b', label: 'Porque comunica orden, cuidado mutuo y facilita la evacuación segura' },
      { value: 'c', label: 'Porque solo los gestos con las manos son signos corporales' },
      { value: 'd', label: 'Porque es obligatorio por ley' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 'pregunta5',
    question: '¿Cómo se relacionan la comunicación y el diseño con la semiótica en situaciones de emergencia?',
    options: [
      { value: 'a', label: 'No tienen relación; la semiótica es solo teoría filosófica' },
      { value: 'b', label: 'Permiten diseñar señalética, organizar espacios y crear mensajes claros que salvan vidas' },
      { value: 'c', label: 'Solo sirven para hacer carteles decorativos' },
      { value: 'd', label: 'La semiótica no aplica al diseño gráfico' },
    ],
    correctAnswer: 'b',
  },
];
