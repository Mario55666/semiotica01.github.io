import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Send, CheckCircle, BookOpen, AlertTriangle, Users, MapPin, MessageSquare, Loader2 } from 'lucide-react';
import { VoiceInput } from './VoiceInput';


interface FormData {
  // Datos del estudiante
  nombre: string;
  correo: string;
  correoCopia: string;
  
  // Parte 1: Descripción del escenario
  aulaReferencia: string;
  descripcionInterior: string;
  descripcionPasillo: string;
  
  // Parte 2.1: Signos visibles
  signo1: string;
  tipoSigno1: string;
  signo2: string;
  tipoSigno2: string;
  signo3: string;
  tipoSigno3: string;
  signo4: string;
  tipoSigno4: string;
  signo5: string;
  tipoSigno5: string;
  signo6: string;
  tipoSigno6: string;
  
  // Parte 2.2: Signos corporales
  comportamiento1: string;
  comportamiento2: string;
  comportamiento3: string;
  comportamiento4: string;
  declaracionCorporal: string;
  
  // Parte 2.2: Signos espaciales
  rasgoEspacial1: string;
  rasgoEspacial2: string;
  rasgoEspacial3: string;
  rasgoEspacial4: string;
  declaracionEspacial: string;
  
  // Parte 3: Análisis semiótico - Signos corporales
  corporal1: string;
  tipoCorporal1: string;
  semanticaCorporal1: string;
  sintacticaCorporal1: string;
  pragmaticaCorporal1: string;
  
  corporal2: string;
  tipoCorporal2: string;
  semanticaCorporal2: string;
  sintacticaCorporal2: string;
  pragmaticaCorporal2: string;
  
  corporal3: string;
  tipoCorporal3: string;
  semanticaCorporal3: string;
  sintacticaCorporal3: string;
  pragmaticaCorporal3: string;
  
  // Parte 3: Análisis semiótico - Signos espaciales
  espacial1: string;
  tipoEspacial1: string;
  semanticaEspacial1: string;
  sintacticaEspacial1: string;
  pragmaticaEspacial1: string;
  
  espacial2: string;
  tipoEspacial2: string;
  semanticaEspacial2: string;
  sintacticaEspacial2: string;
  pragmaticaEspacial2: string;
  
  espacial3: string;
  tipoEspacial3: string;
  semanticaEspacial3: string;
  sintacticaEspacial3: string;
  pragmaticaEspacial3: string;
  
  // Parte 4: Aula como texto de signos
  textoSignos: string;
  
  // Parte 5: Pregunta final
  responsabilidadProfesional: string;
  
  // Preguntas de opción múltiple
  pregunta1: string;
  pregunta2: string;
  pregunta3: string;
  pregunta4: string;
  pregunta5: string;
}

const initialFormData: FormData = {
  nombre: '',
  correo: '',
  correoCopia: '',
  aulaReferencia: '',
  descripcionInterior: '',
  descripcionPasillo: '',
  signo1: '',
  tipoSigno1: 'visual',
  signo2: '',
  tipoSigno2: 'visual',
  signo3: '',
  tipoSigno3: 'verbal',
  signo4: '',
  tipoSigno4: 'espacial',
  signo5: '',
  tipoSigno5: 'visual',
  signo6: '',
  tipoSigno6: 'verbal',
  comportamiento1: '',
  comportamiento2: '',
  comportamiento3: '',
  comportamiento4: '',
  declaracionCorporal: 'Declaro que voy a tratar estos comportamientos como signos corporales.',
  rasgoEspacial1: '',
  rasgoEspacial2: '',
  rasgoEspacial3: '',
  rasgoEspacial4: '',
  declaracionEspacial: 'Declaro que voy a analizar estos rasgos como signos espaciales (el espacio que "dice" algo sobre cómo moverse).',
  corporal1: '',
  tipoCorporal1: '',
  semanticaCorporal1: '',
  sintacticaCorporal1: '',
  pragmaticaCorporal1: '',
  corporal2: '',
  tipoCorporal2: '',
  semanticaCorporal2: '',
  sintacticaCorporal2: '',
  pragmaticaCorporal2: '',
  corporal3: '',
  tipoCorporal3: '',
  semanticaCorporal3: '',
  sintacticaCorporal3: '',
  pragmaticaCorporal3: '',
  espacial1: '',
  tipoEspacial1: '',
  semanticaEspacial1: '',
  sintacticaEspacial1: '',
  pragmaticaEspacial1: '',
  espacial2: '',
  tipoEspacial2: '',
  semanticaEspacial2: '',
  sintacticaEspacial2: '',
  pragmaticaEspacial2: '',
  espacial3: '',
  tipoEspacial3: '',
  semanticaEspacial3: '',
  sintacticaEspacial3: '',
  pragmaticaEspacial3: '',
  textoSignos: '',
  responsabilidadProfesional: '',
  pregunta1: '',
  pregunta2: '',
  pregunta3: '',
  pregunta4: '',
  pregunta5: '',
};

export function SemioticsForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Configuración de EmailJS - usando valores de demostración
      // En producción, estos deberían ser variables de entorno
      // const serviceId = 'service_default';
      // const templateId = 'template_default';
      // const publicKey = 'public_key_default';

      // const templateParams = {
      //   to_email: formData.correo,
      //   cc_email: formData.correoCopia,
      //   from_name: formData.nombre,
      //   subject: `Tarea Semiótica - ${formData.nombre}`,
      //   message: generateEmailContent(formData),
      // };

      // Simulación de envío exitoso (en producción usar emailjs.send)
      // await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      // Simulación de delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // En producción, aquí se enviaría el correo real
      console.log('Contenido del email:', generateEmailContent(formData));
      
      setSubmitSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error al enviar:', error);
      alert('Hubo un error al enviar el formulario. Por favor intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateEmailContent = (data: FormData): string => {
    return `
TAREA SEMIÓTICA - AULA Y PASILLO DEL PISO 12 COMO REALIDAD-SIGNO EN SISMO

Estudiante: ${data.nombre}
Correo: ${data.correo}

=== PARTE 1: DESCRIPCIÓN DEL ESCENARIO ===
Aula de referencia: ${data.aulaReferencia}

Descripción del interior:
${data.descripcionInterior}

Descripción del pasillo:
${data.descripcionPasillo}

=== PARTE 2.1: SIGNOS VISIBLES ===
1. ${data.signo1} (Tipo: ${data.tipoSigno1})
2. ${data.signo2} (Tipo: ${data.tipoSigno2})
3. ${data.signo3} (Tipo: ${data.tipoSigno3})
4. ${data.signo4} (Tipo: ${data.tipoSigno4})
5. ${data.signo5} (Tipo: ${data.tipoSigno5})
6. ${data.signo6} (Tipo: ${data.tipoSigno6})

=== PARTE 2.2: SIGNOS CORPORALES ===
${data.declaracionCorporal}

1. ${data.comportamiento1}
2. ${data.comportamiento2}
3. ${data.comportamiento3}
4. ${data.comportamiento4}

=== PARTE 2.2: SIGNOS ESPACIALES ===
${data.declaracionEspacial}

1. ${data.rasgoEspacial1}
2. ${data.rasgoEspacial2}
3. ${data.rasgoEspacial3}
4. ${data.rasgoEspacial4}

=== PARTE 3: ANÁLISIS SEMIÓTICO ===
[Tabla de signos corporales y espaciales con semántica, sintáctica y pragmática]

=== PARTE 4: AULA COMO TEXTO DE SIGNOS ===
${data.textoSignos}

=== PARTE 5: RESPONSABILIDAD PROFESIONAL ===
${data.responsabilidadProfesional}

=== PREGUNTAS DE OPCIÓN MÚLTIPLE ===
1. ${data.pregunta1}
2. ${data.pregunta2}
3. ${data.pregunta3}
4. ${data.pregunta4}
5. ${data.pregunta5}
    `.trim();
  };

  const steps = [
    { number: 1, title: 'Datos del Estudiante', icon: Users },
    { number: 2, title: 'Parte 1: Escenario', icon: MapPin },
    { number: 3, title: 'Parte 2: Signos Visibles', icon: AlertTriangle },
    { number: 4, title: 'Parte 2: Signos Corporales y Espaciales', icon: Users },
    { number: 5, title: 'Parte 3: Análisis Semiótico', icon: BookOpen },
    { number: 6, title: 'Parte 4 & 5: Texto y Profesión', icon: MessageSquare },
    { number: 7, title: 'Preguntas de Opción Múltiple', icon: CheckCircle },
  ];

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl">
            <CardContent className="pt-12 pb-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                ¡Formulario enviado exitosamente!
              </h2>
              <p className="text-gray-600 mb-6">
                Se ha enviado una copia del informe a:<br />
                <strong>{formData.correo}</strong>
                {formData.correoCopia && (
                  <><br />y a <strong>{formData.correoCopia}</strong></>
                )}
              </p>
              <Button 
                onClick={() => {
                  setSubmitSuccess(false);
                  setFormData(initialFormData);
                  setCurrentStep(1);
                }}
                className="bg-indigo-600 hover:bg-indigo-700"
              >
                Enviar otro formulario
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tarea Escrita – Semiótica
          </h1>
          <p className="text-lg text-gray-600">
            Aula y pasillo del piso 12 como realidad-signo en sismo
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex items-center justify-between min-w-max px-2">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <React.Fragment key={step.number}>
                  <button
                    onClick={() => setCurrentStep(step.number)}
                    className={`flex flex-col items-center p-2 rounded-lg transition-all ${
                      currentStep === step.number
                        ? 'bg-indigo-600 text-white'
                        : currentStep > step.number
                        ? 'bg-green-500 text-white'
                        : 'bg-white text-gray-500 hover:bg-gray-100'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
                      currentStep === step.number ? 'bg-white/20' : ''
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-medium whitespace-nowrap">{step.title}</span>
                  </button>
                  {index < steps.length - 1 && (
                    <div className={`w-8 h-0.5 mx-1 ${
                      currentStep > step.number ? 'bg-green-500' : 'bg-gray-300'
                    }`} />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Datos del Estudiante */}
          {currentStep === 1 && (
            <Card className="shadow-lg mb-6">
              <CardHeader className="bg-indigo-50">
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Datos del Estudiante
                </CardTitle>
                <CardDescription>
                  Ingresa tus datos para recibir una copia del informe
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre completo *</Label>
                  <Input
                    id="nombre"
                    value={formData.nombre}
                    onChange={(e) => handleInputChange('nombre', e.target.value)}
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="correo">Correo electrónico *</Label>
                  <Input
                    id="correo"
                    type="email"
                    value={formData.correo}
                    onChange={(e) => handleInputChange('correo', e.target.value)}
                    placeholder="tu@email.com"
                    required
                  />
                  <p className="text-sm text-gray-500">
                    Se enviará una copia del informe a este correo
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="correoCopia">Correo para copia (opcional)</Label>
                  <Input
                    id="correoCopia"
                    type="email"
                    value={formData.correoCopia}
                    onChange={(e) => handleInputChange('correoCopia', e.target.value)}
                    placeholder="correo@copia.com"
                  />
                </div>

                <div className="flex justify-end">
                  <Button 
                    type="button" 
                    onClick={() => setCurrentStep(2)}
                    className="bg-indigo-600 hover:bg-indigo-700"
                  >
                    Siguiente
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Parte 1 - Descripción del Escenario */}
          {currentStep === 2 && (
            <Card className="shadow-lg mb-6">
              <CardHeader className="bg-indigo-50">
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Parte 1: Descripción del Escenario
                </CardTitle>
                <CardDescription>
                  Describe el aula y pasillo del piso 12 (máx. ½ página)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="space-y-2">
                  <Label htmlFor="aulaReferencia">¿Qué aula del piso 12 tomas como referencia? *</Label>
                  <VoiceInput
                    value={formData.aulaReferencia}
                    onChange={(value) => handleInputChange('aulaReferencia', value)}
                    placeholder="Ej: Aula 1205, Laboratorio de Diseño, etc."
                    rows={2}
                  />
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label>Descripción del interior del aula *</Label>
                  <p className="text-sm text-gray-500">
                    Describe: disposición de mesas, ventanas, puertas, estanterías, equipos
                  </p>
                  <VoiceInput
                    value={formData.descripcionInterior}
                    onChange={(value) => handleInputChange('descripcionInterior', value)}
                    placeholder="El aula tiene..."
                    rows={5}
                  />
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label>Descripción del pasillo *</Label>
                  <p className="text-sm text-gray-500">
                    Describe: ancho, giros, cercanía de escaleras o ascensor
                  </p>
                  <VoiceInput
                    value={formData.descripcionPasillo}
                    onChange={(value) => handleInputChange('descripcionPasillo', value)}
                    placeholder="Al salir al pasillo..."
                    rows={5}
                  />
                </div>

                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={() => setCurrentStep(1)}>
                    Anterior
                  </Button>
                  <Button 
                    type="button" 
                    onClick={() => setCurrentStep(3)}
                    className="bg-indigo-600 hover:bg-indigo-700"
                  >
                    Siguiente
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Parte 2.1 - Signos Visibles */}
          {currentStep === 3 && (
            <Card className="shadow-lg mb-6">
              <CardHeader className="bg-indigo-50">
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Parte 2.1: Signos Visibles (Cotidianos)
                </CardTitle>
                <CardDescription>
                  Identifica al menos 6 signos visibles relacionados con circulación o seguridad
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div key={num} className="space-y-3 p-4 bg-gray-50 rounded-lg">
                    <Label className="font-semibold">Signo {num} *</Label>
                    <VoiceInput
                      value={formData[`signo${num}` as keyof FormData] as string}
                      onChange={(value) => handleInputChange(`signo${num}` as keyof FormData, value)}
                      placeholder={`Ej: ${
                        num === 1 ? 'Puerta del aula' :
                        num === 2 ? 'Ventanas' :
                        num === 3 ? 'Número de aula' :
                        num === 4 ? 'Escalera cercana' :
                        num === 5 ? 'Cartel de salida de emergencia' :
                        'Timbre o altavoz'
                      }`}
                      rows={2}
                    />
                    <div className="flex items-center gap-4">
                      <Label className="text-sm">Tipo:</Label>
                      <RadioGroup
                        value={formData[`tipoSigno${num}` as keyof FormData] as string}
                        onValueChange={(value) => handleInputChange(`tipoSigno${num}` as keyof FormData, value)}
                        className="flex gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="verbal" id={`tipo${num}-verbal`} />
                          <Label htmlFor={`tipo${num}-verbal`} className="text-sm">Verbal</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="visual" id={`tipo${num}-visual`} />
                          <Label htmlFor={`tipo${num}-visual`} className="text-sm">Visual</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="espacial" id={`tipo${num}-espacial`} />
                          <Label htmlFor={`tipo${num}-espacial`} className="text-sm">Espacial</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                ))}

                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={() => setCurrentStep(2)}>
                    Anterior
                  </Button>
                  <Button 
                    type="button" 
                    onClick={() => setCurrentStep(4)}
                    className="bg-indigo-600 hover:bg-indigo-700"
                  >
                    Siguiente
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Parte 2.2 - Signos Corporales y Espaciales */}
          {currentStep === 4 && (
            <Card className="shadow-lg mb-6">
              <CardHeader className="bg-indigo-50">
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Parte 2.2: Signos "Escondidos"
                </CardTitle>
                <CardDescription>
                  Comportamiento y espacio en situación de sismo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8 pt-6">
                {/* Signos Corporales */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-indigo-900">Signos Corporales (Comportamiento Humano)</h3>
                  <Alert className="bg-amber-50 border-amber-200">
                    <AlertDescription>
                      Imagina un sismo y la evacuación desde esa aula. Enumera comportamientos clave para la protección y apoyo entre compañeros.
                    </AlertDescription>
                  </Alert>
                  
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-indigo-900">
                      {formData.declaracionCorporal}
                    </p>
                  </div>

                  {[1, 2, 3, 4].map((num) => (
                    <div key={`corp-${num}`} className="space-y-2">
                      <Label>Comportamiento {num} *</Label>
                      <VoiceInput
                        value={formData[`comportamiento${num}` as keyof FormData] as string}
                        onChange={(value) => handleInputChange(`comportamiento${num}` as keyof FormData, value)}
                        placeholder={
                          num === 1 ? 'Ej: No correr' :
                          num === 2 ? 'Ej: No empujar' :
                          num === 3 ? 'Ej: Ayudar a quien cae' :
                          'Ej: Formar fila ordenada'
                        }
                        rows={2}
                      />
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Signos Espaciales */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-indigo-900">Signos Espaciales (Configuración del Aula y Pasillo)</h3>
                  <Alert className="bg-amber-50 border-amber-200">
                    <AlertDescription>
                      Enumera rasgos espaciales relevantes para evacuar: ancho del pasillo, sentido de apertura de puerta, posición de ventanas, esquinas, obstáculos.
                    </AlertDescription>
                  </Alert>
                  
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-indigo-900">
                      {formData.declaracionEspacial}
                    </p>
                  </div>

                  {[1, 2, 3, 4].map((num) => (
                    <div key={`esp-${num}`} className="space-y-2">
                      <Label>Rasgo espacial {num} *</Label>
                      <VoiceInput
                        value={formData[`rasgoEspacial${num}` as keyof FormData] as string}
                        onChange={(value) => handleInputChange(`rasgoEspacial${num}` as keyof FormData, value)}
                        placeholder={
                          num === 1 ? 'Ej: Ancho del pasillo de 2 metros' :
                          num === 2 ? 'Ej: Puerta que abre hacia adentro' :
                          num === 3 ? 'Ej: Ventanas en el lado derecho' :
                          'Ej: Escalera a 10 metros del aula'
                        }
                        rows={2}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={() => setCurrentStep(3)}>
                    Anterior
                  </Button>
                  <Button 
                    type="button" 
                    onClick={() => setCurrentStep(5)}
                    className="bg-indigo-600 hover:bg-indigo-700"
                  >
                    Siguiente
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 5: Parte 3 - Análisis Semiótico */}
          {currentStep === 5 && (
            <Card className="shadow-lg mb-6">
              <CardHeader className="bg-indigo-50">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Parte 3: Análisis Semiótico
                </CardTitle>
                <CardDescription>
                  Semántica – Sintáctica – Pragmática (3 signos corporales y 3 espaciales)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8 pt-6">
                {/* Signos Corporales */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-indigo-900 border-b pb-2">Signos Corporales</h3>
                  
                  {[1, 2, 3].map((num) => (
                    <div key={`corp-analisis-${num}`} className="space-y-4 p-4 bg-gray-50 rounded-lg">
                      <Label className="font-semibold text-indigo-700">Signo Corporal {num} *</Label>
                      
                      <VoiceInput
                        value={formData[`corporal${num}` as keyof FormData] as string}
                        onChange={(value) => handleInputChange(`corporal${num}` as keyof FormData, value)}
                        placeholder="Nombre del signo corporal"
                        rows={2}
                      />
                      
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">Semántica: ¿qué representa?</Label>
                          <VoiceInput
                            value={formData[`semanticaCorporal${num}` as keyof FormData] as string}
                            onChange={(value) => handleInputChange(`semanticaCorporal${num}` as keyof FormData, value)}
                            placeholder="Qué 'dice' este signo"
                            rows={3}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">Sintáctica: relación con otros signos</Label>
                          <VoiceInput
                            value={formData[`sintacticaCorporal${num}` as keyof FormData] as string}
                            onChange={(value) => handleInputChange(`sintacticaCorporal${num}` as keyof FormData, value)}
                            placeholder="Cómo se combina con otros"
                            rows={3}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">Pragmática: efectos en evacuación</Label>
                          <VoiceInput
                            value={formData[`pragmaticaCorporal${num}` as keyof FormData] as string}
                            onChange={(value) => handleInputChange(`pragmaticaCorporal${num}` as keyof FormData, value)}
                            placeholder="Conductas y efectos"
                            rows={3}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Signos Espaciales */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-indigo-900 border-b pb-2">Signos Espaciales</h3>
                  
                  {[1, 2, 3].map((num) => (
                    <div key={`esp-analisis-${num}`} className="space-y-4 p-4 bg-gray-50 rounded-lg">
                      <Label className="font-semibold text-indigo-700">Signo Espacial {num} *</Label>
                      
                      <VoiceInput
                        value={formData[`espacial${num}` as keyof FormData] as string}
                        onChange={(value) => handleInputChange(`espacial${num}` as keyof FormData, value)}
                        placeholder="Nombre del signo espacial"
                        rows={2}
                      />
                      
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">Semántica: ¿qué representa?</Label>
                          <VoiceInput
                            value={formData[`semanticaEspacial${num}` as keyof FormData] as string}
                            onChange={(value) => handleInputChange(`semanticaEspacial${num}` as keyof FormData, value)}
                            placeholder="Qué 'dice' este signo"
                            rows={3}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">Sintáctica: relación con otros signos</Label>
                          <VoiceInput
                            value={formData[`sintacticaEspacial${num}` as keyof FormData] as string}
                            onChange={(value) => handleInputChange(`sintacticaEspacial${num}` as keyof FormData, value)}
                            placeholder="Cómo se combina con otros"
                            rows={3}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">Pragmática: efectos en evacuación</Label>
                          <VoiceInput
                            value={formData[`pragmaticaEspacial${num}` as keyof FormData] as string}
                            onChange={(value) => handleInputChange(`pragmaticaEspacial${num}` as keyof FormData, value)}
                            placeholder="Conductas y efectos"
                            rows={3}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={() => setCurrentStep(4)}>
                    Anterior
                  </Button>
                  <Button 
                    type="button" 
                    onClick={() => setCurrentStep(6)}
                    className="bg-indigo-600 hover:bg-indigo-700"
                  >
                    Siguiente
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 6: Parte 4 y 5 */}
          {currentStep === 6 && (
            <Card className="shadow-lg mb-6">
              <CardHeader className="bg-indigo-50">
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Parte 4 y 5: Texto de Signos y Profesión
                </CardTitle>
                <CardDescription>
                  Reflexión final y conexión con comunicación y diseño
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8 pt-6">
                {/* Parte 4 */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-indigo-900">
                    Parte 4: Aula y Pasillo como "Texto" de Signos en Sismo
                  </h3>
                  <Alert className="bg-blue-50 border-blue-200">
                    <AlertDescription className="space-y-2">
                      <p>Redacta un párrafo de 8-10 líneas donde:</p>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        <li>Expliques por qué la experiencia del sismo es una <strong>realidad-signo</strong></li>
                        <li>Menciones al menos <strong>dos relaciones</strong> entre signos</li>
                        <li>Conectes con tu campo de <strong>comunicación y diseño</strong></li>
                      </ul>
                    </AlertDescription>
                  </Alert>
                  
                  <VoiceInput
                    value={formData.textoSignos}
                    onChange={(value) => handleInputChange('textoSignos', value)}
                    placeholder="La experiencia del sismo en el piso 12 no es solo física, sino una realidad-signo porque..."
                    rows={8}
                  />
                </div>

                <Separator />

                {/* Parte 5 */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-indigo-900">
                    Parte 5: Pregunta Final de Relación con la Profesión
                  </h3>
                  <Alert className="bg-green-50 border-green-200">
                    <AlertDescription>
                      <p className="font-medium">Responde en 3-4 líneas:</p>
                      <p className="italic mt-2">
                        "¿Qué responsabilidades crees que tendrás, como futuro profesional de la comunicación/diseño, 
                        cuando produzcas signos (afiches, señalética, interfaces, espacios) que puedan intervenir 
                        en situaciones de emergencia o seguridad?"
                      </p>
                    </AlertDescription>
                  </Alert>
                  
                  <VoiceInput
                    value={formData.responsabilidadProfesional}
                    onChange={(value) => handleInputChange('responsabilidadProfesional', value)}
                    placeholder="Como futuro profesional de la comunicación/diseño, considero que..."
                    rows={5}
                  />
                </div>

                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={() => setCurrentStep(5)}>
                    Anterior
                  </Button>
                  <Button 
                    type="button" 
                    onClick={() => setCurrentStep(7)}
                    className="bg-indigo-600 hover:bg-indigo-700"
                  >
                    Siguiente
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 7: Preguntas de Opción Múltiple */}
          {currentStep === 7 && (
            <Card className="shadow-lg mb-6">
              <CardHeader className="bg-indigo-50">
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Preguntas de Opción Múltiple
                </CardTitle>
                <CardDescription>
                  Evaluación de comprensión de conceptos semióticos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8 pt-6">
                {/* Pregunta 1 */}
                <div className="space-y-3">
                  <Label className="font-semibold">
                    1. ¿Qué entiende la semiótica por "realidad como entramado de signos"?
                  </Label>
                  <RadioGroup
                    value={formData.pregunta1}
                    onValueChange={(value) => handleInputChange('pregunta1', value)}
                    className="space-y-2"
                  >
                    <div className="flex items-start space-x-2 p-2 rounded hover:bg-gray-50">
                      <RadioGroupItem value="a" id="p1-a" className="mt-1" />
                      <Label htmlFor="p1-a" className="text-sm cursor-pointer">
                        a) Que todo en la realidad está hecho de materiales físicos que podemos tocar
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2 p-2 rounded hover:bg-gray-50">
                      <RadioGroupItem value="b" id="p1-b" className="mt-1" />
                      <Label htmlFor="p1-b" className="text-sm cursor-pointer">
                        b) Que la realidad se construye y se interpreta a través de signos que transmiten significados
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2 p-2 rounded hover:bg-gray-50">
                      <RadioGroupItem value="c" id="p1-c" className="mt-1" />
                      <Label htmlFor="p1-c" className="text-sm cursor-pointer">
                        c) Que solo los objetos artificiales son signos, no los naturales
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2 p-2 rounded hover:bg-gray-50">
                      <RadioGroupItem value="d" id="p1-d" className="mt-1" />
                      <Label htmlFor="p1-d" className="text-sm cursor-pointer">
                        d) Que los signos solo existen en el lenguaje verbal escrito
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <Separator />

                {/* Pregunta 2 */}
                <div className="space-y-3">
                  <Label className="font-semibold">
                    2. ¿Cuál de los siguientes es un ejemplo de signo espacial?
                  </Label>
                  <RadioGroup
                    value={formData.pregunta2}
                    onValueChange={(value) => handleInputChange('pregunta2', value)}
                    className="space-y-2"
                  >
                    <div className="flex items-start space-x-2 p-2 rounded hover:bg-gray-50">
                      <RadioGroupItem value="a" id="p2-a" className="mt-1" />
                      <Label htmlFor="p2-a" className="text-sm cursor-pointer">
                        a) Un cartel con instrucciones de evacuación
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2 p-2 rounded hover:bg-gray-50">
                      <RadioGroupItem value="b" id="p2-b" className="mt-1" />
                      <Label htmlFor="p2-b" className="text-sm cursor-pointer">
                        b) El ancho de un pasillo que determina el flujo de personas
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2 p-2 rounded hover:bg-gray-50">
                      <RadioGroupItem value="c" id="p2-c" className="mt-1" />
                      <Label htmlFor="p2-c" className="text-sm cursor-pointer">
                        c) Una alarma sonora de emergencia
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2 p-2 rounded hover:bg-gray-50">
                      <RadioGroupItem value="d" id="p2-d" className="mt-1" />
                      <Label htmlFor="p2-d" className="text-sm cursor-pointer">
                        d) Un mensaje de texto enviado durante el sismo
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <Separator />

                {/* Pregunta 3 */}
                <div className="space-y-3">
                  <Label className="font-semibold">
                    3. En la tríada semiótica, la pragmática se refiere a:
                  </Label>
                  <RadioGroup
                    value={formData.pregunta3}
                    onValueChange={(value) => handleInputChange('pregunta3', value)}
                    className="space-y-2"
                  >
                    <div className="flex items-start space-x-2 p-2 rounded hover:bg-gray-50">
                      <RadioGroupItem value="a" id="p3-a" className="mt-1" />
                      <Label htmlFor="p3-a" className="text-sm cursor-pointer">
                        a) El significado literal del signo
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2 p-2 rounded hover:bg-gray-50">
                      <RadioGroupItem value="b" id="p3-b" className="mt-1" />
                      <Label htmlFor="p3-b" className="text-sm cursor-pointer">
                        b) La relación entre signos en un sistema
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2 p-2 rounded hover:bg-gray-50">
                      <RadioGroupItem value="c" id="p3-c" className="mt-1" />
                      <Label htmlFor="p3-c" className="text-sm cursor-pointer">
                        c) Los efectos y conductas que produce el signo en los usuarios
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2 p-2 rounded hover:bg-gray-50">
                      <RadioGroupItem value="d" id="p3-d" className="mt-1" />
                      <Label htmlFor="p3-d" className="text-sm cursor-pointer">
                        d) La historia y origen del signo
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <Separator />

                {/* Pregunta 4 */}
                <div className="space-y-3">
                  <Label className="font-semibold">
                    4. ¿Por qué el comportamiento de "caminar en fila" durante una evacuación es un signo corporal?
                  </Label>
                  <RadioGroup
                    value={formData.pregunta4}
                    onValueChange={(value) => handleInputChange('pregunta4', value)}
                    className="space-y-2"
                  >
                    <div className="flex items-start space-x-2 p-2 rounded hover:bg-gray-50">
                      <RadioGroupItem value="a" id="p4-a" className="mt-1" />
                      <Label htmlFor="p4-a" className="text-sm cursor-pointer">
                        a) Porque es una acción física que no transmite ningún significado
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2 p-2 rounded hover:bg-gray-50">
                      <RadioGroupItem value="b" id="p4-b" className="mt-1" />
                      <Label htmlFor="p4-b" className="text-sm cursor-pointer">
                        b) Porque comunica orden, cuidado mutuo y facilita la evacuación segura
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2 p-2 rounded hover:bg-gray-50">
                      <RadioGroupItem value="c" id="p4-c" className="mt-1" />
                      <Label htmlFor="p4-c" className="text-sm cursor-pointer">
                        c) Porque solo los gestos con las manos son signos corporales
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2 p-2 rounded hover:bg-gray-50">
                      <RadioGroupItem value="d" id="p4-d" className="mt-1" />
                      <Label htmlFor="p4-d" className="text-sm cursor-pointer">
                        d) Porque es obligatorio por ley
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <Separator />

                {/* Pregunta 5 */}
                <div className="space-y-3">
                  <Label className="font-semibold">
                    5. ¿Cómo se relacionan la comunicación y el diseño con la semiótica en situaciones de emergencia?
                  </Label>
                  <RadioGroup
                    value={formData.pregunta5}
                    onValueChange={(value) => handleInputChange('pregunta5', value)}
                    className="space-y-2"
                  >
                    <div className="flex items-start space-x-2 p-2 rounded hover:bg-gray-50">
                      <RadioGroupItem value="a" id="p5-a" className="mt-1" />
                      <Label htmlFor="p5-a" className="text-sm cursor-pointer">
                        a) No tienen relación; la semiótica es solo teoría filosófica
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2 p-2 rounded hover:bg-gray-50">
                      <RadioGroupItem value="b" id="p5-b" className="mt-1" />
                      <Label htmlFor="p5-b" className="text-sm cursor-pointer">
                        b) Permiten diseñar señalética, organizar espacios y crear mensajes claros que salvan vidas
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2 p-2 rounded hover:bg-gray-50">
                      <RadioGroupItem value="c" id="p5-c" className="mt-1" />
                      <Label htmlFor="p5-c" className="text-sm cursor-pointer">
                        c) Solo sirven para hacer carteles decorativos
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2 p-2 rounded hover:bg-gray-50">
                      <RadioGroupItem value="d" id="p5-d" className="mt-1" />
                      <Label htmlFor="p5-d" className="text-sm cursor-pointer">
                        d) La semiótica no aplica al diseño gráfico
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={() => setCurrentStep(6)}>
                    Anterior
                  </Button>
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Enviar Formulario
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </form>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 mt-8">
          <p>Formulario interactivo con reconocimiento de voz</p>
          <p className="mt-1">Haz clic en el botón del micrófono 🎤 para dictar tus respuestas</p>
        </div>
      </div>
    </div>
  );
}


