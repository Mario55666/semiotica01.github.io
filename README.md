# 📚 Formulario de Semiótica - Aula y Pasillo Piso 12

Formulario interactivo para la tarea escrita de semiótica: "Aula y pasillo del piso 12 como realidad-signo en sismo".

## 🌐 Demo en línea

**URL:** https://p2hrkshcbt6r6.ok.kimi.link

## ✨ Características

- ✅ **7 pasos** de navegación con barra de progreso
- ✅ **Campos de correo** (principal + copia CC)
- ✅ **Transcripción de voz** (Web Speech API)
- ✅ **Preguntas de opción múltiple** (5 preguntas)
- ✅ **Validación** de campos obligatorios
- ✅ **Diseño responsive** (móvil y desktop)
- ✅ **ESLint + TypeScript** configurados

## 📁 Estructura del proyecto

```
formulario-semiotica/
├── index.html                 # Formulario principal (HTML + CSS + JS)
├── eslint.config.js           # Configuración de ESLint
├── package.json               # Dependencias
├── tsconfig.json              # Configuración de TypeScript
├── tsconfig.app.json          # Configuración de TypeScript (app)
├── tsconfig.node.json         # Configuración de TypeScript (node)
├── README.md                  # Este archivo
└── src/
    ├── hooks/
    │   └── useSpeechRecognition.ts   # Hook de reconocimiento de voz
    ├── types/
    │   └── form.types.ts             # Tipos de TypeScript
    └── utils/
        └── formUtils.ts              # Utilidades del formulario
```

## 🚀 Instalación

```bash
# Clonar o descargar el proyecto
cd formulario-semiotica

# Instalar dependencias
npm install

# Ejecutar linter
npm run lint

# Verificar tipos
npm run type-check
```

## 📝 Contenido del formulario

### Parte 1: Descripción del escenario
- Aula de referencia
- Descripción del interior
- Descripción del pasillo

### Parte 2.1: Signos visibles (6 signos)
- Clasificación: verbal, visual, espacial

### Parte 2.2: Signos "escondidos"
- 4 signos corporales (comportamientos)
- 4 signos espaciales (rasgos del espacio)

### Parte 3: Análisis semiótico
- 3 signos corporales con semántica, sintáctica y pragmática
- 3 signos espaciales con semántica, sintáctica y pragmática

### Parte 4: Aula como "texto" de signos
- Párrafo reflexivo sobre realidad-signo

### Parte 5: Responsabilidad profesional
- Conexión con comunicación y diseño

### Preguntas de opción múltiple (5)
- Evaluación de comprensión de conceptos semióticos

## 🎤 Reconocimiento de voz

El formulario incluye botones de micrófono (🎤) en cada campo de texto que permiten:

- Dictar respuestas en español
- Transcripción en tiempo real
- Indicador visual de grabación

**Requisitos:** Navegador Chrome o Edge

## 🔧 Configuración de ESLint

```javascript
// eslint.config.js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
```

## 📧 Envío de correos

El formulario está preparado para enviar correos. Opciones:

### Opción 1: EmailJS (recomendado)
```javascript
import emailjs from '@emailjs/browser';

await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  templateParams,
  'YOUR_PUBLIC_KEY'
);
```

### Opción 2: Backend propio
```javascript
fetch('/api/send-email', {
  method: 'POST',
  body: JSON.stringify(data)
});
```

### Opción 3: mailto:
```javascript
window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
```

## 🛠️ Tecnologías

- HTML5
- CSS3
- TypeScript
- ESLint 9
- Web Speech API

## 📄 Licencia

MIT

---

**Nota:** Este formulario fue creado como parte de la tarea de semiótica para la sesión 1 del curso de Comunicación y Diseño.
