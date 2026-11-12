import type { Quiz } from "../domain/quiz-types";

export const DA42_COURSE_ID = "da420000-0000-0000-0000-000000000042";

export const DA42_LESSON_5_QUIZ: Quiz = {
  id: "quiz-da42-lesson-5",
  course_id: DA42_COURSE_ID,
  lesson_id: "da420000-0000-0000-0000-000000000050",
  title:
    "Examen de Verificación: 5. Procedimientos de Emergencia y Casos Anómalos",
  description:
    "Evaluación teórica de verificación sobre velocidades críticas de emergencia (vMCA, vYSE), avisos G1000 de temperatura y presión, fallos de motor (EFATO, crucero, aproximación, frustrada monomotor), embanderado y reencendido, emergencias eléctricas y de fuego, tren de aterrizaje, barrena y procedimientos anómalos de la Diamond DA42 Twin Star (Continental CD-135 / CD-155).",
  minPassScorePercentage: 75,
  questions: [
    {
      id: "da42-5-1",
      question:
        "¿Cuáles son las velocidades críticas monomotor de referencia en emergencias para la DA42 y cuál es la frecuencia internacional de socorro?",
      options: [
        "vMCA = 68 KIAS (mínimo control monomotor), vYSE = 82 KIAS (mejor régimen de ascenso monomotor) y 121.500 MHz en la radio de comunicaciones.",
        "vMCA = 82 KIAS, vYSE = 68 KIAS y 123.450 MHz.",
        "vMCA = 56 KIAS, vYSE = 76 KIAS y 118.100 MHz.",
        "vMCA = 70 KIAS, vYSE = 90 KIAS y 121.000 MHz.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El AFM Sección 3.1.2 fija la vMCA en 68 KIAS y la vYSE en 82 KIAS (línea azul). En el G1000 se sintoniza 121.500 MHz manteniendo pulsado el botón COM transfer más de 2 segundos.",
    },
    {
      id: "da42-5-2",
      question:
        "Ante un aviso rojo de alta temperatura de refrigerante de motor (> 105 °C) durante el ascenso en la DA42, ¿qué acción inmediata recomienda el AFM para intentar restablecer la refrigeración?",
      options: [
        "Cortar inmediatamente el interruptor ENGINE MASTER en ascenso sin intentar refrigerar.",
        "Reducir la potencia del motor afectado un 10% o más e incrementar la velocidad de ascenso 10 KIAS o más para aumentar el flujo de aire exterior de enfriamiento.",
        "Aumentar la potencia al 100% y ascender en pérdida para ganar altitud rápido.",
        "Seleccionar crossfeed de combustible y apagar los alternadores.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El procedimiento 4B.3.2 indica comprobar el nivel de refrigerante, reducir la potencia del motor afectado en al menos un 10% y subir 10 KIAS la velocidad para maximizar el caudal de aire en los radiadores.",
    },
    {
      id: "da42-5-3",
      question:
        "Si en vuelo se ilumina el aviso rojo de baja presión de aceite (< 1,0 bar) en uno de los motores Continental, ¿cuál es la conducta operativa que debe adoptar el piloto?",
      options: [
        "Subir la palanca de potencia a tope para obligar a la bomba mecánica de aceite a generar más presión.",
        "Abrir la calefacción de cabina para aliviar la presión del circuito.",
        "Reducir la potencia del motor afectado, prever una fuga total de aceite y fallo inminente del motor, y planificar un aterrizaje de precaución (asegurando y embanderando si hay vibraciones o pérdida total de presión).",
        "Ignorar el aviso si la temperatura de la reductora se mantiene en verde.",
      ],
      correctAnswerIndex: 2,
      explanation:
        "El procedimiento 4B.3.4 alerta de que una presión inferior a 1,0 bar presagia pérdida total de aceite y bloqueo mecánico; debe reducirse potencia, planificar toma de precaución y preparar la parada de motor.",
    },
    {
      id: "da42-5-4",
      question:
        "Si tras poner en marcha un motor en la DA42 la indicación de STARTER permanece iluminada de forma continua, ¿qué anomalía indica y qué debe hacerse de inmediato?",
      options: [
        "Indica que el alternador está recargando la batería principal a alta velocidad; no requiere acción.",
        "Indica que las bujías de precalentamiento siguen encendidas y se apagarán al despegar.",
        "Debe conectarse la EPU externa para desconectar el relé magnéticamente.",
        "Indica que el relé del motor de arranque ha quedado pegado/engranado; se debe cortar inmediatamente el ENGINE MASTER del motor afectado para evitar daños y riesgo de fuego.",
      ],
      correctAnswerIndex: 3,
      explanation:
        "El procedimiento 3.7.3 indica que un relé de arranque soldado destruye el motor de arranque y descarga las baterías; exige apagar el ENGINE MASTER del motor afectado de inmediato.",
    },
    {
      id: "da42-5-5",
      question:
        "En caso de fallo de una de las pantallas principales del G1000 (PFD o MFD) o si la pantalla no conmuta automáticamente al modo de reversión, ¿cómo debe actuar el piloto?",
      options: [
        "Pulsar el botón rojo DISPLAY BACKUP en el panel de audio GMA 1347 para forzar manualmente el modo de reversión en la pantalla operativa restante.",
        "Apagar el interruptor ELECT. MASTER para reiniciar el sistema operativo del G1000.",
        "Desconectar los disyuntores de las dos unidades de aviónica en vuelo.",
        "Continuar el vuelo únicamente guiándose por la brújula húmeda magnética.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El pulsador DISPLAY BACKUP ubicado en el panel de audio central fuerza la presentación combinada de instrumentos de vuelo y parámetros de motor en el display que continúa funcionando.",
    },
    {
      id: "da42-5-6",
      question:
        "Ante una pérdida repentina de potencia en vuelo, ¿cómo debe identificar el piloto de la DA42 qué motor ha fallado antes de tomar acciones de corte?",
      options: [
        "Cortar inmediatamente el motor del lado hacia el que se requiere pisar el pedal con fuerza.",
        "Identificar el pie sin resistencia sobre el timón de dirección ('pie muerto, motor muerto') y corroborar en el MFD con la caída de Load (0%), RPM y flujo de combustible.",
        "Guiarse exclusivamente por la aguja de temperatura de aceite antes de tocar el timón.",
        "Apagar ambos motores y luego reencender uno al azar.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "La regla de oro multimotor ('dead foot, dead engine') identifica el lado inoperativo por la ausencia de resistencia en el timón, debiendo corroborarse en los instrumentos de motor del MFD.",
    },
    {
      id: "da42-5-7",
      question:
        "En el procedimiento de parada y puesta en bandera (Engine Securing) de la DA42, ¿qué acción principal desencadena físicamente el embanderado de la hélice?",
      options: [
        "Tirar de una palanca mecánica de paso de hélice en la consola central.",
        "Poner la palanca de potencia en IDLE y esperar a que el viento detenga el giro.",
        "Colocar el interruptor ENGINE MASTER del motor fallido en OFF; esto desenergiza la válvula solenoide liberando la presión de aceite y los contrapesos y nitrógeno llevan las palas a bandera.",
        "Apagar el alternador del motor vivo.",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Al poner ENGINE MASTER en OFF, la electroválvula del gobernador se desenergiza, evacuando el aceite del buje de la MT-Propeller; la presión del nitrógeno y los contrapesos colocan las palas a 81° (bandera).",
    },
    {
      id: "da42-5-8",
      question:
        "Para efectuar un reencendido de motor por molinete (Windmilling Restart) sin utilizar el arrancador eléctrico en la DA42, ¿cuál es el rango de velocidad indicada requerido por el AFM?",
      options: [
        "Entre 68 y 75 KIAS a cualquier altitud.",
        "Superior a 180 KIAS con flaps en posición LDG.",
        "Entre 82 y 95 KIAS exclusivamente con tren extendido.",
        "Entre 125 y 145 KIAS a una altitud máxima recomendada de 10.000 ft.",
      ],
      correctAnswerIndex: 3,
      explanation:
        "El AFM 3.5.4(a) establece que para que el acumulador de presión venza los contrapesos y la hélice comience a girar por molinete de forma autónoma, la velocidad debe estar entre 125 y 145 KIAS (<= 10.000 ft).",
    },
    {
      id: "da42-5-9",
      question:
        "Si un motor falla o presenta anomalías graves durante la carrera de despegue en pista antes de la rotación, ¿cuál es la primera y prioritaria acción del piloto?",
      options: [
        "Reducir ambas palancas de potencia inmediatamente a ralentí (IDLE), mantener el eje de pista con timón y aplicar frenada máxima según sea necesario.",
        "Aplicar potencia máxima en el motor sano y continuar el despegue monomotor en pista.",
        "Poner la hélice en bandera y abrir la cúpula para frenar aerodinámicamente.",
        "Subir el morro de inmediato para saltar los obstáculos del final de pista.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Con pista restante y por debajo de vr, el despegue se aborta siempre: ambas palancas a IDLE, timón para evitar la guiñada asimétrica y frenar enérgicamente dentro del pavimento.",
    },
    {
      id: "da42-5-10",
      question:
        "Ante un fallo de motor inmediatamente después del despegue (EFATO) con el tren de aterrizaje ya recogido y velocidad superior a 82 KIAS (vYSE), ¿qué criterio operativo establece el AFM?",
      options: [
        "Aterrizar de inmediato en el campo de frente independientemente de la altitud o velocidad.",
        "Potencia máxima en el motor operativo, flaps UP, mantener 82 KIAS (vYSE), identificar y embanderar el motor fallido, y continuar ascenso hacia altitud segura.",
        "Reducir a 68 KIAS (vMCA) para ascender con el mayor ángulo posible.",
        "Extender flaps en LDG para conseguir sustentación extra con un solo motor.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Si el tren está arriba y la velocidad supera vYSE (82 KIAS), la DA42 es capaz de mantener ascenso monomotor positivo; se mantiene la línea azul, se limpia la resistencia y se asegura el motor fallido.",
    },
    {
      id: "da42-5-11",
      question:
        "Durante el vuelo continuado con un motor inoperativo (OEI) en crucero, ¿cómo debe ajustarse la actitud aerodinámica y el compensador de dirección para lograr la mínima resistencia?",
      options: [
        "Mantener la bola exactamente centrada y las alas perfectamente horizontales a nivel cero.",
        "Bancar 10° hacia el lado del motor fallido para compensar la guiñada.",
        "Ajustar el timón de dirección para mantener media bola desplazada hacia el motor operativo y bancar entre 3° y 5° hacia el lado del motor vivo.",
        "Mantener los flaps en posición T/O durante todo el vuelo de crucero monomotor.",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Para anular la resistencia inducida por el resbale lateral en vuelo monomotor, se debe volar con 3° a 5° de alabeo hacia el motor vivo y la bola desplazada aproximadamente la mitad de su diámetro hacia el motor bueno.",
    },
    {
      id: "da42-5-12",
      question:
        "En una aproximación y aterrizaje con un motor inoperativo en la DA42, ¿en qué momento debe seleccionarse la posición completa de flaps (LDG)?",
      options: [
        "En el tramo de viento en cola al interceptar la altitud del circuito.",
        "Al cruzar el punto de referencia de inicio del viraje a base.",
        "Nunca se deben utilizar flaps en aproximaciones monomotor.",
        "Únicamente en corta final cuando el aterrizaje en pista esté absolutamente asegurado y ya no se contemple la posibilidad de frustrar la toma.",
      ],
      correctAnswerIndex: 3,
      explanation:
        "Los flaps en LDG generan una resistencia aerodinámica muy alta que comprometería gravemente la capacidad de ascender en caso de frustrada; solo se extienden cuando el toque en pista es ineludible y seguro.",
    },
    {
      id: "da42-5-13",
      question:
        "Al ejecutar un motor y al aire con un motor inoperativo (Single-Engine Go-Around) en la DA42, ¿cuál es la velocidad de seguridad que debe alcanzarse y mantenerse para asegurar el ascenso?",
      options: [
        "vYSE = 82 KIAS (línea azul del velocímetro) con tren arriba y flaps retraídos.",
        "vMCA = 68 KIAS con flaps en posición LDG.",
        "105 KIAS con flaps en posición T/O.",
        "60 KIAS manteniendo el tren extendido para evitar guiñada.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "La maniobra de frustrada monomotor requiere potencia máxima en el motor operativo, acelerar a vYSE (82 KIAS), retraer tren y flaps con ascenso positivo para conseguir tasa de trepada.",
    },
    {
      id: "da42-5-14",
      question:
        "Si se detecta fuego de motor en tierra durante el rodaje o la puesta en marcha en la DA42, ¿cuál es la secuencia inmediata de corte y aislamiento de sistemas?",
      options: [
        "Dejar los motores al ralentí y encender la bomba auxiliar de combustible.",
        "Ambos ENGINE MASTER en OFF, ambos FUEL SELECTOR en OFF y ELECT. MASTER en OFF, procediendo a la evacuación inmediata de los ocupantes.",
        "Desconectar únicamente la batería y esperar a que el combustible se consuma solo.",
        "Conectar el aire acondicionado de cabina para expulsar las llamas.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Ante fuego en tierra es vital aislar el foco de combustión y desenergizar la cabina: cortar de golpe alimentación de inyección (ENGINE MASTER), paso de combustible desde las alas (SELECTORS) y electricidad (ELECT. MASTER).",
    },
    {
      id: "da42-5-15",
      question:
        "Ante la confirmación de fuego en uno de los motores durante el vuelo, ¿por qué es mandatorio colocar de inmediato los mandos de Cabin Heat y Defrost en posición OFF?",
      options: [
        "Para evitar que aumente la presión de aire en los turbocompresores.",
        "Para reducir el consumo de combustible del motor sano.",
        "Para cortar inmediatamente la entrada de humo, gases tóxicos y posibles llamas hacia el habitáculo de la cabina a través del sistema de ventilación.",
        "Para desviar aire caliente hacia las alas y evitar el engelamiento.",
      ],
      correctAnswerIndex: 2,
      explanation:
        "El sistema de calefacción de cabina toma aire próximo a las góndolas motoras; ante fuego, es imperativo cerrar Cabin Heat y Defrost para evitar la asfixia o intoxicación de los ocupantes.",
    },
    {
      id: "da42-5-16",
      question:
        "Si se genera humo denso o fuego de origen eléctrico tras el panel de instrumentos en vuelo, ¿cuál es el procedimiento para desenergizar el sistema sin perder los instrumentos esenciales en IMC?",
      options: [
        "Cortar ambos ENGINE MASTER y planear a ciegas hacia el suelo.",
        "Desconectar únicamente el piloto automático y encender todas las luces de cabina.",
        "Mantener todos los sistemas eléctricos encendidos y abrir la cúpula principal en vuelo rápido.",
        "Activar el interruptor EMERGENCY en ON (alimentando el horizonte standby) y seguidamente colocar AVIONIC MASTER y ELECT. MASTER en OFF, abriendo la ventilación.",
      ],
      correctAnswerIndex: 3,
      explanation:
        "Al pasar el switch EMERGENCY a ON, el horizonte de actitud standby queda alimentado por su batería de reserva propia; así se pueden apagar con seguridad los buses principales (ELECT. MASTER y AVIONIC MASTER en OFF).",
    },
    {
      id: "da42-5-17",
      question:
        "En caso de un fallo eléctrico total en la DA42, ¿qué instrumentos y sistemas continúan operativos al activar el interruptor EMERGENCY en ON y durante cuánto tiempo?",
      options: [
        "El horizonte artificial de reserva (Standby Horizon) y la luz de inundación de cabina durante un mínimo de 1 hora y 30 minutos mediante su propio pack de baterías independientes.",
        "Ambas pantallas G1000 completas durante 4 horas.",
        "El tren de aterrizaje y los flaps hidráulicos de forma indefinida.",
        "La radio principal COM 1 y el transpondedor durante 30 minutos.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El paquete de baterías secas del sistema de emergencia alimenta exclusivamente el horizonte artificial analógico standby y la luz de cortesía superior durante al menos 90 minutos (AFM 3.7.1).",
    },
    {
      id: "da42-5-18",
      question:
        "Al ejecutar la extensión manual de emergencia del tren de aterrizaje en la DA42, ¿qué velocidad máxima no debe rebasarse y cómo se enclavan las patas del tren?",
      options: [
        "Velocidad máxima de 100 KIAS y requiere bombear una palanca manual 50 veces.",
        "Velocidad máxima de 156 KIAS (vLOR); al tirar del mando de emergencia se libera la presión hidráulica y el tren cae por gravedad y muelles mecánicos hasta enclavarse (3 verdes).",
        "Velocidad máxima de 188 KIAS y se enclava mediante cartuchos pirotécnicos de gas.",
        "No hay límite de velocidad si se tira de la palanca roja con flaps abajo.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Por debajo de vLOR (156 KIAS), tirar de la palanca de emergencia libera las válvulas del bloque hidráulico; la gravedad y los resortes extienden y bloquean las tres patas en su posición baja.",
    },
    {
      id: "da42-5-19",
      question:
        "Durante un aterrizaje de emergencia con tren arriba (panzada) en la DA42, ¿qué acción final recomienda el AFM realizar justo antes de la toma de tierra para minimizar el riesgo de incendio?",
      options: [
        "Mantener ambos motores a potencia de despegue hasta que el fuselaje impacte la pista.",
        "Abrir los tanques de combustible auxiliares para vaciarlos en el aire a baja cota.",
        "Cortar ambos interruptores ENGINE MASTER y selectores de combustible justo antes del contacto con el suelo, y apagar el ELECT. MASTER tras la parada total antes de evacuar.",
        "Poner el morro abajo bruscamente para clavar los motores en la tierra.",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Cortar los motores instantes antes del impacto detiene la rotación de las hélices (evitando metralla de palas y rotura violenta) y corta el flujo de combustible a alta presión en el vano motor.",
    },
    {
      id: "da42-5-20",
      question:
        "Al aterrizar con un neumático del tren principal desinflado en la DA42, ¿cuál es la técnica de toma de tierra y control direccional recomendada?",
      options: [
        "Aterrizar con el ala de la rueda pinchada baja para forzar el frenado inmediato por fricción de llanta.",
        "Tomar con el morro muy alto y aplicar freno de estacionamiento antes del toque de ruedas.",
        "Desviar el avión hacia la hierba antes de cruzar el umbral de pista.",
        "Tomar tierra primero sobre la rueda principal inflada (ala sana baja), retrasando el contacto de la rueda pinchada el mayor tiempo posible y manteniendo el control de guiñada con timón y freno sano.",
      ],
      correctAnswerIndex: 3,
      explanation:
        "El AFM 3.6.4 prescribe tocar sobre el borde de pista del lado de la rueda intacta con esa ala ligeramente baja, manteniendo la pata desinflada en el aire mientras la velocidad aerodinámica lo permita.",
    },
    {
      id: "da42-5-21",
      question:
        "Para configurar la DA42 en un descenso de emergencia rápido (Emergency Descent) manteniendo la máxima tasa de caída estructuralmente segura, ¿qué elementos deben configurarse?",
      options: [
        "Flaps en posición UP, tren de aterrizaje DOWN (actuando como freno aerodinámico), ambas palancas de potencia en IDLE y velocidad hasta vNO (155 KIAS) o vNE en aire en calma.",
        "Flaps en posición LDG, tren UP y potencia al 100% en picada.",
        "Parar ambos motores y dejar las hélices en molinete en posición horizontal.",
        "Abrir la cúpula de cabina en vuelo a 180 KIAS.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El procedimiento 3.9.7 indica flaps UP, tren abajo (que actúa como un eficaz freno aerodinámico), palancas a ralentí y acelerar hasta la velocidad máxima permitida por la turbulencia ambiental.",
    },
    {
      id: "da42-5-22",
      question:
        "Ante una entrada inadvertida en barrena (Spin) en la DA42, ¿cuál es la secuencia estándar de recuperación inmediata según el AFM?",
      options: [
        "Aplicar potencia máxima asimétrica en el motor exterior de la barrena y tirar de la palanca hacia atrás.",
        "Potencia a IDLE, timón a fondo en sentido contrario al giro de la barrena, palanca de mando adelante con alerones neutros y flaps UP, centrando pedales al cesar el giro.",
        "Mantener timón en el sentido del giro y desplegar flaps en posición LDG.",
        "Dejar los mandos completamente sueltos y esperar a que el avión salga por sí mismo.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "La DA42 se recupera de barrena aplicando la técnica clásica certificada: cortar potencia, timón opuesto a la rotación, picar para quebrar la pérdida con alerones neutros y centrar al detenerse el giro.",
    },
    {
      id: "da42-5-23",
      question:
        "Si en vuelo de crucero se observan fluctuaciones u oscilaciones periódicas en las RPM de una hélice que no se corrigen variando la potencia, ¿qué procedimiento técnico permite verificar el control de la gobernación?",
      options: [
        "Apagar el alternador del motor opuesto.",
        "Cortar el disyuntor de la bomba de aceite de la hélice en vuelo.",
        "Accionar el interruptor selector ECU SWAP a la posición ECU B para forzar el control del motor y gobernador por la ECU secundaria (volviendo a AUTO si la anomalía continúa).",
        "Realizar una prueba de paso de bandera en vuelo de crucero.",
      ],
      correctAnswerIndex: 2,
      explanation:
        "El procedimiento 3.9.3 indica que ante RPM oscilantes se debe probar cambiando la potencia y, si persiste, conmutar mediante ECU SWAP a la ECU B para comprobar si el canal B estabiliza el control de la hélice.",
    },
    {
      id: "da42-5-24",
      question:
        "Al realizar una puesta en marcha con toma de corriente externa (EPU) conectada en el morro de la DA42, ¿qué verificación de tensión debe realizarse antes de arrancar los motores?",
      options: [
        "Comprobar que el voltaje sea inferior a 12 V para no sobrecargar el sistema.",
        "Mantener los dos ENGINE MASTER en ON antes de enchufar la clavija de morro.",
        "Arrancar primero el motor derecho y luego conectar la clavija EPU con el motor girando.",
        "Comprobar que el interruptor ELECT. MASTER estaba en OFF al conectar y que, tras colocarlo en ON, la indicación de voltaje en el G1000 supera los 24 V.",
      ],
      correctAnswerIndex: 3,
      explanation:
        "El procedimiento 4B.7 exige ELECT. MASTER en OFF durante la conexión de la clavija, encenderlo después y verificar que la lectura en el sistema eléctrico del G1000 sea superior a 24 V antes del encendido.",
    },
  ],
};

export const DA42_LESSON_6_QUIZ: Quiz = {
  id: "quiz-da42-lesson-6",
  course_id: DA42_COURSE_ID,
  lesson_id: "da420000-0000-0000-0000-000000000060",
  title:
    "Examen de Verificación: 6. Documentación Prevuelo, Masa y Centrado, Combustible y Performance",
  description:
    "Evaluación teórica de verificación sobre despacho operativo F.OPS.02, teoría de masa y centrado, loadsheet F.OPS.04, envolvente de CG, planificación de combustible bimotor (reserva 1h 30min OM Blue Team), densidades JET A-1 y ábacos de performance de despegue y aterrizaje de la Diamond DA42 Twin Star (Continental CD-135 / CD-155).",
  minPassScorePercentage: 75,
  questions: [
    {
      id: "da42-6-1",
      question:
        "¿Cuáles son los 4 pilares operacionales obligatorios que el Piloto al Mando (PIC) debe cumplimentar y verificar en el formulario de despacho F.OPS.02 antes de iniciar cualquier vuelo en la DA42 Twin Star?",
      options: [
        "Masa y centrado (W&B dentro de la envolvente y sin exceder MTOM), planificación de combustible (Fuel Planning con reserva OM de 1h 30m), performance de despegue y performance de aterrizaje factorizada.",
        "Horas de vuelo del alumno en multimotor, pronóstico de ruta a 5 días y revisión médica aeronáutica anual.",
        "Presión de neumáticos, nivel de aceite de las dos cajas reductoras y voltaje de batería principal.",
        "Plan de vuelo IFR en Eurocontrol, tasas de navegación aérea y asignación de slots de llegada.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El formulario F.OPS.02 (Hoja de Despacho Operacional de Blue Team) exige la verificación documental de los cuatro pilares: 1) Masa y Centrado (Part-NCO.GEN.105), 2) Planificación de Combustible con reserva reforzada OM de 1h 30m (Part-NCO.OP.125), 3) Performance de Despegue y 4) Performance de Aterrizaje.",
    },
    {
      id: "da42-6-2",
      question:
        "En la Diamond DA42 Twin Star, ¿dónde se sitúa exactamente el plano de referencia longitudinal (Datum) según la Sección 6 del AFM?",
      options: [
        "En la punta del cono de la hélice izquierda (propeller spinner tip).",
        "En un plano vertical situado a 2,196 metros (86,46 in) por delante del punto más adelantado de la costilla de raíz del ala corta (stub wing root rib).",
        "En el cortafuegos delantero de las dos góndolas de los motores Continental.",
        "Exactamente sobre el eje central del tren de aterrizaje principal.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "De acuerdo con la Sección 6 del AFM de la DA42, el Datum se define como un plano vertical imaginario localizado a 2,196 metros (86,46 pulgadas) por delante del punto anterior de la costilla de raíz del ala corta (stub wing root rib), midiéndose todos los brazos hacia atrás en valores positivos.",
    },
    {
      id: "da42-6-3",
      question:
        "De acuerdo con el Loadsheet oficial F.OPS.04 y el AFM de la DA42, ¿cuáles son los brazos de palanca (estaciones) correspondientes al equipaje de morro y a los tanques principales de combustible en las alas?",
      options: [
        "Equipaje de morro a 2,300 m y tanques principales a 0,600 m tras el Datum.",
        "Equipaje de morro a 1,250 m y tanques principales a 3,890 m tras el Datum.",
        "Equipaje de morro a 0,600 m y tanques principales de combustible a 2,630 m tras el Datum.",
        "Equipaje de morro a 3,250 m y tanques principales a 2,420 m tras el Datum.",
      ],
      correctAnswerIndex: 2,
      explanation:
        "En el F.OPS.04 y el AFM de la DA42, el compartimento de morro (capacidad máxima 30 kg) tiene un brazo muy adelantado de 0,600 m (23,6 in), mientras que los depósitos principales de combustible alares se sitúan en la estación 2,630 m (103,5 in) tras el Datum.",
    },
    {
      id: "da42-6-4",
      question:
        "En la envolvente oficial de masa y centrado de la DA42 Twin Star (AFM 6.4.4), ¿cuál es el límite trasero (Aft CG Limit) admisible a lo largo de todo el rango de masas?",
      options: [
        "2,35 m constante hasta 1.468 kg de masa.",
        "2,40 m en despegue y 2,42 m en aterrizaje.",
        "2,63 m correspondiente a la línea de los depósitos alares.",
        "2,48 m (97,6 in) constante desde la masa mínima en vuelo hasta la MTOM máxima certificada.",
      ],
      correctAnswerIndex: 3,
      explanation:
        "La envolvente oficial de la DA42 establece un límite de centrado trasero rígido e invariable de 2,48 m (97,6 in) a lo largo de todo el rango de masas, tanto para la MTOM estándar de 1.700 kg como para los 1.785 kg con modificación MÄM 42-088.",
    },
    {
      id: "da42-6-5",
      question:
        "¿Cómo se calcula la Zero Fuel Mass (ZFM) en la DA42 y qué masa de despegue (TOM) resulta al añadir 140,0 kg (166,7 L) de Jet A-1 a una ZFM de 1.435,0 kg?",
      options: [
        "La ZFM es la masa vacía más tripulación y equipaje (1.435,0 kg); sumando el combustible de despegue (140,0 kg) se obtiene una TOM de 1.575,0 kg.",
        "La ZFM es la masa máxima de despegue menos el combustible de reserva; la TOM resultante sería 1.700,0 kg.",
        "La ZFM incluye el combustible de contingencia y ruta; la TOM resultante sería de 1.435,0 kg.",
        "La ZFM equivale a la masa de aterrizaje; la TOM resultante sería de 1.621,4 kg.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "ZFM = BEW (1.250 kg) + Pilotos (160 kg) + Equipajes (25 kg) = 1.435,0 kg. Al añadir el Takeoff Fuel de 140,0 kg (166,7 L a 0,84 kg/L), la Masa de Despegue (TOM) calculada es exactamente 1.575,0 kg.",
    },
    {
      id: "da42-6-6",
      question:
        "Puesto que los depósitos principales alares están en la estación 2,630 m (por detrás del CG medio del avión), ¿cómo evoluciona la posición del centro de gravedad al quemar el combustible de ruta (Trip Fuel)?",
      options: [
        "El centro de gravedad se desplaza hacia atrás, acercándose al límite de 2,48 m.",
        "El centro de gravedad se desplaza progresivamente hacia adelante, por lo que es obligatorio verificar que no rebase el límite adelantado al aterrizar.",
        "El centro de gravedad permanece completamente estático e inmóvil durante todo el vuelo.",
        "El centro de gravedad se desvía exclusivamente hacia el ala izquierda por efecto del par motor.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Al encontrarse los tanques principales a 2,630 m (traseros respecto al rango operativo de CG de 2,40 a 2,45 m), el consumo de combustible resta peso de atrás, provocando que el centro de gravedad avance hacia la proa. En el aterrizaje debe verificarse que el LCG no viole el límite delantero.",
    },
    {
      id: "da42-6-7",
      question:
        "En la DA42 Twin Star con motores Continental CD-135 / CD-155, ¿cuál es el consumo horario medio total bimotor en régimen de crucero estándar al 60% de carga (LOAD) según las tablas del AFM?",
      options: [
        "Aproximadamente 20,4 L/h total (consumo típico de la monomotor DA40).",
        "Aproximadamente 55,0 L/h total bimotor.",
        "Aproximadamente 33,0 L/h total bimotor (16,5 L/h por motor / 27,7 kg/h).",
        "Aproximadamente 12,5 L/h total bimotor.",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Las tablas de crucero del AFM de la DA42 indican que al 60% de LOAD el consumo total de ambos motores asciende a 33,0 L/h (16,5 L/h por motor, equivalentes a 8,7 USG/h o 27,7 kg/h de Jet A-1).",
    },
    {
      id: "da42-6-8",
      question:
        "Si durante un vuelo de crucero en la DA42 se encuentra una fuerte componente de viento de cara (headwind), ¿qué impacto directo tiene sobre la navegación y el combustible requerido?",
      options: [
        "Aumenta la velocidad sobre el suelo (GS) y disminuye el consumo horario de los motores.",
        "No modifica la GS ni el tiempo de vuelo, solo altera la temperatura del refrigerante motor.",
        "Reduce el combustible de reserva obligatoria por volar a menor régimen de avance.",
        "Disminuye la velocidad sobre el suelo (GS), aumenta el tiempo estimado en ruta (ETE) y aumenta la cantidad necesaria de combustible de etapa (Trip Fuel).",
      ],
      correctAnswerIndex: 3,
      explanation:
        "El viento de cara reduce la Ground Speed (GS = TAS - Vviento). Al ser menor la GS, el tiempo de vuelo aumenta (ETE = Distancia / GS), demandando mayor cantidad de combustible de crucero (Trip Fuel = ETE x Consumo Horario).",
    },
    {
      id: "da42-6-9",
      question:
        "Con los depósitos principales alares completos (189,2 L utilizables) y manteniendo crucero bimotor al 60% LOAD (33,0 L/h), ¿cuál es la autonomía bruta máxima de la DA42 antes de considerar reservas?",
      options: [
        "Más de 5 horas y media brutas de vuelo (aproximadamente 5,73 horas / 5 h 44 min continuados).",
        "Apenas 2 horas y 15 minutos de autonomía máxima.",
        "Más de 9 horas y media de vuelo continuado con tanques principales.",
        "Exactamente 3 horas y 30 minutos de autonomía.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Dividiendo 189,2 litros utilizables de los depósitos principales entre el consumo bimotor al 60% LOAD de 33,0 L/h se obtienen 5,73 horas brutas de vuelo (5 horas y 44 minutos) antes de agotar los tanques.",
    },
    {
      id: "da42-6-10",
      question:
        "De acuerdo con la normativa interna de seguridad del Manual de Operaciones (OM) de Blue Team, ¿cuál es la reserva final de combustible obligatoria que debe mantenerse inalterable para cualquier vuelo en la DA42?",
      options: [
        "45 minutos de reserva como marca el mínimo reglamentario estándar de EASA Part-NCO (24,8 L).",
        "1 hora y 30 minutos (90 minutos) de reserva final inalterable, equivalente a 49,5 litros de Jet A-1 en bimotor.",
        "30 minutos de reserva diurna o 15 minutos en circuito de tráfico local en Tenerife Norte.",
        "2 horas y 30 minutos de reserva obligatoria independientemente de la ruta.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El Operations Manual (OM) de Blue Team impone para el bimotor DA42 una reserva final reforzada de 1 hora y 30 minutos (49,5 L de Jet A-1 a 33 L/h), duplicando el mínimo legal de 45 min de EASA Part-NCO para maximizar la seguridad operacional.",
    },
    {
      id: "da42-6-11",
      question:
        "En la planificación de combustible del F.OPS.02 de la DA42, ¿cuál es el factor de densidad estándar del Jet A-1 y qué combustible mínimo de rampa resulta para 1 hora de ruta local con 20 min de alternativo y reserva OM de 1h 30m?",
      options: [
        "Densidad de 0,72 kg/L y un combustible mínimo de rampa de 65,0 litros.",
        "Densidad de 1,00 kg/L y un combustible mínimo de rampa de 150,0 litros.",
        "Densidad de 0,84 kg/L y un combustible mínimo de rampa de 99,5 litros (Taxi 6 L + Trip 33 L + Alternativo 11 L + Reserva 49,5 L).",
        "Densidad de 0,84 kg/L y un combustible mínimo de rampa de 49,5 litros.",
      ],
      correctAnswerIndex: 2,
      explanation:
        "El Jet A-1 tiene una densidad estándar de 0,84 kg/L. El desglose mínimo exigido en el F.OPS.02 para 1 hora de vuelo es: Rodaje 6,0 L + Ruta 33,0 L + Alternativo 11,0 L + Reserva final OM 49,5 L = 99,5 L (83,6 kg de Jet A-1).",
    },
    {
      id: "da42-6-12",
      question:
        "Según la Sección 5 del AFM de la DA42, ¿qué incrementos reglamentarios deben aplicarse a la carrera de despegue en tierra (Ground Roll) al operar en hierba seca corta (hasta 5 cm) y en hierba alta (5 a 10 cm)?",
      options: [
        "+5% en hierba corta y +10% en hierba alta.",
        "+25% en hierba corta y +50% en hierba alta.",
        "No se aplica incremento si la hierba no supera los 10 cm.",
        "+10% en hierba seca corta y +25% en hierba alta sobre la carrera de despegue en tierra.",
      ],
      correctAnswerIndex: 3,
      explanation:
        "El AFM de la DA42 establece en sus notas de performance de despegue que la carrera en suelo aumenta un 10% en hierba seca corta (hasta 5 cm) y un 25% en hierba alta (5 a 10 cm).",
    },
    {
      id: "da42-6-13",
      question:
        "Al consultar las tablas de aterrizaje del AFM de la DA42 (Flaps LDG), ¿cuál es la velocidad de referencia (v_REF) a 1.700 kg y cuál es la penalización por componente de viento en cola (tailwind)?",
      options: [
        "v_REF = 76 KIAS y la distancia de aterrizaje se incrementa un 10% por cada 2 nudos de viento en cola.",
        "v_REF = 65 KIAS y la distancia se incrementa un 5% por cada 10 nudos de viento en cola.",
        "v_REF = 82 KIAS y el viento en cola no penaliza si se frena al máximo.",
        "v_REF = 70 KIAS y la distancia se reduce un 10% por el empuje dinámico.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "A la MTOM estándar de 1.700 kg con Flaps LDG, la velocidad de aproximación de referencia es v_REF = 76 KIAS. El viento en cola penaliza fuertemente incrementando la distancia en un 10% por cada 2 kt.",
    },
    {
      id: "da42-6-14",
      question:
        "En la verificación de performance de despegue del formulario F.OPS.02 frente a las distancias declaradas del aeródromo, ¿qué condición reglamentaria debe cumplirse inexcusablemente?",
      options: [
        "Basta con que la carrera en suelo (Ground Roll) no supere la pista, sin considerar la altura de 50 ft.",
        "La distancia total de despegue sobre obstáculo de 50 ft calculada en el AFM (con factores de corrección aplicados) debe ser estrictamente menor o igual que la longitud disponible (TORA / TODA).",
        "La distancia calculada puede exceder un 15% la pista si la temperatura exterior es inferior a 20 °C.",
        "Solo se comprueba si la masa al despegue supera los 1.750 kg.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Para autorizar el despacho seguro en el F.OPS.02, la distancia total requerida para alcanzar 50 ft calculada en el AFM debe ser menor o igual a las distancias disponibles de pista declaradas en el AIP (TORA y TODA).",
    },
    {
      id: "da42-6-15",
      question:
        "Al evaluar la performance de aterrizaje en el F.OPS.02, ¿qué representa la Landing Distance Available (LDA) y qué margen de seguridad escolar aplica Blue Team multiplicando por el factor 1,43?",
      options: [
        "La LDA es la distancia entre el umbral y el hangar; el factor 1,43 es para el repostaje de combustible.",
        "La LDA es la velocidad indicada sobre el umbral; el factor 1,43 representa el coeficiente de fricción.",
        "La LDA es la longitud de pista física declarada disponible para el aterrizaje; Blue Team multiplica la distancia del AFM sobre 50 ft por 1,43 (+43% de margen) para garantizar una parada holgada y segura.",
        "El factor 1,43 solo se aplica si la pista está contaminada con hielo o nieve.",
      ],
      correctAnswerIndex: 2,
      explanation:
        "La LDA es la longitud física declarada de pista disponible para el aterrizaje. Blue Team aplica una estricta política de seguridad multiplicando la distancia del AFM sobre 50 ft por un factor de seguridad de 1,43 (+43% de margen de parada).",
    },
    {
      id: "da42-6-16",
      question:
        "Para dar por formalmente cerrado y legalmente válido el despacho operativo F.OPS.02 de la DA42 antes de dirigirse a la aeronave, ¿qué requisito formal de firma es indispensable?",
      options: [
        "La doble firma obligatoria del Alumno (PIC bajo supervisión) y del Instructor de Vuelo (CRI/FI MEP) responsable de la operación tras verificar los 4 pilares de seguridad.",
        "La firma exclusiva del jefe de mantenimiento en el hangar técnico.",
        "El sello de autorización de la torre de control de navegación aérea.",
        "No requiere ninguna firma si el plan de vuelo ya fue enviado por la aplicación móvil.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El despacho operacional F.OPS.02 concluye con el compromiso formal de seguridad mediante la doble firma presencial: el alumno (Piloto al Mando en formación) que calculó los datos y el Instructor de Vuelo responsable que supervisa y valida la salida.",
    },
  ],
};

export const DA42_QUIZZES: Quiz[] = [
  DA42_LESSON_5_QUIZ,
  DA42_LESSON_6_QUIZ,
];
