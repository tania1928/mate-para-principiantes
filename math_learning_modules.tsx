import React, { useState } from 'react';
import { ChevronDown, ChevronRight, BookOpen, Target, CheckCircle2, Clock, Users, Play } from 'lucide-react';

const MathLearningModules = () => {
  const [expandedModule, setExpandedModule] = useState(null);
  const [completedActivities, setCompletedActivities] = useState(new Set());

  const modules = [
    {
      id: 1,
      title: "Álgebra Fundamental",
      duration: "4-5 semanas",
      difficulty: "Básico",
      color: "bg-blue-500",
      description: "Fundamentos algebraicos esenciales para el éxito universitario",
      objectives: [
        "Dominar operaciones con polinomios y factorización",
        "Resolver ecuaciones y sistemas de ecuaciones lineales",
        "Trabajar con funciones lineales y cuadráticas",
        "Aplicar propiedades de exponentes y logaritmos"
      ],
      topics: [
        "Operaciones algebraicas básicas",
        "Factorización y productos notables", 
        "Ecuaciones lineales y cuadráticas",
        "Sistemas de ecuaciones",
        "Funciones y gráficas",
        "Exponentes y logaritmos"
      ],
      activities: [
        { type: "Diagnóstico", name: "Evaluación inicial de conocimientos", time: "30 min" },
        { type: "Práctica", name: "Ejercicios de factorización guiados", time: "45 min" },
        { type: "Aplicación", name: "Resolución de problemas contextualizados", time: "60 min" },
        { type: "Evaluación", name: "Quiz módulo 1", time: "40 min" }
      ]
    },
    {
      id: 2,
      title: "Cálculo Diferencial",
      duration: "6-7 semanas", 
      difficulty: "Intermedio",
      color: "bg-green-500",
      description: "Introducción a límites, derivadas y sus aplicaciones",
      objectives: [
        "Comprender el concepto de límite y continuidad",
        "Calcular derivadas usando reglas de derivación",
        "Aplicar derivadas para analizar funciones",
        "Resolver problemas de optimización básicos"
      ],
      topics: [
        "Límites y continuidad",
        "Definición de derivada",
        "Reglas de derivación",
        "Derivada de funciones compuestas",
        "Aplicaciones de la derivada",
        "Problemas de optimización"
      ],
      activities: [
        { type: "Conceptual", name: "Exploración interactiva de límites", time: "50 min" },
        { type: "Práctica", name: "Cálculo de derivadas paso a paso", time: "90 min" },
        { type: "Proyecto", name: "Análisis de función real", time: "120 min" },
        { type: "Evaluación", name: "Examen parcial", time: "90 min" }
      ]
    },
    {
      id: 3,
      title: "Geometría Analítica",
      duration: "4-5 semanas",
      difficulty: "Intermedio", 
      color: "bg-purple-500",
      description: "Estudio de figuras geométricas mediante coordenadas",
      objectives: [
        "Trabajar con el sistema de coordenadas cartesianas",
        "Analizar ecuaciones de rectas y circunferencias",
        "Estudiar cónicas: parábolas, elipses e hipérbolas",
        "Resolver problemas geométricos analíticamente"
      ],
      topics: [
        "Sistema de coordenadas",
        "Distancia y punto medio",
        "Ecuación de la recta",
        "Circunferencia",
        "Parábola, elipse e hipérbola",
        "Transformaciones geométricas"
      ],
      activities: [
        { type: "Visual", name: "Graficación con software", time: "60 min" },
        { type: "Práctica", name: "Problemas de lugares geométricos", time: "75 min" },
        { type: "Aplicación", name: "Modelado de situaciones reales", time: "90 min" },
        { type: "Evaluación", name: "Proyecto integrador", time: "120 min" }
      ]
    },
    {
      id: 4,
      title: "Estadística Descriptiva",
      duration: "3-4 semanas",
      difficulty: "Básico",
      color: "bg-orange-500", 
      description: "Análisis y interpretación de datos estadísticos",
      objectives: [
        "Organizar y presentar datos estadísticos",
        "Calcular medidas de tendencia central y dispersión",
        "Interpretar gráficos estadísticos",
        "Introducción a la probabilidad básica"
      ],
      topics: [
        "Tipos de datos y variables",
        "Tablas de frecuencia",
        "Gráficos estadísticos",
        "Medidas de tendencia central",
        "Medidas de dispersión",
        "Probabilidad básica"
      ],
      activities: [
        { type: "Recolección", name: "Encuesta y organización de datos", time: "90 min" },
        { type: "Análisis", name: "Cálculo de estadísticos", time: "60 min" },
        { type: "Presentación", name: "Informe estadístico", time: "120 min" },
        { type: "Evaluación", name: "Análisis de caso real", time: "75 min" }
      ]
    },
    {
      id: 5,
      title: "Trigonometría",
      duration: "4-5 semanas",
      difficulty: "Intermedio",
      color: "bg-red-500",
      description: "Funciones trigonométricas y sus aplicaciones",
      objectives: [
        "Dominar las razones trigonométricas básicas",
        "Trabajar con identidades trigonométricas",
        "Resolver ecuaciones trigonométricas",
        "Aplicar trigonometría en problemas geométricos"
      ],
      topics: [
        "Razones trigonométricas",
        "Círculo unitario",
        "Funciones trigonométricas",
        "Identidades trigonométricas",
        "Ecuaciones trigonométricas",
        "Ley de senos y cosenos"
      ],
      activities: [
        { type: "Exploración", name: "Círculo trigonométrico interactivo", time: "45 min" },
        { type: "Práctica", name: "Resolución de triángulos", time: "75 min" },
        { type: "Aplicación", name: "Problemas de navegación y física", time: "90 min" },
        { type: "Evaluación", name: "Evaluación comprensiva", time: "60 min" }
      ]
    }
  ];

  const toggleModule = (moduleId) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const toggleActivity = (moduleId, activityIndex) => {
    const activityId = `${moduleId}-${activityIndex}`;
    const newCompleted = new Set(completedActivities);
    if (newCompleted.has(activityId)) {
      newCompleted.delete(activityId);
    } else {
      newCompleted.add(activityId);
    }
    setCompletedActivities(newCompleted);
  };

  const getActivityTypeColor = (type) => {
    const colors = {
      'Diagnóstico': 'bg-yellow-100 text-yellow-800',
      'Conceptual': 'bg-blue-100 text-blue-800', 
      'Visual': 'bg-indigo-100 text-indigo-800',
      'Exploración': 'bg-cyan-100 text-cyan-800',
      'Recolección': 'bg-teal-100 text-teal-800',
      'Práctica': 'bg-green-100 text-green-800',
      'Análisis': 'bg-purple-100 text-purple-800',
      'Aplicación': 'bg-orange-100 text-orange-800',
      'Proyecto': 'bg-pink-100 text-pink-800',
      'Presentación': 'bg-rose-100 text-rose-800',
      'Evaluación': 'bg-red-100 text-red-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Básico': 'bg-green-100 text-green-800',
      'Intermedio': 'bg-yellow-100 text-yellow-800',
      'Avanzado': 'bg-red-100 text-red-800'
    };
    return colors[difficulty] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Módulos de Matemáticas - Primer Año Universitario
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Sistema de aprendizaje estructurado para desarrollar las competencias matemáticas fundamentales 
          necesarias en el primer año de estudios universitarios.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-1">
        {modules.map((module) => (
          <div key={module.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div 
              className="cursor-pointer p-6 hover:bg-gray-50 transition-colors"
              onClick={() => toggleModule(module.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${module.color} rounded-lg flex items-center justify-center text-white font-bold text-lg`}>
                    {module.id}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{module.title}</h2>
                    <p className="text-gray-600 text-sm mt-1">{module.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right text-sm text-gray-500">
                    <div className="flex items-center space-x-2 mb-1">
                      <Clock className="w-4 h-4" />
                      <span>{module.duration}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${getDifficultyColor(module.difficulty)}`}>
                      {module.difficulty}
                    </span>
                  </div>
                  {expandedModule === module.id ? 
                    <ChevronDown className="w-5 h-5 text-gray-400" /> : 
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  }
                </div>
              </div>
            </div>

            {expandedModule === module.id && (
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <div className="grid lg:grid-cols-2 gap-6">
                  
                  {/* Objetivos */}
                  <div className="bg-white rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-blue-500" />
                      Objetivos de Aprendizaje
                    </h3>
                    <ul className="space-y-2">
                      {module.objectives.map((objective, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contenidos */}
                  <div className="bg-white rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <BookOpen className="w-5 h-5 mr-2 text-purple-500" />
                      Contenidos Temáticos
                    </h3>
                    <ul className="space-y-2">
                      {module.topics.map((topic, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-purple-300 rounded-full mr-3"></div>
                          <span className="text-sm text-gray-700">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Recursos Complementarios */}
                <div className="mt-6 bg-white rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-green-500" />
                    Recursos Complementarios
                  </h3>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 mb-4">
                    <h4 className="font-medium text-gray-800 mb-3">📚 Ejemplo Resuelto Paso a Paso</h4>
                    {module.id === 1 && (
                      <div className="text-sm">
                        <p className="font-medium text-blue-800 mb-2">Problema: Factorizar x² - 5x + 6</p>
                        <div className="space-y-2 text-gray-700 bg-white p-3 rounded border-l-4 border-blue-400">
                          <p><strong>Paso 1:</strong> Identificar que es un trinomio de la forma ax² + bx + c donde a=1, b=-5, c=6</p>
                          <p><strong>Paso 2:</strong> Buscar dos números que multiplicados den 6 y sumados den -5</p>
                          <p><strong>Paso 3:</strong> Los números son -2 y -3 porque (-2)×(-3) = 6 y (-2)+(-3) = -5</p>
                          <p><strong>Paso 4:</strong> Escribir la factorización: x² - 5x + 6 = (x - 2)(x - 3)</p>
                          <p><strong>Verificación:</strong> (x - 2)(x - 3) = x² - 3x - 2x + 6 = x² - 5x + 6 ✓</p>
                        </div>
                      </div>
                    )}
                    {module.id === 2 && (
                      <div className="text-sm">
                        <p className="font-medium text-green-800 mb-2">Problema: Calcular la derivada de f(x) = 3x² - 2x + 1</p>
                        <div className="space-y-2 text-gray-700 bg-white p-3 rounded border-l-4 border-green-400">
                          <p><strong>Paso 1:</strong> Aplicar la regla de derivación término por término</p>
                          <p><strong>Paso 2:</strong> d/dx(3x²) = 3 × 2x¹ = 6x (regla de la potencia)</p>
                          <p><strong>Paso 3:</strong> d/dx(-2x) = -2 × 1 = -2 (derivada de función lineal)</p>
                          <p><strong>Paso 4:</strong> d/dx(1) = 0 (derivada de constante es cero)</p>
                          <p><strong>Resultado:</strong> f'(x) = 6x - 2</p>
                        </div>
                      </div>
                    )}
                    {module.id === 3 && (
                      <div className="text-sm">
                        <p className="font-medium text-purple-800 mb-2">Problema: Encontrar la ecuación de la recta que pasa por (2,3) y (4,7)</p>
                        <div className="space-y-2 text-gray-700 bg-white p-3 rounded border-l-4 border-purple-400">
                          <p><strong>Paso 1:</strong> Calcular la pendiente: m = (y₂-y₁)/(x₂-x₁) = (7-3)/(4-2) = 4/2 = 2</p>
                          <p><strong>Paso 2:</strong> Usar la forma punto-pendiente: y - y₁ = m(x - x₁)</p>
                          <p><strong>Paso 3:</strong> Sustituir punto (2,3): y - 3 = 2(x - 2)</p>
                          <p><strong>Paso 4:</strong> Simplificar: y - 3 = 2x - 4</p>
                          <p><strong>Resultado:</strong> y = 2x - 1</p>
                        </div>
                      </div>
                    )}
                    {module.id === 4 && (
                      <div className="text-sm">
                        <p className="font-medium text-orange-800 mb-2">Problema: Calcular la media y desviación estándar de: 2, 4, 6, 8, 10</p>
                        <div className="space-y-2 text-gray-700 bg-white p-3 rounded border-l-4 border-orange-400">
                          <p><strong>Paso 1:</strong> Calcular la media: x̄ = (2+4+6+8+10)/5 = 30/5 = 6</p>
                          <p><strong>Paso 2:</strong> Calcular desviaciones: (2-6)²=16, (4-6)²=4, (6-6)²=0, (8-6)²=4, (10-6)²=16</p>
                          <p><strong>Paso 3:</strong> Sumar desviaciones: 16+4+0+4+16 = 40</p>
                          <p><strong>Paso 4:</strong> Varianza: s² = 40/(5-1) = 10</p>
                          <p><strong>Resultado:</strong> Media = 6, Desviación estándar = √10 ≈ 3.16</p>
                        </div>
                      </div>
                    )}
                    {module.id === 5 && (
                      <div className="text-sm">
                        <p className="font-medium text-red-800 mb-2">Problema: En un triángulo rectángulo, si un ángulo es 30° y la hipotenusa mide 10, ¿cuánto miden los catetos?</p>
                        <div className="space-y-2 text-gray-700 bg-white p-3 rounded border-l-4 border-red-400">
                          <p><strong>Paso 1:</strong> Identificar los ángulos: 30°, 60°, 90°</p>
                          <p><strong>Paso 2:</strong> Cateto opuesto a 30°: sen(30°) = cateto/10, entonces cateto = 10 × sen(30°) = 10 × 0.5 = 5</p>
                          <p><strong>Paso 3:</strong> Cateto adyacente a 30°: cos(30°) = cateto/10, entonces cateto = 10 × cos(30°) = 10 × (√3/2) = 5√3</p>
                          <p><strong>Verificación:</strong> 5² + (5√3)² = 25 + 75 = 100 = 10² ✓</p>
                          <p><strong>Resultado:</strong> Catetos = 5 y 5√3 ≈ 8.66</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-4 mb-4">
                    <h4 className="font-medium text-gray-800 mb-3">📋 Guía de Estudio Resumida</h4>
                    {module.id === 1 && (
                      <div className="text-xs space-y-3">
                        <div className="bg-white p-3 rounded border-l-4 border-yellow-400">
                          <h5 className="font-semibold text-yellow-800 mb-2">🔑 Conceptos Clave</h5>
                          <div className="grid md:grid-cols-2 gap-2 text-gray-700">
                            <div>• Productos notables: (a±b)² = a² ± 2ab + b²</div>
                            <div>• Diferencia de cuadrados: a² - b² = (a+b)(a-b)</div>
                            <div>• Factorización por agrupación</div>
                            <div>• Método de completar el cuadrado</div>
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                          <h5 className="font-semibold text-blue-800 mb-2">📐 Fórmulas Esenciales</h5>
                          <div className="font-mono text-xs space-y-1 text-gray-700">
                            <div>• Ecuación cuadrática: x = [-b ± √(b²-4ac)] / 2a</div>
                            <div>• Discriminante: Δ = b² - 4ac</div>
                            <div>• Función lineal: y = mx + b</div>
                            <div>• Logaritmos: log(ab) = log(a) + log(b)</div>
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded border-l-4 border-green-400">
                          <h5 className="font-semibold text-green-800 mb-2">💡 Estrategias de Resolución</h5>
                          <div className="text-gray-700 space-y-1">
                            <div>1. Identificar el tipo de problema (lineal, cuadrático, exponencial)</div>
                            <div>2. Aplicar operaciones inversas sistemáticamente</div>
                            <div>3. Verificar siempre la solución sustituyendo</div>
                            <div>4. Graficar cuando sea posible para visualizar</div>
                          </div>
                        </div>
                      </div>
                    )}
                    {module.id === 2 && (
                      <div className="text-xs space-y-3">
                        <div className="bg-white p-3 rounded border-l-4 border-yellow-400">
                          <h5 className="font-semibold text-yellow-800 mb-2">🔑 Conceptos Clave</h5>
                          <div className="grid md:grid-cols-2 gap-2 text-gray-700">
                            <div>• Límite: comportamiento cerca de un punto</div>
                            <div>• Continuidad: sin "saltos" en la función</div>
                            <div>• Derivada: razón de cambio instantánea</div>
                            <div>• Regla de la cadena para funciones compuestas</div>
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                          <h5 className="font-semibold text-blue-800 mb-2">📐 Reglas de Derivación</h5>
                          <div className="font-mono text-xs space-y-1 text-gray-700">
                            <div>• Potencia: d/dx(xⁿ) = nxⁿ⁻¹</div>
                            <div>• Producto: d/dx(uv) = u'v + uv'</div>
                            <div>• Cociente: d/dx(u/v) = (u'v - uv')/v²</div>
                            <div>• Cadena: d/dx[f(g(x))] = f'(g(x))·g'(x)</div>
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded border-l-4 border-green-400">
                          <h5 className="font-semibold text-green-800 mb-2">💡 Estrategias de Resolución</h5>
                          <div className="text-gray-700 space-y-1">
                            <div>1. Para límites: factorizar, racionalizar o L'Hôpital</div>
                            <div>2. Para derivadas: identificar la regla aplicable</div>
                            <div>3. Para optimización: f'(x) = 0 y analizar f''(x)</div>
                            <div>4. Siempre interpretar el resultado en contexto</div>
                          </div>
                        </div>
                      </div>
                    )}
                    {module.id === 3 && (
                      <div className="text-xs space-y-3">
                        <div className="bg-white p-3 rounded border-l-4 border-yellow-400">
                          <h5 className="font-semibold text-yellow-800 mb-2">🔑 Conceptos Clave</h5>
                          <div className="grid md:grid-cols-2 gap-2 text-gray-700">
                            <div>• Coordenadas cartesianas (x,y)</div>
                            <div>• Pendiente como razón de cambio</div>
                            <div>• Formas de ecuación de recta</div>
                            <div>• Cónicas: círculo, parábola, elipse, hipérbola</div>
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                          <h5 className="font-semibold text-blue-800 mb-2">📐 Fórmulas Esenciales</h5>
                          <div className="font-mono text-xs space-y-1 text-gray-700">
                            <div>• Distancia: d = √[(x₂-x₁)² + (y₂-y₁)²]</div>
                            <div>• Punto medio: M = ((x₁+x₂)/2, (y₁+y₂)/2)</div>
                            <div>• Pendiente: m = (y₂-y₁)/(x₂-x₁)</div>
                            <div>• Círculo: (x-h)² + (y-k)² = r²</div>
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded border-l-4 border-green-400">
                          <h5 className="font-semibold text-green-800 mb-2">💡 Estrategias de Resolución</h5>
                          <div className="text-gray-700 space-y-1">
                            <div>1. Siempre graficar para visualizar el problema</div>
                            <div>2. Identificar qué información tienes y qué necesitas</div>
                            <div>3. Usar las formas apropiadas de ecuaciones</div>
                            <div>4. Verificar con puntos conocidos</div>
                          </div>
                        </div>
                      </div>
                    )}
                    {module.id === 4 && (
                      <div className="text-xs space-y-3">
                        <div className="bg-white p-3 rounded border-l-4 border-yellow-400">
                          <h5 className="font-semibold text-yellow-800 mb-2">🔑 Conceptos Clave</h5>
                          <div className="grid md:grid-cols-2 gap-2 text-gray-700">
                            <div>• Población vs muestra</div>
                            <div>• Variables cuantitativas vs cualitativas</div>
                            <div>• Medidas de tendencia central</div>
                            <div>• Medidas de dispersión</div>
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                          <h5 className="font-semibold text-blue-800 mb-2">📐 Fórmulas Esenciales</h5>
                          <div className="font-mono text-xs space-y-1 text-gray-700">
                            <div>• Media: x̄ = Σx/n</div>
                            <div>• Varianza: s² = Σ(x-x̄)²/(n-1)</div>
                            <div>• Desviación estándar: s = √s²</div>
                            <div>• Probabilidad: P(A) = casos favorables/casos totales</div>
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded border-l-4 border-green-400">
                          <h5 className="font-semibold text-green-800 mb-2">💡 Estrategias de Resolución</h5>
                          <div className="text-gray-700 space-y-1">
                            <div>1. Organizar datos en tablas de frecuencia</div>
                            <div>2. Elegir gráfico apropiado (histograma, barras, circular)</div>
                            <div>3. Calcular estadísticos en orden: media, luego dispersión</div>
                            <div>4. Interpretar resultados en contexto real</div>
                          </div>
                        </div>
                      </div>
                    )}
                    {module.id === 5 && (
                      <div className="text-xs space-y-3">
                        <div className="bg-white p-3 rounded border-l-4 border-yellow-400">
                          <h5 className="font-semibold text-yellow-800 mb-2">🔑 Conceptos Clave</h5>
                          <div className="grid md:grid-cols-2 gap-2 text-gray-700">
                            <div>• Razones trigonométricas básicas</div>
                            <div>• Círculo unitario y ángulos de referencia</div>
                            <div>• Identidades fundamentales</div>
                            <div>• Funciones trigonométricas inversas</div>
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                          <h5 className="font-semibold text-blue-800 mb-2">📐 Fórmulas Esenciales</h5>
                          <div className="font-mono text-xs space-y-1 text-gray-700">
                            <div>• sen²θ + cos²θ = 1</div>
                            <div>• tan θ = sen θ/cos θ</div>
                            <div>• Ley de senos: a/sen A = b/sen B = c/sen C</div>
                            <div>• Ley de cosenos: c² = a² + b² - 2ab cos C</div>
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded border-l-4 border-green-400">
                          <h5 className="font-semibold text-green-800 mb-2">💡 Estrategias de Resolución</h5>
                          <div className="text-gray-700 space-y-1">
                            <div>1. Dibujar siempre el triángulo o círculo unitario</div>
                            <div>2. Identificar qué datos tienes y qué necesitas encontrar</div>
                            <div>3. Elegir la razón trigonométrica o ley apropiada</div>
                            <div>4. Verificar que la respuesta tenga sentido geométrico</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 text-xs">
                    <div className="bg-blue-50 p-3 rounded">
                      <h5 className="font-medium text-blue-800 mb-2">🎥 Videos Explicativos</h5>
                      <ul className="space-y-1 text-blue-700">
                        <li>• Khan Academy - {module.title}</li>
                        <li>• Professor Leonard</li>
                        <li>• 3Blue1Brown (conceptos visuales)</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <h5 className="font-medium text-green-800 mb-2">💻 Herramientas Digitales</h5>
                      <ul className="space-y-1 text-green-700">
                        <li>• GeoGebra (gráficos interactivos)</li>
                        <li>• Wolfram Alpha (cálculos)</li>
                        <li>• Photomath (escaneador)</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-3 rounded">
                      <h5 className="font-medium text-purple-800 mb-2">📖 Material de Apoyo</h5>
                      <ul className="space-y-1 text-purple-700">
                        <li>• Formularios de referencia</li>
                        <li>• Ejercicios adicionales</li>
                        <li>• Simuladores en línea</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Actividades */}
                <div className="mt-6 bg-white rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                    <Play className="w-5 h-5 mr-2 text-orange-500" />
                    Actividades de Aprendizaje
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {module.activities.map((activity, index) => {
                      const activityId = `${module.id}-${index}`;
                      const isCompleted = completedActivities.has(activityId);
                      
                      return (
                        <div 
                          key={index}
                          className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                            isCompleted 
                              ? 'border-green-300 bg-green-50' 
                              : 'border-gray-200 bg-white hover:border-gray-300'
                          }`}
                          onClick={() => toggleActivity(module.id, index)}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getActivityTypeColor(activity.type)}`}>
                              {activity.type}
                            </span>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-3 h-3 text-gray-400" />
                              <span className="text-xs text-gray-500">{activity.time}</span>
                              {isCompleted && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 font-medium">{activity.name}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-lg p-6 shadow-lg">
        <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
          <Users className="w-5 h-5 mr-2 text-blue-500" />
          Recomendaciones Metodológicas
        </h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
          <div>
            <h4 className="font-medium mb-2">Estrategias de Enseñanza:</h4>
            <ul className="space-y-1 ml-4">
              <li>• Aprendizaje activo con resolución de problemas</li>
              <li>• Uso de tecnología educativa (GeoGebra, calculadoras gráficas)</li>
              <li>• Trabajo colaborativo en pequeños grupos</li>
              <li>• Conexión con aplicaciones reales</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Evaluación:</h4>
            <ul className="space-y-1 ml-4">
              <li>• 40% Evaluaciones parciales</li>
              <li>• 30% Proyectos y aplicaciones</li>
              <li>• 20% Participación y práctica</li>
              <li>• 10% Autoevaluación y reflexión</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MathLearningModules;