# BASE DE CONOCIMIENTO MAESTRA: TRADING INSTITUCIONAL, ACCIÓN DEL PRECIO Y GESTIÓN CUANTITATIVA

> **Documento Fuente Único (Single Source of Truth)** compilado a partir de las 41 fuentes de investigación y las 7 categorías de especialización del cuaderno institucional.

---

## ÍNDICE GENERAL
1. [📈 Categoría 1: Análisis Técnico y Mecánica de Subasta](#1-análisis-técnico-y-mecánica-de-subasta)
2. [🪙 Categoría 2: Criptomonedas y Microestructura de Derivados](#2-criptomonedas-y-microestructura-de-derivados)
3. [💼 Categoría 3: Desarrollo de Negocios y Escalabilidad](#3-desarrollo-de-negocios-y-escalabilidad)
4. [🎯 Categoría 4: Estrategias de Trading y Setups Operativos](#4-estrategias-de-trading-y-setups-operativos)
5. [🛡️ Categoría 5: Gestión de Riesgo y Protocolos de Fondeo](#5-gestión-de-riesgo-y-protocolos-de-fondeo)
6. [⚙️ Categoría 6: Sistemas, Algoritmos y Telemetría](#6-sistemas-algoritmos-y-telemetría)
7. [🏛️ Categoría 7: Testimonios, Experiencias y Leyes de Wall Street](#7-testimonios-experiencias-y-leyes-de-wall-street)

---

# 1. ANÁLISIS TÉCNICO Y MECÁNICA DE SUBASTA

### 1.1 Métrica Cuantitativa DRDR (Disparity/Range Ratio)
Para auditar la anatomía de una vela japonesa sin subjetividad:
\[ \text{DRDR} = \frac{|\text{Open} - \text{Close}|}{\text{High} - \text{Low}} \]
- **Dojis:** $\text{DRDR} \le 0.05$ (Cuerpo $\le 5\%$ del rango total).
- **Martillos / Estrellas Fugaces:** $\text{DRDR} \le 0.33$, cuerpo en el extremo con mecha opuesta $\ge 2\times$ a $3\times$ la longitud del cuerpo y sombra contraria $\le 10\%$.
- **Velas Expansivas (Marubozu / Rupturas):** $\text{DRDR} \ge 0.70$.

### 1.2 Benchmark Estadístico de Thomas Bulkowski (4.7M de Velas)
| Patrón de Velas | Categoría / Sesgo | Tasa de Éxito (%) | Movimiento Promedio | Confirmación Exigida | Veredicto Operativo Institucional |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Three White Soldiers** | Continuación Alcista | **82%** | +6.4% posterior | Baja (Momentum) | Excelente en rupturas; precaución si RSI > 70. |
| **Morning Star** | Reversión Alcista | **78%** | +5.2% en 10 barras | Moderada | Señal A+ en soporte mayor. R:R óptimo. |
| **Rising Three Methods**| Continuación Alcista | **74%** | +4.9% posterior | Baja | Pausa sana de tendencia con volumen seco. |
| **Evening Star** | Reversión Bajista | **72%** | -4.8% en 10 barras | Moderada | Alta probabilidad en techos de canal / distribución. |
| **Dragonfly Doji** | Reversión en Suelo | **71%** | +4.5% en soporte | Obligatoria | Mecha inferior $\ge 3\times$ cuerpo con RVOL > 2.0. |
| **Bullish Engulfing** | Reversión Alcista | **63%** | +4.1% posterior | Alta (esperar cierre) | Fiable solo si el volumen del 2º cuerpo duplica al 1º. |
| **Bearish Engulfing** | Reversión Bajista | **63%** | -4.3% posterior | Alta (esperar cierre) | Fuerte absorción institucional. Trampa de toros. |
| **Hammer (Martillo)** | Reversión Alcista | **60%** | +3.8% posterior | Obligatoria | 32% de falsas rupturas en rangos sin nivel. |
| **Shooting Star** | Reversión Bajista | **59%** | -3.9% posterior | Obligatoria | Rechazo violento en resistencias históricas. |
| **Doji Clásico** | Indecisión | **51%** | Neutral | Crítica y Excluyente | No operar de forma aislada (moneda al aire). |

### 1.3 Patrones Chartistas y Proyección $H$
- **Hombro-Cabeza-Hombro Invertido:** La variante con mayor tasa de éxito es el *Hombro Derecho Elevado (Higher Low)*, que denota absorción compradora prematura (Phase D Wyckoff).
- **Proyección de Objetivos ($H$):** Medición de la altura vertical ortogonal $H$ desde la cabeza a la línea de cuello, proyectada desde el punto de ruptura.
- **Invalidación con Amortiguador ATR:** Stop Loss posicionado tras el pivote estructural sumando/restando $1.5 \times ATR$.

### 1.4 Ondas de Elliott y Fibonacci
- **Regla 1:** Onda 2 jamás retrocede $\ge 100\%$ de Onda 1.
- **Regla 2:** Onda 3 nunca es la más corta en longitud de precio.
- **Regla 3:** Onda 4 nunca solapa el territorio de precio de Onda 1 (salvo en diagonales contractivas).
- **Confluencia Fibonacci:** Retroceso de Onda 2 entre 50% y 61.8%; extensión de Onda 3 a 161.8% o 261.8%; retroceso de Onda 4 a 38.2%.

---

# 2. CRIPTOMONEDAS Y MICROESTRUCTURA DE DERIVADOS

### 2.1 Régimen 24/7 y Gaps de CME
- El mercado spot de cripto no cierra; la ausencia de campana elimina los gaps intradiarios de fin de semana en spot, provocando que los futuros regulados del CME abran los domingos con brechas de liquidez (*CME Gaps*) que el mercado busca rellenar estadísticamente.
- **Ciclos de 4 Años:** Estructurados por el halving de Bitcoin (Acumulación $\rightarrow$ Expansión parabólica $\rightarrow$ Criptoinvierno).

### 2.2 Derivados, Funding Rates y Open Interest
- **Funding Rate Extremadamente Positivo:** Prima excesiva de futuros sobre spot (saturación de largos). Alerta de *long squeeze* inminente.
- **Funding Rate Extremadamente Negativo:** Descuento excesivo de futuros (saturación de cortos). Alerta de *short squeeze* explosivo.
- **Margen Aislado Obligatorio:** En trading algorítmico y cuantitativo se prohíbe el Margen Cruzado para evitar que un evento de Cisne Negro liquide el balance total de la cuenta.

### 2.3 Setup Institucional de Barrido en Bitcoin
- **Caso $60,000 USD:** Barrido de mínimos a $58,800 USD para detonar stops minoristas y generar contrapartida institucional. Formación de *Doji Libélula* con RVOL > 2.0. Gatillo de entrada a $64,200 USD (confirmación en EMA 50 de 5m), SL a $58,800 USD y TP en resistencia de $74,000 USD ($R:R \approx 1:1.81$ estructural).
- **Límite de Invalidad en 0.75 Fibonacci:** En retrocesos de 1H, si el precio perfora y cierra bajo el nivel 0.75 Fib, el setup de continuación se cancela de forma irrevocable.

---

# 3. DESARROLLO DE NEGOCIOS Y ESCALABILIDAD

### 3.1 Las 3 Fases Corporativas (Marco Marcos Razzetti)
1. **Fase Operador ($0 a $30,000/mes):** El fundador opera en las trincheras, ejecuta el trading, el análisis y las ventas. Crecimiento limitado por horas de pantalla.
2. **Fase Manager de Operadores ($30,000 a $100,000/mes):** El éxito depende del liderazgo para delegar tareas en setters, closers, asistentes y analistas de soporte.
3. **Fase Manager de Managers ($100,000+/mes):** Dirección ejecutiva de segundo nivel. Liderar directores de Trading Desk, Captación y Cumplimiento.

### 3.2 Tesorería y Fondo de Maniobra (Runway)
- **Segregación:** Separar con muralla china el capital de trading (*Trading Capital*) de los gastos de infraestructura y salarios corporativos (*Operating Cash Flow*).
- **Runway:** Mantener una reserva de liquidez operativa equivalente a **6 a 12 meses de costes fijos y variables** para amortiguar cualquier racha perdedora (*drawdown*) sin estrés financiero.

### 3.3 Protocolo de Selección de Talento en 5 Pasos
1. Definición de Visión y KPIs antes de buscar.
2. Atracción mediante las 5 Rs (Referidos, Redes, Publicidad, Prospección, Entrevista Grupal).
3. Filtrado por Inteligencia Artificial (descartar candidatos con puntaje < 8/10).
4. Entrevista grupal con votación entre pares: *"¿A quién de esta sala contratarías tú y por qué?"*.
5. Prueba técnica remunerada y verificación de referencias con jefes anteriores.

---

# 4. ESTRATEGIAS DE TRADING Y SETUPS OPERATIVOS

### 4.1 Arquitectura Top-Down 1D $\rightarrow$ 4H $\rightarrow$ 1H $\rightarrow$ 5M
1. **1D (Sesgo Macro):** Localización de niveles clave mayores y velas de absorción.
2. **4H (Estructura BOS):** Confirmación de quiebre de pivotes (*Break of Structure*).
3. **1H (Zona Dorada):** Retroceso en compresión entre niveles 0.50 y 0.75 de Fibonacci.
4. **5M (Gatillo Táctico):** Ruptura y cierre de vela sobre/bajo la EMA 50 con RVOL > 1.8.

### 4.2 Modelo de Fuerza Relativa (Relative Strength)
- **Comparación Punto por Punto:** Durante una corrección donde el SPX cae -50 puntos, si una acción líder (ej. Micron - MU o CoreWeave) cae únicamente -2 puntos, demuestra absorción masiva de oferta por compradores institucionales. En cuanto el SPX rebota +20 puntos, el activo con fuerza relativa se dispara +9 puntos rompiendo su resistencia clave ($472 en MU $\rightarrow$ objetivo $818).

### 4.3 Checklist Pre-Operación de 5 Puntos Inviolables
1. ¿Alineado con la brújula macro del SPX/QQQ y con Fuerza Relativa positiva?
2. ¿Ubicado sobre un nivel clave mayor, EMA 20 o banda VWAP $\pm 2\sigma$?
3. ¿Confirmado por volumen relativo RVOL > 1.8 o anomalía Wyckoff?
4. ¿Asimetría matemática garantizada con R:R $\ge$ 1:2.0?
5. ¿Operación fuera de la ventana del *Lunch Lull* (12:00-13:30 EST) y sin noticias inminentes?

---

# 5. GESTIÓN DE RIESGO Y AUDITORÍA DE CAPITAL

### 5.1 Fórmulas Matemáticas de Riesgo
- **Position Sizing:**
  \[ \text{Lote} = \frac{\text{Capital Total} \times \text{Riesgo \%}}{|\text{Precio Entrada} - \text{Precio Stop Loss}|} \]
- **Apalancamiento Real:** Es una variable dependiente del SL, nunca una elección fija:
  \[ \text{Apalancamiento Demandado} = \frac{\text{Lote (Unidades)} \times \text{Precio Entrada}}{\text{Capital Total}} \]
- **Esperanza Matemática:**
  \[ \text{Esperanza} = (\text{Win Rate} \times \text{Ganancia Media}) - (\text{Loss Rate} \times \text{Pérdida Media}) \]

### 5.2 Matriz No Lineal de Recuperación de Drawdown
| Pérdida de Capital | Ganancia Necesaria para Breakeven | Diagnóstico de Riesgo |
| :--- | :--- | :--- |
| **-5.00%** | **+5.26%** | Manejable bajo operativa estándar. |
| **-10.00%** | **+11.11%** | Activar De-risking al 50%. |
| **-20.00%** | **+25.00%** | Alerta roja institucional. Reducir lote al 25%. |
| **-50.00%** | **+100.00%** | Ruina técnica (requiere duplicar la cuenta remanente). |

### 5.3 Circuit Breakers y De-risking Escalonado
- **Pérdida del 2% diario:** Apagado total del sistema y cancelación de órdenes.
- **3 pérdidas seguidas:** Reducción inmediata del riesgo por orden de 1.0% a 0.50%. Si continúa, a 0.25%.
- **Eventos FOMC / CPI / NFP:** Veto de órdenes 15 min antes y 15 min después.

---

# 6. SISTEMAS, ALGORITMOS Y TELEMETRÍA

### 6.1 Arquitectura Desacoplada e Inteligencia Artificial Local
- **Código Determinista:** Ejecución instantánea, cálculo vectorial de medias, VWAP, ATR, colocación de Stop Loss y gestión de órdenes.
- **IA Local (Ollama, DeepSeek, Qwen):** Auditoría cualitativa pre-mercado, detección de anomalías VPA y evaluación retrospectiva con **SLA de veto < 200 ms** vía API JSON asíncrona.

### 6.2 Solución a Problemas Críticos de Concurrencia
- **Error `DATABASE_LOCKED` en SQLite:**
  ```sql
  PRAGMA journal_mode = WAL;
  PRAGMA synchronous = NORMAL;
  ```
- **Carreras Críticas en Balance:** Bloqueo atómico con `asyncio.Lock` / `Mutex` para asegurar que hilos concurrentes no sobrecomprometan el margen disponible.
- **Descarte de Mensajes Obsoletos (*Drop Stale Ticks*):** Si la latencia del WebSocket o cola de ticks excede los 500 ms con respecto al reloj del sistema, el paquete se descarta para no operar sobre precios extintos.

### 6.3 Algoritmo de Breakeven y Trailing Stop
- **Breakeven:**
  \[ \text{SL}_{\text{BE}} = \text{Precio Entrada} + \text{Comisiones Round-Trip} + \text{Factor Slippage} \]
- **Trailing Stop:** Acompañamiento dinámico tras pivotes estructurales en 5M menos $0.5 \times ATR$ una vez alcanzada la extensión 0.618 de Fibonacci.

---

# 7. TESTIMONIOS, EXPERIENCIAS Y LEYES DE WALL STREET

### 7.1 La Realidad del Piso de la Bolsa de Nueva York (NYSE)
- **Alex Ruiz (Corredor con 2 décadas en el piso):** Las órdenes institucionales no usan indicadores técnicos (0% de uso de RSI o MACD por los corredores). Se comunican por ICE Chat / Bloomberg, se cargan en el software *Traffic*, son aprobadas a viva voz por los *Trading Officials* (chaquetas negras) y subastadas por los *Market Makers* (chaquetas azules: Citadel, Jane Street, Susquehanna) que pueden tomar hasta un 60% del cruce.
- **Segregación Física de Salas:** Las salas de acciones (*stocks*) y de opciones (*derivatives*) están separadas por muros y está prohibido el intercambio de dispositivos para evitar arbitrajes ilegales.
- **La Lección de $50,000 con Alex Hormosi:** No existen secretos ocultos. El éxito proviene de dominar y repetir los fundamentos aburridos con volumen masivo y sin distracciones.

### 7.2 El Decálogo Inviolable de los Traders Multimillonarios
1. **La Ley de la Asimetría Obligatoria ($R:R \ge 1:2.0$):** Ninguna operación se abre si el objetivo no duplica el riesgo asumido.
2. **La Ley del Triángulo de Confluencia Institucional:** Exigir Ubicación + Volumen VPA + Asimetría.
3. **La Ley de la Brújula Macro:** Operar siempre a favor del SPX/QQQ y seleccionar activos con Fuerza Relativa comprobada.
4. **La Ley de la Preparación en 3 Tiempos:** 60-90 min de Pre-Market, disciplina estática durante la sesión y auditoría rigurosa en el Post-Market.
5. **La Ley del Filtro Horario:** Prohibido operar en el *Lunch Lull* (12:00-13:30 EST) y esperar cierres en la apertura americana (09:30-10:30 EST).
6. **La Ley de la Paciencia y la Ejecución Aburrida:** Menos operaciones equivalen a mayor foco cognitivo y consistencia patrimonial.
7. **La Ley de las Pruebas sobre Promesas:** El valor se demuestra mediante números auditados, no con discursos persuasivos.
8. **La Ley de la Responsabilidad del Sistema:** Si una orden falla por ambigüedad, la responsabilidad es del diseñador del sistema.
9. **La Ley del Desapego del Resultado:** Tratar ganancias y pérdidas con idéntica serenidad emocional.
10. **La Ley de la Acción y la Matemática Directa:** Los mercados y los negocios se gobiernan mediante proyecciones numéricas e ingeniería inversa.
