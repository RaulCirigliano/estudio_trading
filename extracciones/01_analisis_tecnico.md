---
exported: 2026-10-25T22:42:48.706Z
source: NotebookLM
type: report
title: "Auditoría Técnica Cuantitativa: Acción del Precio, Chartismo y Ondas de Elliott"
---

# Auditoría Técnica Cuantitativa: Acción del Precio, Chartismo y Ondas de Elliott

Exported at: 25/10/2026, 19:42:48

---

# Reporte Técnico de Auditoría: Acción del Precio, Chartismo Institucional y Confluencia Algorítmica

* * *

### 1\. CATÁLOGO CUANTITATIVO DE VELAS JAPONESAS Y MECÁNICA DE SUBASTA

El análisis técnico cuantitativo de nivel institucional exige evaluar las velas japonesas no como meras figuras geométricas o patrones gráficos aislados, sino como registros contables en tiempo real del flujo de órdenes ejecutado (_order flow_) y la mecánica de subasta de Richard Wyckoff. Cada barra registra la interacción física entre la oferta flotante a mercado y la demanda pasiva o agresiva, reflejando el cumplimiento estricto de las tres leyes fundamentales de Wyckoff: la _Ley de Oferta y Demanda_ (donde la absorción de ventas en niveles clave genera mechas inferiores prominentes), la _Ley de Causa y Efecto_ (donde la acumulación o distribución en rangos de compresión precede a la expansión parabólica del precio), y la _Ley de Esfuerzo versus Resultado_ (anomalías del Análisis de Volumen y Precio o VPA, donde un volumen climático con avance de precio nulo denota absorción o distribución por parte del _Smart Money_).

Para auditar matemáticamente la estructura anatómica de una vela, introducimos el parámetro cuantitativo del **Ratio de Disparidad Cuerpo/Rango (DRDR - Disparity/Range Ratio)**, definido mediante la ecuación formal:

DRDR\=High−Low∣Open−Close∣​

```
Anatomía de Rango y Cuerpo (Métrica DRDR):
+------------------+ <- Máximo (High)
|        |         |
|   +----+----+    | <- Cierre / Apertura (según sesgo)
|   |         |    |
|   | Cuerpo  |    | Rango Total = High - Low
|   |  Real   |    | Cuerpo Real = |Open - Close|
|   +----+----+    |
|        |         | <- Apertura / Cierre
+------------------+ <- Mínimo (Low)
```

Clasificación Anatómica y Métricas Cuantitativas

Formaciones de 1 Vela

-   **Martillo (Hammer):** Formación de giro alcista en suelo tendencial. Exige una restricción anatómica de DRDR≤0.33, situando el cuerpo real en el tercio superior del rango total. Requiere una sombra (mecha) inferior prominente de al menos 2× la longitud del cuerpo real, mientras que la mecha superior debe ser inexistente o estrictamente ≤10% del rango total (High−Low).
-   **Estrella Fugaz (Shooting Star):** Formación de giro bajista en techo. Cumple la restricción DRDR≤0.33, posicionando el cuerpo real en el tercio inferior del rango. La sombra superior mide de 2× a 3× la longitud del cuerpo real, registrando un cierre próximo a los mínimos de la sesión con mecha inferior virtualmente nula (≤10% del rango).
-   **Doji Libélula (Dragonfly Doji):** Estructura de rechazo extremo y absorción compradora en suelo. Su condición matemática cuantitativa exige un filtro extremo de DRDR≤0.05. La apertura y el cierre se ubican en el máximo absoluto de la barra (Open≈Close≈High), proyectando una sombra inferior extremadamente extendida (≥3× la longitud teórica del cuerpo).
-   **Doji Lápida (Gravestone Doji):** Estructura de rechazo bajista y distribución en techo. Sigue la condición matemática DRDR≤0.05, localizando la apertura y el cierre en el mínimo absoluto de la barra (Open≈Close≈Low) con una sombra superior fuertemente extendida (≥3× del cuerpo).
-   **Doji Neutro / Clásico:** Marcador de indecisión y transición de subasta. Cumple estrictamente DRDR≤0.05, situando el punto de apertura y cierre dentro de la franja central del rango total (45% a 55% del rango) con sombras superior e inferior simétricas.

Formaciones de 2 Velas

-   **Envolvente Alcista (Bullish Engulfing):** Patrón de reversión de dos barras en soporte. Requiere que una primera vela de rango estrecho y cuerpo rojo (DRDR1​≤0.50) sea engullida por completo por el cuerpo real de una segunda vela verde expansiva, cumpliendo la condición cuantitativa Cuerpo2​\>Rango1​. La segunda barra abre por debajo o al nivel del cierre previo y cierra holgadamente por encima de la apertura anterior.
-   **Envolvente Bajista (Bearish Engulfing):** Patrón de giro bajista en resistencia. Una primera vela verde de rango contenido (DRDR1​≤0.50) es cubierta en su totalidad por el cuerpo real de una segunda vela roja expansiva (Cuerpo2​\>Rango1​), evidenciando una inyección masiva de oferta a mercado que absorbe la totalidad de la demanda previa.

Formaciones de 3+ Velas

-   **Estrella de la Mañana (Morning Star):** Secuencia de tres velas en suelo: 1) Vela de amplio rango bajista (DRDR1​≥0.60); 2) Vela central de indecisión con compresión de rango (DRDR2​≤0.20, Doji o peonza) con apertura en _gap_ descendente que confirma el secado de la oferta flotante; 3) Vela alcista de amplio rango (DRDR3​≥0.60) que penetra al menos el 50% del cuerpo de la primera vela.
-   **Estrella del Atardecer (Evening Star):** Secuencia de tres velas en techo: 1) Vela alcista de amplio rango (DRDR1​≥0.60); 2) Vela central de compresión (DRDR2​≤0.20) en máximos históricos/locales con fallo de expansión; 3) Vela roja de penetración profunda que cierra por debajo del punto medio (50%) de la primera vela.
-   **Tres Soldados Blancos (Three White Soldiers):** Estructura de tres velas alcistas consecutivas de amplio rango (DRDRi​≥0.70 para i\=1,2,3). Cada barra abre dentro del rango del cuerpo de la vela anterior, marca un nuevo máximo/cierre ascendente y mantiene sombras superiores cortas (≤15% del rango), denotando _momentum_ institucional de compra sin pausas.
-   **Tres Métodos Alcistas (Rising Three Methods):** Estructura de cinco velas: 1) Gran vela verde alcista de rango amplio (DRDR1​≥0.70); 2) Tres velas pequeñas de corrección (generalmente rojas, DRDR≤0.40) contenidas estrictamente dentro del rango de la primera vela con volumen decreciente; 3) Una quinta vela verde expansiva (DRDR5​≥0.70) que abre por encima del cierre previo y marca un nuevo máximo de ruptura.

Contexto de Mercado y Confirmación Institucional

Ningún patrón de velas posee validez estadística operativa si se analiza fuera de su contexto macroestructural. Para su validación cuantitativa, se exige la confluencia simultánea de tres filtros:

1.  **Niveles Estáticos y Dinámicos de Liquidez:** Localización directa en Soportes/Resistencias mayores (Diario/Semanal), testeos a la Media Móvil Exponencial de 20 períodos (EMA 20), la EMA 200, o las bandas de desviación estándar del VWAP intradiario (±2σ).
2.  **Confirmación de Volumen (VPA):** El Volumen Relativo (RVOL) debe registrar valores RVOL\>1.8 o RVOL\>2.0 respecto a su media móvil simple de 20 sesiones. Las anomalías de esfuerzo frente a resultado deben validar la acumulación o distribución pasiva.
3.  **Confirmación de Cierre de Vela:** La señal se invalida si se ejecuta antes del cierre formal de la barra desencadenante (_trigger_). Para patrones de 1 o 2 velas, se requiere el cierre confirmatorio de la barra subsiguiente por encima o por debajo del extremo del patrón.

Matriz Estadística de Fiabilidad Cuantitativa (Thomas Bulkowski Benchmark)

Síntesis del conjunto de datos empíricos de Thomas Bulkowski sobre más de 4.7 millones de velas analizadas en los mercados NYSE, NASDAQ y futuros regulados:

| Patrón de Velas | Categoría | Frecuencia / Rango | Tasa de Éxito (%) | Movimiento Promedio (%) | Tasa de Falsa Ruptura (%) | Confirmación Exigida | Veredicto Operativo Institucional |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Morning Star | Reversión Alcista | Rango 5 (Común) | 78% | +5.2% en 10 barras | 18% (Muy Bajo) | Moderada | Señal A+ en soporte mayor. R:R excelente. |
| Evening Star | Reversión Bajista | Rango 7 (Frecuente) | 72% | -4.8% en 10 barras | 22% (Bajo) | Moderada | Alta probabilidad en sobrecompra y distribución. |
| Three White Soldiers | Continuación Alcista | Rango 32 (Poco frec.) | 82% | +6.4% posterior | 14% (Muy Bajo) | Baja | Momentum puro. Precaución si RSI > 70. |
| Rising Three Methods | Continuación Alcista | Rango 45 (Raro) | 74% | +4.9% posterior | 20% (Bajo) | Baja | Pullback sano; volumen seco en corrección. |
| Dragonfly Doji | Reversión Alcista | Rango 2 (Muy Común) | 71% | +4.2% posterior | Alto si no hay nivel | Obligatoria | Señal de alta precisión en soportes con RVOL > 2.0. |
| Bullish Engulfing | Reversión Alcista | Rango 2 (Muy Común) | 63% | +4.1% posterior | 28% (Bajo) | Alta (esperar cierre) | Fiable solo si el volumen del 2º cuerpo duplica al 1º. |
| Bearish Engulfing | Reversión Bajista | Rango 3 (Muy Común) | 63% | -4.3% posterior | 28% (Bajo) | Alta (esperar cierre) | Fuerte absorción de oferta. Trampa de toros. |
| Hammer (Martillo) | Reversión Alcista | Rango 1 (Más visto) | 60% | +3.8% posterior | 32% (Medio) | Obligatoria | Falla en rangos sucios; en soporte con volumen es letal. |
| Shooting Star | Reversión Bajista | Rango 4 (Muy Común) | 59% | -3.9% posterior | 35% (Medio) | Obligatoria | Rechazo violento en resistencias o techos históricos. |
| Doji Clásico | Indecisión | Rango 2 (Frecuente) | 51% | Neutral | High (Moneda al aire) | Crítica y Excluyente | No operar de forma aislada. Solo marca transición. |

Invalidación Matemática y Calibración de Riesgo

La parametrización del riesgo en microestructuras de velas es binaria:

-   **Stop Loss (Riesgo):** Colocado fuera del extremo más alejado del patrón incorporando un amortiguador de volatilidad equivalente a 1.5×ATR (Average True Range de 14 períodos). Para un Martillo o Doji Libélula en soporte: SLLong​\=Mıˊnimo del Patroˊn−(1.5×ATR) SLShort​\=Maˊximo del Patroˊn+(1.5×ATR)
-   **Gatillo de Entrada (Trigger):** Se ejecuta únicamente tras la ruptura del máximo (en posiciones largas) o del mínimo (en posiciones cortas) de la vela desencadenante, o tras el cierre formal de la barra de confirmación.

Las microestructuras de velas individuales y patrones multivela se agrupan horizontal y verticalmente a lo largo del tiempo para consolidar las fases macroestructurales del gráfico.

* * *

### 2\. PATRONES CHARTISTAS COMPLEJOS: ESTRUCTURAS DE CAMBIO Y CONTINUIDAD

La geometría chartista macroestructural no responde a líneas dibujadas de forma arbitraria, sino a la representación visual de procesos institucionales prolongados de acumulación, distribución o reacumulación de liquidez según la metodología Wyckoff. Mientras que las velas aisladas registran el flujo de órdenes inmediato, los patrones chartistas delimitan áreas donde las manos fuertes absorben la oferta flotante del mercado (_float_), ejecutan algoritmos de ejecución gradual (TWAP/VWAP) y construyen trampas de liquidez (_Bull & Bear Traps_) diseñadas para barrer el apalancamiento minorista antes de iniciar tendencias expansivas.

Lógica Estructural y Psicología de Mercado

```
Estructura HCH Invertido y Variantes del Hombro Derecho (Fases Wyckoff):
                        Línea de Cuello (Neckline)
                 -------/-------------------------\-------
                /       \                         /       \
               /         \     (Cabeza - Phase C) /         \ (Hombro Derecho - Phase D)
   (Hombro Izq. - Phase A)\           |          /           \  [Variante: Higher Low]
                           \          |         /             \
                            \_________|________/               \___ S2 (Soporte Elevado)
                                 Spring / UTAD
```

Patrones de Cambio de Tendencia (Reversión)

-   **Doble Techo / Doble Suelo:** Representa la incapacidad de la oferta o la demanda para sostener nuevos extremos de precio. En términos de Wyckoff, el primer pico/valle constituye la parada inicial de tendencia (_Buying/Selling Climax_), la corrección intermedia forma la línea de cuello (_Neckline_), y el segundo pico/valle representa la prueba secundaria (_Secondary Test_) o un _Spring/UTAD_ en Fase C. El volumen en la segunda cima/suelo debe mostrar una contracción visible, evidenciando el agotamiento de la contrapartida.
-   **Hombro-Cabeza-Hombro (HCH) e HCH Invertido:** Muestra la transición estructural entre máximos/mínimos crecientes y la pérdida definitiva del flujo de órdenes dominante. Anatómicamente consta de tres picos/valles donde el central (Cabeza) registra el extremo de la subasta.
    -   _Variantes del Hombro Derecho:_
        1.  _Normal:_ El hombro derecho simula la altura del hombro izquierdo, manteniendo simetría temporal y de precio.
        2.  _Elevado (Higher Low en HCH Invertido):_ El hombro derecho marca un mínimo ascendente respecto al hombro izquierdo (Phase D - _Sign of Strength_). Denota una absorción compradora sumamente agresiva que impide que el precio retroceda a la zona de demanda anterior; es la variante con mayor tasa de éxito estadístico.
        3.  _Inclinado / Deprimido (Slanted Neckline):_ La línea de cuello presenta una inclinación a favor de la nueva tendencia (descendente en HCH, ascendente en HCH Invertido), requiriendo validación estricta en el _pullback_.

Patrones de Continuación y Compresión

-   **Triángulos (Simétricos, Ascendentes, Descendentes):** El Triángulo Ascendente refleja acumulación institucional (resistencia horizontal plana de oferta pasiva combinada con mínimos crecientes de demanda agresiva); el Descendente refleja distribución (soporte horizontal plano con máximos decrecientes); el Simétrico representa una compresión simétrica de volatilidad con volumen en secado antes de la expansión.
-   **Banderas (Flags) y Banderines (Pennants):** Estructuras de descanso de corto plazo tras un impulso vertical (_Mástil_). La Bandera canaliza la corrección de forma enmarcada en contra de la tendencia principal con volumen descendente; el Banderín comprime el precio en una pequeña estructura triangular convergente.
-   **Cuñas (Ascendentes / Descendentes):** La Cuña Ascendente (en contextos alcistas o bajistas) demuestra pérdida de _momentum_ a medida que el precio marca nuevos máximos con rangos cada vez más estrechos y volumen decreciente; la Cuña Descendente anticipa una resolución alcista explosiva tras agotar la oferta flotante.
-   **Canales de Regresión:** Estructuras estadísticas dinámicas constituidas por una línea de regresión lineal central y bandas paralelas situadas a ±1.5σ o ±2.0σ de desviación estándar. Delimitan la sobrecompra en el techo del canal o sobreventa en el suelo, permitiendo operar retrocesos a la media dentro de una tendencia institucional estructurada.

Gatillos, Perfil de Volumen y Proyección de Objetivos

-   **Gatillo de Entrada:**
    1.  _Ruptura Directa:_ Entrada a mercado tras el cierre de la vela de ruptura por fuera de la línea de cuello (_Neckline_) o diagonal de compresión, respaldada por un volumen RVOL\>1.8.
    2.  _Ejecución en Pullback / Throwback:_ Entrada en temporalidades menores (LTF: 15m/5m) esperando un retesteo al nivel de la estructura perforada con un volumen en secado absoluto (confirmación de ausencia de contrapartida).
-   **Comportamiento del Volumen:** El ciclo de vida exige un volumen menguante durante la fase de formación o compresión de la figura, seguido por una explosión del volumen (RVOL\>1.8 a 2.5) durante la ruptura efectiva.
-   **Proyección de Targets (Cálculo Matemático Estricto):** El objetivo teórico se proyecta midiendo la altura vertical (H) de la figura. Para líneas de cuello horizontales, H se mide de forma ortogonal. Para líneas de cuello inclinadas (_slanted necklines_), Hslanted​ se calcula proyectando la distancia vertical desde el punto máximo/mínimo del patrón hasta la línea de cuello, y trasladando dicho vector H verticalmente desde el punto exacto de ruptura:

Target Alcista\=Precio de Ruptura+H

Target Bajista\=Precio de Ruptura−H

```
Proyección $H$ para Neckline Inclinada:
        
             /  (Máximo Cabeza)
            /  |
           /   |  Vector H (Medición Vertical)
          /    | 
   ------/-----v----------------- (Neckline Inclinada)
        /       \               /
       /         \             / <- Punto de Ruptura
                  \___________/    |
                                   | Proyección Vertical +H
                                   v
                                [TARGET TP]
```

Niveles de Invalidación

La invalidación técnica de un patrón chartista exige la protección del capital detrás del último pivote de oferta o demanda validado, aplicando siempre la fórmula del amortiguador de volatilidad 1.5×ATR:

-   `**[INVALIDACIÓN ESTRUCTURAL EN HCH / HCH INVERTIDO]**`: SLHCH Invertido​\=Mıˊnimo del Hombro Derecho−(1.5×ATR) SLHCH Tradicional​\=Maˊximo del Hombro Derecho+(1.5×ATR)
-   `**[INVALIDACIÓN ESTRUCTURAL EN TRIÁNGULOS Y BANDERAS]**`: SLLong​\=Mıˊnimo del Aˊpice (Apex) o Uˊltimo Mıˊnimo Relativo−(1.5×ATR) SLShort​\=Maˊximo del Aˊpice (Apex) o Uˊltimo Maˊximo Relativo+(1.5×ATR)
-   `**[INVALIDACIÓN ESTRUCTURAL EN DOBLE TECHO / SUELO]**`: SLDoble Suelo​\=Mıˊnimo del Segundo Valle−(1.5×ATR) SLDoble Techo​\=Maˊximo del Segundo Pico+(1.5×ATR)

Los objetivos derivados de la altura (H) de las estructuras chartistas se alinean habitualmente con los niveles de extensión de la Teoría de Ondas de Elliott.

* * *

### 3\. ONDAS DE ELLIOTT Y CONFLUENCIA MATEMÁTICA FIBONACCI

La Teoría de Ondas de Elliott proporciona el marco direccional macro para modelar la naturaleza fractal de los mercados financieros, cuantificando la psicología colectiva en fases impulsivas (que desplazan el precio a favor de la tendencia institucional) y fases correctivas (que consolidan el movimiento y devuelven el apalancamiento excesivo a niveles de equilibrio).

```
Estructura de Impulso de 5 Ondas y Corrección A-B-C:
      (3) [Extensión 161.8%]
      /\
     /  \    (5) [Extensión 100%]          (B) [Retroceso 50-61.8%]
 (1)/    \   /\                             /\
   /      \(4)\                            /  \
  / (2)    \   \                      (A) /    \ (C) [Extensión 100% de A]
 /__\_______\___\________________________/______\
[Ret. 61.8%] [Ret. 38.2%]
```

Reglas Cardinales de las Ondas de Impulso

Para validar matemáticamente una secuencia motriz o impulsiva de 5 ondas (1−2−3−4−5), se deben cumplir tres reglas inviolables:

1.  **Inviolabilidad de la Onda 2:** La Onda 2 nunca retrocede más del 100% del recorrido del precio de la Onda 1 (Retroceso O2<100% de O1).
2.  **Inviolabilidad de la Onda 3:** La Onda 3 nunca es la más corta en longitud de precio entre las tres ondas motrices (Ondas 1, 3 y 5). Habitualmente es la onda extendida del ciclo.
3.  **Inviolabilidad de la Onda 4:** La Onda 4 nunca solapa ni penetra en el territorio de precio de la Onda 1 (Mıˊnimo O4\>Maˊximo O1 en tendencias alcistas), excepto en diagonales de inicio (_Leading Diagonals_) o de finalización (_Ending Diagonals_) debidamente identificadas.

Arquitectura de las Ondas Correctivas

-   **Zigzags (Estructura 5-3-5):** Correcciones profundas y angulares divididas en tres sub-ondas: Sub-onda A (5 sub-ondas impulsivas), Sub-onda B (3 sub-ondas correctivas) y Sub-onda C (5 sub-ondas impulsivas).
-   **Flats / Planas (Estructura 3-3-5):** Correcciones laterales compuestas por sub-ondas A(3)−B(3)−C(5). Se clasifican en:
    -   _Plana Regular:_ La Onda B retrocede aproximadamente el 100% de la Onda A (90%−105%) y la Onda C termina cerca del origen de A.
    -   _Plana Expandida:_ La Onda B supera el origen de la Onda A (Retroceso\>105% a 138.2%) y la Onda C finaliza más allá del extremo de la Onda A.
    -   _Plana En Carrera (Running Flat):_ La Onda B supera holgadamente el inicio de A pero la Onda C falla en alcanzar el extremo de la Onda A, denotando una fuerza extrema en la tendencia principal.
-   **Triángulos Correctivos (Estructura 3-3-3-3-3):** Patrones de compresión etiquetados como A−B−C−D−E, donde cada sub-onda consta de tres partes correctivas, anticipando el empuje final en la dirección de la tendencia previa.

Matriz de Confluencia Fibonacci

| Onda del Ciclo | Tipo de Ratio Fibonacci | Niveles Primarios | Ratios Secundarios / Extremos | Tolerancia e Invalidador Estructural |
| --- | --- | --- | --- | --- |
| Onda 2 | Retroceso de Onda 1 | 61.8%, 50.0% | 78.6%, 38.2% | Invalida si retrocede ≥100% de O1 |
| Onda 3 | Extensión de Onda 1 | 161.8% de O1 | 261.8%, 200.0% | Invalida si O3 es la onda más corta |
| Onda 4 | Retroceso de Onda 3 | 38.2%, 50.0% | 23.6% | Invalida si solapa la zona de O1 |
| Onda 5 | Extensión de O1-O3 | 61.8% a 100% de O1 | 127.2% de O4 | Falla de O5 si no supera el extremo de O3 |
| Onda A | Retroceso de O5/Impulso | 38.2%, 50.0% | 61.8% | Estructura en 5 sub-ondas (Zigzag) o 3 (Flat) |
| Onda B | Retroceso de Onda A | 50.0%, 61.8% (Zigzag) | 127.2%, 138.2% (Flat Expandida) | Estructura correctiva interna de 3 ondas |
| Onda C | Extensión de Onda A | 100.0% de OA | 161.8%, 127.2% de OA | Debe desarrollar 5 sub-ondas limpias |

Criterios de Finalización de Onda

La confirmación cuantitativa del término de una onda exige una lista de verificación por confluencia:

-   Aparición de un patrón de velas de reversión en temporalidades menores (LTF: 15m/5m) en la zona de giro.
-   Coincidencia en un clúster o zona de confluencia Fibonacci (ej. retroceso del 61.8% de Onda 2 coincidiendo con una extensión 100% de una corrección menor previa).
-   Presencia de **divergencias regulares** en osciladores de _momentum_ (RSI de 14 períodos o MACD 12,26,9) comparando la Onda 3 con la Onda 5.
-   Anomalía de volumen VPA: presencia de volumen climático (agotamiento) o secado absoluto de volumen en el pivote de giro.

Los recuentos macro de Ondas de Elliott deben armonizarse siempre con la estructura de liquidez proveniente de los marcos temporales superiores.

* * *

### 4\. ARQUITECTURA DE CONFLUENCIA MULTITEMPORAL (MTF) Y NIVELES CLAVE

El análisis técnico multitemporal (_Top-Down Multi-Timeframe Analysis_) es el protocolo obligatorio para evitar tomar posiciones en contra del flujo de capital institucional dominante. Un patrón de velas o figura chartista en un gráfico intradiario carece de significación operativa si se ejecuta en oposición directa a un nivel de oferta o demanda de un marco temporal superior.

```
Jerarquía Multitemporal (MTF):
[HTF: Semanal / Diario] -------> Sesgo Direccional Macro (Directional Bias) y Zonas Clave
       |
       v
[ITF: 4 Horas / 1 Hora] --------> Estructura Chartista, Ondas de Elliott y Niveles Dinámicos
       |
       v
[LTF: 15 Min / 5 Min / 1 Min] --> Ejecución de Precision, Gatillo VPA y Stop Loss Ajustado
```

Jerarquía Temporal y Regla Cuantitativa de Fiabilidad

-   **Marcos Temporales Superiores (HTF - Semanal / Diario):** Definen la tendencia estructural macro, identifican las zonas rectoras de acumulación/distribución y establecen el sesgo direccional (_Directional Bias_).
-   **Marcos Temporales Intermedios (ITF - 4 Horas / 1 Hora):** Validan la formación de patrones chartistas complejos y el desarrollo de sub-ondas de Elliott.
-   **Marcos Temporales Menores (LTF - 15 Min / 5 Min / 1 Min):** Ventana de ejecución de precisión, donde se filtran los gatillos de velas japonesas, la absorción VPA y la colocación del Stop Loss.

Regla Cuantitativa de Fiabilidad Fractal

La fiabilidad matemática de una señal técnica escala de forma no lineal según la relación proporcional:

Fiabilidad de la Sen˜al∝Timeframe![](data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"></path></svg>)Download Image​

Una confirmación en el gráfico Diario (Timeframe\=1440 min) posee una fiabilidad matemática exponencialmente mayor que una señal idéntica en un gráfico de 5 minutos (Timeframe\=5 min).

Niveles de Liquidez Estáticos versus Dinámicos

Niveles Estáticos

Pivotes históricos calculados sobre precios de apertura, cierres, máximos y mínimos de temporalidades acumuladas (Niveles Anuales, Mensuales y Semanales), así como bloques de órdenes (_Order Blocks_) donde la oferta o demanda absorbieron el mercado anteriormente.

Niveles Dinámicos

-   **Medias Móviles Exponenciales (EMA 20 / 50 / 200):** La EMA 20 actúa como el consenso de valor a corto plazo; la EMA 50 marca el sesgo de medio plazo; la EMA 200 delimita el régimen de mercado macro (alcista o bajista).
-   **VWAP (Volume-Weighted Average Price):** Representa el precio medio ponderado por volumen transaccionado.
    -   _Reinicio Horario:_ El VWAP diario se reinicia cuantitativamente a las **18:00 NY (6:00 PM EST)** con el inicio de la sesión global de derivados.
    -   _Bandas de Desviación Estándar (_±1σ/±2σ_):_ El 95% de las transacciones intradiarias ocurren dentro de la banda de ±2σ. Tocar la segunda banda (+2σ o −2σ) representa una condición de extrema sobrecompra o sobreventa estadística, donde los patrones de reversión alcanzan su mayor efectividad.

Evaluación de Fuerza Relativa (_Relative Strength Benchmark_)

La Fuerza Relativa cuantifica la capacidad de un activo para superar a su índice de referencia (_benchmark_: S&P 500 / SPX, QQQ o Bitcoin) durante las fases de corrección del mercado.

Metodología de Benchmark Cualitativa y Cuantitativa

Si durante un retroceso del mercado el índice de referencia (S&P 500) cae un −2.0% (o −50 puntos), pero un activo individual (ej. NVDA o MU) únicamente retrocede un −0.3% o se mantiene consolidando lateralmente sobre su EMA 20, el activo exhibe **Fuerza Relativa Alcista**.

Al momento en que el S&P 500 inicia un rebote de +0.5%, el activo con fuerza relativa se expandirá de forma asimétrica +3.0% marcando nuevos máximos. Esta confluencia confirma la acumulación institucional pasiva durante la caída del índice.

Toda esta arquitectura analítica se sintetiza en una matriz de decisiones mecánicas sin espacio para la interpretación emocional.

* * *

### 5\. MATRIZ DE REGLAS ESTRICTAS OPERATIVAS IF / THEN

El objetivo de la matriz _IF / THEN_ es erradicar los sesgos emocionales del operador mediante un protocolo de ejecución mecánico y algorítmico.

| Escenario (#) | Dirección | Condición IF (Patrón + Contexto MTF + Volumen VPA) | Acción THEN (Gatillo de Entrada) | Colocación de Stop Loss | Proyección de Target (Take Profit) | Ratio R:R Mínimo |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Long | Reversión en Soporte HTF: Martillo o Morning Star en Soporte Diario + VWAP en banda −2σ + RVOL>1.8. | Ruptura del máximo de la vela confirmatoria en gráfico de 15M/5M. | SL=Mıˊnimo del Patroˊn−(1.5×ATR) | Resistencia HTF siguiente o VWAP +2σ. | ≥1:2.0 |
| 2 | Long | Continuación de Tendencia: Rising Three Methods o Flag en ITF testeando EMA 20 + Volumen seco en corrección. | Cierre de vela verde de rango amplio superando la bandera/cuña. | SL=Mıˊnimo del Patroˊn−(1.5×ATR) | Extensión 1.618 de Fibonacci del impulso previo. | ≥1:2.0 |
| 3 | Long | Breakout Chartista: Triángulo Ascendente o HCH Invertido con Hombro Derecho Elevado + Ruptura con RVOL>2.0. | Entrada en el Throwback al nivel roto en LTF (5M) con cruce sobre EMA 50. | SL=Lıˊnea de Cuello / Hombro Der.−(1.5×ATR) | Altura H de la figura proyectada desde la ruptura. | ≥1:2.5 |
| 4 | Short | Reversión en Resistencia HTF: Estrella Fugaz o Evening Star en Resistencia Diario + Rechazo en VWAP +2σ + RVOL>1.8. | Perforación del mínimo de la vela confirmatoria en LTF. | SL=Maˊximo del Patroˊn+(1.5×ATR) | Soporte HTF siguiente o VWAP −2σ. | ≥1:2.0 |
| 5 | Short | Continuación Bajista: Bearish Engulfing en ITF tras rebote a la EMA 20/50 + VPA muestra absorción de oferta. | Cierre de la vela envolvente perfore el soporte dinámico en 15M. | SL=Maˊximo de Vela Envolvente+(1.5×ATR) | Retroceso del 100% del impulso o extensión 1.618. | ≥1:2.0 |
| 6 | Short | Breakout de Cambio: Doble Techo o HCH con Hombro Derecho bajo + Ruptura de línea de cuello con volumen climático. | Entrada en el Pullback a la línea de cuello tras confirmación en 5M. | SL=Pivote Hombro Derecho+(1.5×ATR) | Altura H de la figura proyectada hacia abajo. | ≥1:2.0 |

El cumplimiento mecánico de la matriz de ejecución elimina los errores de gestión que conducen a la pérdida acelerada de capital.

* * *

### 6\. AUDITORÍA DE ERRORES CRÍTICOS, TRAMPAS DE LIQUIDEZ Y GESTIÓN DE RIESGO

La preservación del capital a través del control estocástico del riesgo y la eliminación sistemática de errores técnicos es la variable determinante para la supervivencia cuantitativa a largo plazo.

Deconstrucción de Errores Técnicos Fatales

1.  **Operar sin Cierre de Vela:** Ejecutar órdenes de compra o venta mientras la barra temporal continúa en desarrollo. Las instituciones aprovechan la formación intradiaria para generar _fakeouts_, mostrando patrones anatómicos que se evaporan segundos antes del cierre formal.
2.  **Ignorar el Sesgo HTF (Tradear contra la Tendencia Dominante):** Abrir posiciones cortas en LTF basadas en patrones de giro menores mientras la tendencia en el gráfico Diario o Semanal se mantiene en un impulso alcista sobre la EMA 20.
3.  **Caer en Trampas de Liquidez (Bull & Bear Traps):** Comprar rupturas de máximos o vender perforaciones de mínimos sin verificar el perfil de volumen VPA. Las manos fuertes aprovechan los puntos obvios de Stop Loss para inyectar liquidez opuesta y absorber el mercado.
4.  **Sobreoptimización / "Efecto Sastre" (Curve-Fitting) en Backtesting:** Ajustar parámetros de indicadores o medias móviles a datos pasados de forma tan rígida que el sistema se vuelve incapaz de adaptarse a la naturaleza cambiante del _Order Flow_ en vivo.
5.  **Operar en "Tierra de Nadie" (No Man's Land):** Tomar ejecuciones en zonas intermedias de rangos o alejadas de soportes, resistencias, EMAs clave o del VWAP, destruyendo la ventaja estadística del patrón.
6.  **Violación de Asimetría Risk:Reward (**R:R<1:2.0**):** Aceptar operaciones donde el beneficio proyectado no duplica la distancia fija hasta el Stop Loss. Cualquier operación con R:R<1:2.0 debe ser rechazada automáticamente por el motor de ejecución sin excepción.

Filtro Horario y Disciplina Institucional de Sesión

El comportamiento del precio debe filtrarse estrictamente según las ventanas operativas de la rueda bursátil:

-   **Apertura Americana (09:30 - 10:30 EST):** Ventana de alta volatilidad y barridos de liquidez iniciales. Exige esperar la formación y cierre formal de velas de confirmación.
-   **Mediodía / Lunch Lull (12:00 - 13:30 EST):** Fase de volumen bajo y contracción de rango. Los patrones de continuación en este horario suelen fallar por falta de liquidez seguidora.
-   **Power Hour (15:00 - 16:00 EST):** Período de rebalanceo institucional de fondos. Alta probabilidad de continuidad para la sesión subsiguiente si el cierre se produce en los extremos de la barra diaria.

Reglas Matemáticas de Preservación de Capital

La rentabilidad a largo plazo de una terminal cuantitativa no depende de la tasa de aciertos (_Win Rate_), sino de la esperanza matemática del sistema:

Esperanza Matemaˊtica\=(Win Rate×Ganancia Media)−(Loss Rate×Peˊrdida Media)

Calibración y Límites Inviolables de Riesgo

-   **Riesgo Máximo por Operación:** El tamaño de la posición (_Position Sizing_) debe calibrarse algorítmicamente para que la pérdida máxima en caso de salto de Stop Loss sea siempre ≤1% **del capital total de la cuenta** como estándar institucional primario, permitiendo un **límite duro máximo de** 2% para la exposición agregada de la cartera.
-   **Regla Inviolable de Asimetría:** Se rechaza automáticamente cualquier orden cuyo Ratio Riesgo:Beneficio neto sea inferior a 1:2.0.

```
Relación entre Win Rate, R:R y Esperanza Matemática:
+------------+--------------------+-------------------------+
| Win Rate   | Ratio R:R Mínimo   | Esperanza Matemática    |
+------------+--------------------+-------------------------+
| 40%        | 1:2.0              | Positiva +0.20          |
| 50%        | 1:2.0              | Positiva +0.50          |
| 60%        | 1:1.5              | Positiva +0.50          |
| 30%        | 1:1.0              | Negativa -0.40 (QUIEBRA)|
+------------+--------------------+-------------------------+
```

La Adhesión Inflexible a Este Protocolo de Auditoría Técnica, Combinada con la Ejecución Disciplinada de Sus Reglas Algorítmicas, Constituye el Único Mecanismo Sistémico para Garantizar la Preservación del Capital y la Consecución de una Ventaja Cuantitativa Consistente en los Mercados Financieros Internacionales.