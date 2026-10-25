# CONTEXTO DEL PROYECTO: ESTUDIO TRADING (KNOWLEDGE HUB & WEB)

## 📌 Visión General
Transformar las 41 fuentes del cuaderno de NotebookLM (`📈 Trading`) en:
1. Una **Base de Conocimiento Maestra Unificada** (`docs/knowledge_base.md`).
2. Una **Plataforma Web Educativa y de Consulta Interactiva** (`/web`) con diseño profesional tipo Terminal Financiera.
3. Un **Compilador / Exportador de System Prompts para Gems de IA** (`docs/SYSTEM_PROMPT_GEM.md`).

---

## 🗺️ Las 7 Categorías Oficiales del Cuaderno (Estructura Real)

Según la clasificación orgánica de NotebookLM:

1. **Análisis Técnico** (`extracciones/01_analisis_tecnico.md` - 33 KB):
   - Atlas Cuantitativo de Velas Japonesas, ratios DRDR, Wyckoff, catálogo exhaustivo de velas, benchmark Thomas Bulkowski (4.7M de velas), patrones chartistas complejos, Ondas de Elliott y Fibonacci, confluencia MTF y matriz IF/THEN.
2. **Criptomonedas** (`extracciones/02_criptomonedas.md` - 25 KB):
   - Dinámica 24/7 vs bolsas tradicionales, ciclos de halving, Funding Rates y Open Interest, barrido de liquidez en BTC ($60k con Doji Libélula y confirmación EMA 50 5m), margen aislado vs cruzado, protocolo descendente de 4 pasos e invalidación en 0.75 Fib.
3. **Desarrollo de Negocios** (`extracciones/03_desarrollo_negocios.md` - 33 KB):
   - Transición de Operador a CEO de $100k+, segregación de tesorería y Runway de 6-12 meses, rutinas de pre/post-mercado con framework XDS, mecánica real de piso NYSE con Citadel/Jane Street al 60%, embudos high-ticket y reclutamiento predictivo en 5 pasos.
4. **Estrategias de Trading** (`extracciones/04_estrategias_trading.md` - 27 KB):
   - Protocolo 1D->4H->1H->5M, VWAP +/-2σ, alineación EMA 20/50/200, SPX/QQQ brújula, Fuerza Relativa en semis/IA con MU/NVDA/CoreWeave, casos reales auditados AAPL/MSFT/TSLA/AMZN/BTC, checklist de 5 puntos y 5 vetos de entrada.
5. **Gestión de Riesgo** (`extracciones/05_gestion_riesgo.md` - 23 KB):
   - Ecuación matemática de Position Sizing, apalancamiento como variable dependiente, comisiones round-trip y slippage, tabla de recuperación no lineal, protocolos de Prop Firms y De-risking escalonado, Circuit Breakers automáticos ante 3 pérdidas o FOMC/CPI/NFP.
6. **Sistemas y Automatización** (`extracciones/06_sistemas_automatizacion.md` - 30 KB):
   - Arquitectura desacoplada, ingesta multitemporal y supervisor de IA local (Ollama/DeepSeek) con SLA < 200ms, fórmulas cuantitativas en código (VWAP, ATR Wilder N=14, RSI Wilder N=14), FSM de 6 estados, Breakeven y Trailing Stop dinámico por tramos Fib, solución a `DATABASE_LOCKED` con WAL mode en SQLite.
7. **Testimonios y Experiencias** (`extracciones/07_testimonios_experiencias.md` - 36 KB):
   - Anatomía real del piso NYSE (Alex Ruiz, Peter Tuchman, ICE Chat/Bloomberg, Traffic, Trading Officials y Market Makers), trampas de manipulación de noticias de la Fed, caso Manel e Ivania (247% en concurso crypto), caso Shafi ($5k a $100k), lección Hormosi de $50k, matriz de axiomas y las 10 Leyes Inviolables de los Traders Multimillonarios.

---

## 🎨 Arquitectura de la Plataforma Web (`/web`)
- **Estilo visual**: Terminal profesional oscura (Dark slate/zinc, acentos emerald/rose/cyan, tipografía de alta legibilidad técnica).
- **Navegación**: Menú lateral acorde a las 7 categorías, buscador en tiempo real, tarjetas de axiomas y reglas IF/THEN.
- **Herramientas interactivas**: Calculadora de riesgo/lotaje, simulador de Breakeven con comisiones y generador de prompts para Gems.
- **Puerto local asignado**: `8550` (registrado en `REGISTRO_PUERTOS.md`).

---

## ⏱️ Estado Actual
- **Fase 1 (Extracción Modular)**: ✅ 100% COMPLETADA (7 de 7 categorías extraídas y verificadas; 220 KB totales).
- **Fase 2 (Consolidación)**: Generación del documento maestro `docs/knowledge_base.md` y del `docs/SYSTEM_PROMPT_GEM.md`.
- **Fase 3 (Desarrollo Web)**: Creación de la plataforma web en `web/` con servidor local en puerto 8550.
