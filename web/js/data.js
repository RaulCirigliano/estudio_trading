// Base de datos estructurada con las 7 categorías oficiales del cuaderno de Trading
window.TRADING_CATEGORIES = [
  {
    id: "cat_01",
    num: "1",
    title: "Análisis Técnico",
    icon: "📈",
    sourcesCount: 8,
    summary: "Atlas cuantitativo de velas, Wyckoff, ratios DRDR, Bulkowski benchmarks, chartismo y Ondas de Elliott.",
    sections: [
      {
        id: "sec_01_01",
        title: "Atlas Cuantitativo de Velas y Métrica DRDR",
        content: `
### Mecánica de Subasta y Ratio DRDR
El análisis técnico cuantitativo institucional descarta la subjetividad visual mediante la métrica formal del **Ratio de Disparidad Cuerpo/Rango (DRDR)**:

$$\\text{DRDR} = \\frac{|\\text{Open} - \\text{Close}|}{\\text{High} - \\text{Low}}$$

#### Clasificación Anatómica Formal
- **Dojis (Libélula, Lápida, Clásico):** Exige $\\text{DRDR} \\le 0.05$. El cuerpo real representa $\\le 5\\%$ del rango total.
  - *Doji Libélula:* Apertura y cierre en máximos ($\\text{Open} \\approx \\text{Close} \\approx \\text{High}$) con mecha inferior $\\ge 3\\times$ el cuerpo. Tasa de éxito del **71%** en soportes mayores.
  - *Doji Lápida:* Apertura y cierre en mínimos con mecha superior $\\ge 3\\times$ el cuerpo.
- **Martillo (Hammer) y Estrella Fugaz (Shooting Star):** Exige $\\text{DRDR} \\le 0.33$. El cuerpo real se sitúa en el tercio superior (martillo) o inferior (estrella), con mecha de rechazo $\\ge 2\\times$ a $3\\times$ la longitud del cuerpo y sombra contraria $\\le 10\\%$ del rango.
- **Velas Envolventes (Bullish / Bearish Engulfing):** Exige que el cuerpo de la segunda vela cubra holgadamente el rango de la primera ($Cuerpo_2 > Rango_1$) y que el volumen relativo de la segunda barra duplique al de la primera.
- **Tres Soldados Blancos (Three White Soldiers):** Tres barras consecutivas con $\\text{DRDR} \\ge 0.70$ y sombras superiores $\\le 15\\%$. Tasa de continuidad del **82%**.
        `
      },
      {
        id: "sec_01_02",
        title: "Benchmark Estadístico Thomas Bulkowski (4.7M Velas)",
        content: `
### Datos Empíricos Auditados (NYSE, NASDAQ y Futuros)
Muestreo estadístico sobre más de 4.7 millones de velas reales:

| Patrón de Velas | Categoría | Tasa de Éxito (%) | Movimiento Promedio | Falsa Ruptura (%) | Veredicto Operativo Institucional |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Three White Soldiers** | Continuación Alcista | **82%** | +6.4% posterior | 14% (Muy Bajo) | Momentum puro. Precaución si RSI > 70. |
| **Morning Star** | Reversión Alcista | **78%** | +5.2% en 10 barras | 18% (Muy Bajo) | Señal A+ en soporte mayor. Ratio R:R óptimo. |
| **Rising Three Methods** | Continuación Alcista | **74%** | +4.9% posterior | 20% (Bajo) | Pullback sano con volumen en secado. |
| **Evening Star** | Reversión Bajista | **72%** | -4.8% en 10 barras | 22% (Bajo) | Alta fiabilidad en techos de canal y distribución. |
| **Dragonfly Doji** | Reversión en Suelo | **71%** | +4.5% en soporte | Alto sin nivel | Rechazo masivo con RVOL > 2.0. |
| **Bullish Engulfing** | Reversión Alcista | **63%** | +4.1% posterior | 28% (Bajo) | Exige que volumen duplique a vela previa. |
| **Bearish Engulfing** | Reversión Bajista | **63%** | -4.3% posterior | 28% (Bajo) | Fuerte absorción institucional. Trampa de toros. |
| **Hammer (Martillo)** | Reversión Alcista | **60%** | +3.8% posterior | 32% (Medio) | Falla en rangos sucios; letal en soporte mayor. |
| **Shooting Star** | Reversión Bajista | **59%** | -3.9% posterior | 35% (Medio) | Rechazo violento en resistencias históricas. |
| **Doji Clásico** | Indecisión | **51%** | Neutral | Moneda al aire | No operar de forma aislada. Marca transición. |
        `
      },
      {
        id: "sec_01_03",
        title: "Patrones Chartistas Complejos y Proyección H",
        content: `
### Geometría y Fases de Acumulación/Distribución Wyckoff
- **Hombro-Cabeza-Hombro Invertido:**
  - *Variante de Hombro Derecho Elevado (Higher Low):* El hombro derecho marca un mínimo ascendente respecto al izquierdo (Phase D Wyckoff - Sign of Strength). Es la variante con mayor tasa de éxito estadístico.
- **Proyección de Objetivos ($H$):**
  - Se mide el vector vertical $H$ desde el punto extremo de la cabeza hasta la línea de cuello (*neckline*).
  - En rupturas: $\\text{Target} = \\text{Precio de Ruptura} \\pm H$.
- **Invalidación con Amortiguador ATR:**
  $$\\text{SL}_{Long} = \\text{Mínimo del Patrón} - (1.5 \\times \\text{ATR})$$
  $$\\text{SL}_{Short} = \\text{Máximo del Patrón} + (1.5 \\times \\text{ATR})$$
        `
      },
      {
        id: "sec_01_04",
        title: "Ondas de Elliott y Retrocesos Fibonacci",
        content: `
### Las 3 Reglas Cardinales Inviolables
1. **Onda 2** nunca retrocede el 100% o más de Onda 1.
2. **Onda 3** nunca es la más corta entre las ondas de impulso (1, 3 y 5). Habitualmente es la extendida (161.8% o 261.8% de O1).
3. **Onda 4** nunca solapa el territorio de precio de Onda 1 (excepto en diagonales).

### Ratios de Confluencia Fibonacci
- **Onda 2:** Retroceso entre 50.0% y 61.8% de Onda 1.
- **Onda 3:** Extensión 161.8% de Onda 1.
- **Onda 4:** Retroceso del 38.2% al 50.0% de Onda 3.
- **Onda 5:** Extensión 61.8% a 100% de Onda 1.
        `
      }
    ]
  },
  {
    id: "cat_02",
    num: "2",
    title: "Criptomonedas",
    icon: "🪙",
    sourcesCount: 5,
    summary: "Mercado 24/7 vs gaps CME, Funding Rates, Open Interest, setup de barrido en BTC y margen aislado.",
    sections: [
      {
        id: "sec_02_01",
        title: "Microestructura 24/7 y Ciclos de Halving",
        content: `
### Descubrimiento de Precios Continuo
- A diferencia de NYSE o BYMA, el mercado cripto opera **24 horas al día, 7 días a la semana**.
- **Gaps de Futuros CME:** Los contratos de futuros regulados de Bitcoin en Chicago Mercantile Exchange cierran el viernes y reabren el domingo, creando vacíos de liquidez (*gaps*) frente al precio spot continuo, los cuales actúan como imanes de precio estadísticos.
- **Ciclos de 4 Años:** Estructurados por la reducción a la mitad de la emisión (*Halving*):
  1. *Fase de Acumulación Macro.*
  2. *Expansión Parabólica y Rotación (BTC $\\rightarrow$ ETH $\\rightarrow$ Altcoins).*
  3. *Criptoinvierno y contracción de liquidez.*
        `
      },
      {
        id: "sec_02_02",
        title: "Funding Rates, Open Interest y Piscinas de Liquidación",
        content: `
### Mecánica de Futuros Perpetuos
- **Funding Rate Positivo Extremo:** Los largos pagan a los cortos cada 8 horas. Denota sobrecompra y hacinamiento de compradores apalancados (*longs overcrowding*). Alto riesgo de *long squeeze* y cascada de liquidaciones.
- **Funding Rate Negativo Extremo:** Los cortos pagan a los largos por sobreventa masiva. Alerta de *short squeeze* violento.
- **Divergencias con Open Interest:** Si el precio sube pero el Open Interest cae, la subida no está respaldada por nuevo dinero institucional, sino por el cierre forzado de posiciones cortas (subida frágil).
- **Margen Aislado Obligatorio:** Se prohíbe el Margen Cruzado en operativa cuantitativa para blindar el balance de la cuenta ante deslices o eventos de cisne negro.
        `
      },
      {
        id: "sec_02_03",
        title: "Setup Institucional en BTC y Límite 0.75 Fib",
        content: `
### Caso de Estudio Real en Bitcoin ($60,000 USD)
1. **Barrido de Mínimos:** El precio perfora el soporte de $60,000 USD barriendo hasta $58,800 USD para activar órdenes de stop loss minoristas.
2. **Absorción Institucional:** Las órdenes límite institucionales compran toda la oferta disponible, cerrando la barra en máximos y formando un **Doji Libélula** con RVOL > 2.0.
3. **Gatillo Táctico:** Ruptura de la EMA 50 en 5m a **$64,200 USD**.
4. **Stop Loss:** **$58,800 USD** (bajo la mecha de absorción).
5. **Take Profit:** **$74,000 USD** ($R:R \\approx 1:1.81$ estructural).
6. **Límite de Invalidad en 0.75 Fibonacci:** En cualquier retroceso corrector de 1H, si el precio perfora y cierra por debajo del nivel 0.75 de Fibonacci, la probabilidad estadística de continuación se destruye y el setup se descarta inmediatamente.
        `
      }
    ]
  },
  {
    id: "cat_03",
    num: "3",
    title: "Desarrollo de Negocios",
    icon: "💼",
    sourcesCount: 6,
    summary: "El trading como empresa de alto rendimiento, Runway de 6-12 meses, rutinas ejecutivas XDS y reclutamiento en 5 pasos.",
    sections: [
      {
        id: "sec_03_01",
        title: "De Operador a CEO de $100,000+/mes (Marco Razzetti)",
        content: `
### Las 3 Fases de Escalado Corporativo
Basado en el marco validado en más de 353 empresas y $313 millones facturados:
1. **Fase de Operador ($0 a $30,000/mes):** El fundador está en las trincheras. Ejecuta las órdenes, prospecta y analiza. Su tiempo en pantalla limita los ingresos.
2. **Fase de Manager de Operadores ($30,000 a $100,000/mes):** El éxito depende del liderazgo para delegar tareas en *setters*, *closers*, asistentes administrativos y analistas de soporte.
3. **Fase de Manager de Managers ($100,000+/mes):** El CEO lidera a directores de área (Mesa de Trading, Captación/Marketing y Cumplimiento/Riesgo).

### Ingeniería Financiera y Runway
- **Segregación de Cuentas:** Separar estrictamente el capital de negociación (*Trading Capital*) de la tesorería de operaciones corporativas (*Operating Cash Flow*).
- **Fondo de Maniobra (Runway):** Mantener de **6 a 12 meses de costes fijos y variables en reserva líquida**. Esto permite atravesar cualquier racha perdedora sin estrés financiero ni riesgo de quiebra.
        `
      },
      {
        id: "sec_03_02",
        title: "Rutinas Ejecutivas y Framework XDS",
        content: `
### El Protocolo de 3 Fases Diarias
- **Pre-Mercado (60-90 min antes):** Mapeo de la brújula macro (SPX/QQQ), sector líder (Semis/IA), cálculo de Fuerza Relativa y definición de escenarios IF/THEN.
- **Rueda de Mercado:** Máximo foco en setups A+. Ventana de mediodía (*Lunch Lull 12:00-13:30 EST*) vetada para nuevas aperturas.
- **Post-Mercado:** Registro de operaciones en la bitácora y aplicación del **Framework XDS**:
  - **eXterminar:** Eliminar distracciones y tareas de bajo impacto.
  - **Delegar:** Traspasar tareas secundarias al equipo o asistentes.
  - **Sistematizar:** Crear procedimientos operativos estandarizados (SOPs).
        `
      },
      {
        id: "sec_03_03",
        title: "Mecánica Institucional de Piso NYSE vs Prop Firms",
        content: `
### Comparativa de Estructura de Capital
| Dimensión | Capital Propio | Cuentas de Fondeo (Prop Firms) | Flujo Institucional (Piso NYSE) |
| :--- | :--- | :--- | :--- |
| **Exposición** | 100% sobre capital interno. | 0% balance interno (riesgo acotado al coste del reto). | 0% balance propio (capital bancario / fondos). |
| **Velocidad** | Lenta, limitada por retención neta. | Alta, apalancada por módulos ($100k+). | Masiva, enrutamiento en bloques multimillonarios. |
| **Herramientas** | Gráficos e indicadores estándar. | Plataformas comerciales y reglas de SL fijas. | Traffic, ICE Chat, Bloomberg; **0% gráficos técnicos**. |
| **Ejecución** | Órdenes a mercado/límite estándar. | Límites diarios de drawdown contractuales. | Subasta en corro; Market Makers limitados al 60% de participación. |
        `
      }
    ]
  },
  {
    id: "cat_04",
    num: "4",
    title: "Estrategias de Trading",
    icon: "🎯",
    sourcesCount: 7,
    summary: "Arquitectura Top-Down 1D-4H-1H-5M, modelo de Fuerza Relativa en semis/IA, casos reales AAPL/MSFT/TSLA/AMZN/BTC y 5 vetos.",
    sections: [
      {
        id: "sec_04_01",
        title: "Arquitectura Top-Down 1D -> 4H -> 1H -> 5M",
        content: `
### La Secuencia Descendente de Decisión
1. **1D (Gráfico Diario):** Brújula direccional macro. Identificación de niveles clave y velas de desaceleración o clímax. Ventana de probabilidad estadística de 48 a 72 horas.
2. **4H (4 Horas):** Confirmación de cambio de estructura (*Break of Structure - BOS*) con ruptura de pivotes previos (Higher Highs / Lower Lows).
3. **1H (1 Hora):** Patrón de corrección en compresión (cuña, triángulo, bandera) asentado en la Zona Dorada de Fibonacci (**0.50 a 0.75**). *Perforar 0.75 invalida la orden.*
4. **5M (5 Minutos):** Gatillo táctico. Ruptura de estructura local y cierre de vela con intención sobre/bajo la **EMA 50** con **RVOL > 1.8**.
        `
      },
      {
        id: "sec_04_02",
        title: "Modelo de Fuerza Relativa (Benchmark SPX/QQQ)",
        content: `
### Detección de Acumulación Institucional
- **Concepto:** Comparar punto por punto la reacción del activo frente al índice rector (S&P 500 / Nasdaq).
- **Ejemplo Cuantitativo (Micron - MU y CoreWeave):**
  - Si el SPX cae **-50 puntos** y MU solo retrocede **-2 dólares** (de $465 a $463), los compradores institucionales están absorbiendo toda la oferta disponible.
  - Al rebotar el SPX apenas **+20 puntos**, MU se dispara **+9 dólares** ($463 a $472), perforando su resistencia histórica y proyectando expansión hacia **$818**.
        `
      },
      {
        id: "sec_04_03",
        title: "Casos Reales Auditados y Precios Exactos",
        content: `
### Tabla de Parámetros por Activo
| Activo / Setup | Condición Técnica | Entrada Confirmada | Stop Loss (-1.5 ATR) | Breakeven | Take Profit / Target |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **AAPL (Long)** | Martillo + RVOL > 2.0 en Soporte 135.00 | 143.60 | 134.20 | 152.00 (+1R) | 162.00 ($R:R \\ge 1:2.0$) |
| **MSFT (Short)**| Estrella Fugaz + Volumen en Resistencia 440.00 | 428.50 | 443.00 | 420.00 | 400.00 ($R:R = 1:2.1$) |
| **TSLA (Long)** | Bullish Engulfing en Nivel Psicológico 200.00 | 215.50 | 198.00 | 233.00 | 255.00 ($R:R = 1:2.3$) |
| **AMZN (Long)** | Morning Star en Suelo Mayor 168.00 | 178.00 | 167.50 | 188.50 | 205.00 ($R:R = 1:2.6$) |
| **BTC (Long)**  | Dragonfly Doji en Soporte 60,000 USD | 64,200 | 58,800 | 69,500 | 74,000 ($R:R \\approx 1:1.8$) |
        `
      },
      {
        id: "sec_04_04",
        title: "Checklist Pre-Operación y 5 Vetos Absolutos",
        content: `
### Checklist de 5 Puntos Inviolables
1. ¿Alineado con el sesgo macro del SPX/QQQ y con Fuerza Relativa demostrada?
2. ¿Ubicado en nivel mayor de soporte/resistencia, EMA 20 o banda VWAP $\\pm 2\\sigma$?
3. ¿Confirmado por volumen relativo RVOL > 1.8 o anomalía Wyckoff?
4. ¿Asimetría matemática garantizada con ratio $R:R \\ge 1:2.0$?
5. ¿Operación fuera del *Lunch Lull* (12:00-13:30 EST) y sin noticias macro inminentes?

### Los 5 Vetos Absolutos de Mercado
1. **Ratio R:R < 1:2.0:** Rechazo categórico.
2. **Fuera de rueda bursátil:** Prohibido emitir órdenes en acciones fuera de sesión oficial.
3. **Lunch Lull (12:00-13:30 EST):** Veto de rupturas por volumen seco.
4. **Divergencia de Fuerza Relativa:** Prohibido comprar activos que caen mientras el SPX sube.
5. **Sin bitácora pre-market:** Prohibido operar sin la preparación de 60-90 minutos previa.
        `
      }
    ]
  },
  {
    id: "cat_05",
    num: "5",
    title: "Gestión de Riesgo",
    icon: "🛡️",
    sourcesCount: 6,
    summary: "Ecuación matemática de Position Sizing, apalancamiento dependiente, matriz no lineal de drawdown y Circuit Breakers.",
    sections: [
      {
        id: "sec_05_01",
        title: "Matemática del Position Sizing y Apalancamiento Real",
        content: `
### La Ecuación Exacta de Riesgo
$$\\text{Tamaño de Posición (Lote)} = \\frac{\\text{Capital Total} \\times \\text{Riesgo \\%}}{|\\text{Precio Entrada} - \\text{Precio Stop Loss}|}$$

- **El apalancamiento es una consecuencia, no una elección:**
  $$\\text{Apalancamiento Demandado} = \\frac{\\text{Lote} \\times \\text{Precio Entrada}}{\\text{Capital Total}}$$
- Si la distancia al SL es corta, el modelo demanda mayor apalancamiento nominal para consumir el riesgo monetario prefijado. Si el SL es amplio (alta volatilidad), el apalancamiento se reduce automáticamente.
- **Stop Loss con Amortiguador ATR:**
  - Posiciones Largas: $\\text{SL} = \\text{Mínimo del Patrón} - (1.5 \\times \\text{ATR})$.
  - Posiciones Cortas: $\\text{SL} = \\text{Máximo del Patrón} + (1.0 \\times \\text{ATR})$.
        `
      },
      {
        id: "sec_05_02",
        title: "Matriz No Lineal de Recuperación de Pérdidas",
        content: `
### Por qué las Pérdidas Crecen de Forma Asintótica
| Pérdida del Capital Nominal | Ganancia Necesaria para Breakeven | Severidad Institucional |
| :--- | :--- | :--- |
| **-5.00%** | **+5.26%** | Riesgo bajo. Recuperable con operativa estándar. |
| **-10.00%** | **+11.11%** | Activar protocolo de De-risking al 50%. |
| **-20.00%** | **+25.00%** | Alerta roja. Reducir lote al 25% del estándar. |
| **-50.00%** | **+100.00%** | Ruina técnica (requiere duplicar el capital restante). |

A partir del 20% de drawdown, la curva se vuelve casi vertical. La única forma de sobrevivir es cortar el riesgo de inmediato.
        `
      },
      {
        id: "sec_05_03",
        title: "Circuit Breakers y De-risking Escalonado",
        content: `
### Protocolo Automático de Reducción de Exposición
\`\`\`
[Riesgo Normal: Pérdida < 3%] ──────► Riesgo: 1.0% por operación
                                            │
                                            ▼ (Drawdown alcanza el 3%)
[Nivel 1 de De-risking]      ──────► Reducir riesgo al 50% (0.50% por orden)
                                            │
                                            ▼ (Drawdown alcanza el 4%)
[Nivel 2 de De-risking]      ──────► Reducir riesgo al 25% (0.25% por orden)
                                            │
                                            ▼ (Límite máximo de la firma)
[Circuit Breaker Total]      ──────► Apagado total, revocar API y desconexión
\`\`\`

### Reglas de Desconexión Intradiaria
1. **Límite Diario Alcanzado (ej. 2% del balance):** Cierre inmediato de posiciones y congelamiento de terminal.
2. **3 Pérdidas Consecutivas en el Día:** Bloqueo obligatorio del software hasta la siguiente sesión.
3. **Eventos FOMC / CPI / NFP:** Veto de órdenes 15 minutos antes y 15 minutos después.
        `
      }
    ]
  },
  {
    id: "cat_06",
    num: "6",
    title: "Sistemas y Automatización",
    icon: "⚙️",
    sourcesCount: 5,
    summary: "Arquitectura desacoplada, supervisor de IA local < 200ms, WAL mode en SQLite, fórmulas en código y FSM de 6 estados.",
    sections: [
      {
        id: "sec_06_01",
        title: "Arquitectura Híbrida: Código Determinista vs IA Local",
        content: `
### Desacople de Funciones del Motor
- **Código Determinista:** Mantiene la autoridad exclusiva e instantánea sobre el cálculo vectorial, ejecución de órdenes, corte de pérdidas (Stop Loss) y control de apalancamiento.
- **IA Local (Ollama, DeepSeek, Qwen):** Opera como supervisor en el *Radar Inbox*, filtrando contexto cualitativo y detectando anomalías VPA.
- **SLA de Veto (< 200 ms):** El modelo local responde a una API JSON asíncrona devolviendo \`"veto": true/false\`. Si la respuesta excede 200 ms, el código ejecuta por defecto la regla determinista primaria.
        `
      },
      {
        id: "sec_06_02",
        title: "Fórmulas Cuantitativas de Indicadores en Código",
        content: `
### Definiciones Numéricas Exactas
- **VWAP y Bandas de Desviación Ponderada:**
  $$\\text{VWAP} = \\frac{\\sum (\\text{Precio Típico}_i \\times \\text{Volumen}_i)}{\\sum \\text{Volumen}_i}$$
  Bandas a $\\pm 2\\sigma$ abarcan el **95%** de la distribución intradiaria de transacciones.
- **True Range y ATR (Suavizado Wilder, N=14):**
  $$\\text{TR}_t = \\max(H_t - L_t, |H_t - C_{t-1}|, |L_t - C_{t-1}|)$$
  $$\\text{ATR}_t = \\frac{\\text{ATR}_{t-1} \\times 13 + \\text{TR}_t}{14}$$
- **Filtros de Veto por Volatilidad:**
  - *Veto por Compresión:* Si el ATR no cubre el doble de comisiones más el slippage.
  - *Veto por Clímax:* Si el rango de la vela supera $2.5 \\times \\text{ATR}$, denota barrido o agotamiento; se bloquea la orden.
        `
      },
      {
        id: "sec_06_03",
        title: "FSM de 6 Estados, Breakeven y Solución SQLite WAL",
        content: `
### Máquina de Estados Finitos de una Orden
\`\`\`
[SIGNAL_DETECTED] ──> [RISK_CHECK_PASSED] ──> [ORDER_SUBMITTED]
                                                      │
[ORDER_CLOSED]   <── [ACTIVE_MANAGEMENT]  <── [ORDER_FILLED]
\`\`\`

### Breakeven con Cojín de Comisiones y Slippage
$$\\text{Precio Breakeven} = \\text{Precio Entrada} \\pm (\\text{Comisiones Round-Trip} + \\text{Factor Slippage})$$

### Solución a DATABASE_LOCKED en SQLite
Para evitar colisiones entre el hilo de ingesta y el hilo de ejecución:
\`\`\`sql
PRAGMA journal_mode = WAL;
PRAGMA synchronous = NORMAL;
\`\`\`
- Uso de **Mutex / asyncio.Lock** para aislar la deducción de saldo y evitar carreras en el cálculo de lotaje.
- Descarte automático de ticks con desfase temporal $> 500$ ms (*drop stale messages*).
        `
      }
    ]
  },
  {
    id: "cat_07",
    num: "7",
    title: "Testimonios y Experiencias",
    icon: "🏛️",
    sourcesCount: 4,
    summary: "Mecánica real del piso NYSE (Alex Ruiz, Citadel 60%), Peter Tuchman, lección Hormosi de $50k y el Decálogo Millonario.",
    sections: [
      {
        id: "sec_07_01",
        title: "Anatomía del Piso NYSE y Secretos Institucionales",
        content: `
### La Operativa Real del Piso (Testimonio Alex Ruiz)
- **0% Análisis Técnico Gráfico:** Los corredores de piso no usan medias móviles, osciladores ni RSI. Operan por casamiento de flujo, lectura de cinta (*tape reading*), deltas de opciones y profundidad de libro.
- **Cadena de Ejecución:**
  1. *Orden bancaria transmitida por ICE Chat / Bloomberg.*
  2. *Procesada en cabina mediante software Traffic.*
  3. *Auditada a viva voz por Trading Officials (chaquetas negras).*
  4. *Subastada en el corro con Market Makers (chaquetas azules: Citadel, Jane Street, Susquehanna) con derecho a tomar hasta el 60% del volumen del cruce.*
  5. *Impresa en cinta en menos de 60 segundos.*
- **Precios Divididos (Split Prices):** En opciones complejas (ej. 1,995 contratos), los precios se fragmentan para promediar exactamente un precio delta-neutral (ej. 2.5295).
        `
      },
      {
        id: "sec_07_02",
        title: "Psicología de Trinchera y Casos Reales",
        content: `
### Las 3 Fases del Operador
1. **Deslumbramiento e Impulso:** Euforia, sobreoperar, negación de la pérdida.
2. **Capitulación y Dolor:** Quiebras de cuentas, exposición a estafas cripto (casos Ivania y Manel durante 3 años de desierto).
3. **Madurez Disciplinada y Desapego:** Foco absoluto en la esperanza matemática y en la ejecución aburrida del proceso.

### Casos de Éxito Documentados
- **Manel e Ivania:** Retorno combinado del **247.76%** en concurso internacional de 20 días en un Bitcoin estancado (Manel 186.27% 1º lugar, Ivania 61.49% 2º lugar) aplicando el método de 5 pasos.
- **Shafi ($5k a $100k en 8 meses):** Aplicación de Fuerza Relativa en acciones de Semiconductores/IA (MU $472 $\\rightarrow$ $818 y CoreWeave $89 $\\rightarrow$ $120).
- **Lección Hormosi de $50,000:** No existen secretos mágicos ni algoritmos ocultos. Las empresas y los operadores de élite triunfan ejecutando los fundamentos aburridos con volumen masivo e ininterrumpido.
        `
      },
      {
        id: "sec_07_03",
        title: "Las 10 Leyes Inviolables de los Traders Multimillonarios",
        content: `
### El Decálogo Definitivo de Wall Street
1. **Ley de la Asimetría Obligatoria ($R:R \\ge 1:2.0$):** Ninguna operación se abre si el beneficio proyectado no duplica el riesgo asumido.
2. **Ley del Triángulo de Confluencia:** Exigir Ubicación en nivel clave + Volumen VPA + Asimetría.
3. **Ley de la Brújula Macro:** Operar siempre a favor del SPX/QQQ y con Fuerza Relativa demostrada.
4. **Ley de la Preparación en 3 Tiempos:** 60-90 min de Pre-Market, disciplina estática durante la sesión y auditoría rigurosa en el Post-Market.
5. **Ley del Filtro Horario:** Veto de rupturas durante el Lunch Lull (12:00-13:30 EST) y esperar cierres en la apertura americana (09:30-10:30 EST).
6. **Ley de la Paciencia y la Ejecución Aburrida:** Menos operaciones equivalen a mayor agudeza mental y consistencia patrimonial.
7. **Ley de las Pruebas sobre Promesas:** El valor se demuestra mediante números auditados, no con retórica persuasiva.
8. **Ley de la Responsabilidad del Sistema:** Si una orden falla por ambigüedad, la responsabilidad es del diseñador del sistema.
9. **Ley del Desapego del Resultado:** Tratar ganancias y pérdidas con idéntica frialdad emocional.
10. **Ley de la Acción y la Matemática Directa:** Los mercados y los negocios se gobiernan mediante ecuaciones de ingeniería inversa.
        `
      }
    ]
  }
];
