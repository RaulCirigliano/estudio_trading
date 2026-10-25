# CONTEXTO DEL PROYECTO: ESTUDIO TRADING (KNOWLEDGE HUB & WEB)

## 📌 Visión General
Transformar las 41 fuentes del cuaderno de NotebookLM (`📈 Trading`) en:
1. Una **Base de Conocimiento Maestra Unificada** (`docs/knowledge_base.md`).
2. Una **Plataforma Web Educativa y de Consulta Interactiva** (`/web`) con diseño profesional tipo Terminal Financiera.
3. Un **Compilador / Exportador de System Prompts para Gems de IA** (`docs/SYSTEM_PROMPT_GEM.md`).

---

## 🗺️ Las 7 Categorías Oficiales del Cuaderno (Estructura Real)

Según la clasificación orgánica de NotebookLM:

1. **Análisis Técnico**:
   - Atlas Cuantitativo de Velas Japonesas, manuales de patrones técnicos, Ondas de Elliott, soportes/resistencias dinámicos, confluencias de marcos temporales.
2. **Criptomonedas**:
   - Dinámica de criptoactivos, ciclos de mercado, protocolos, spreads, apalancamiento y diferencias operativas vs acciones/futuros.
3. **Desarrollo de Negocios**:
   - El trading concebido como empresa/negocio, estructuración de capital, profesionalización, mentalidad de escalabilidad (Marcos Razzetti, etc.).
4. **Estrategias de Trading**:
   - Setups operativos completos paso a paso: Setup Nasdaq Araujo (VWAP + rupturas), Hyenuk Chu (20 años de lecciones), cruces de medias, Trailing Trend Runners.
5. **Gestión de Riesgo**:
   - Preservación de capital, dimensionamiento matemático de lotaje, reglas de apalancamiento vs distancia SL, control de drawdown, reglas de cuentas de fondeo 2026.
6. **Sistemas y Automatización**:
   - Arquitectura del motor algorítmico, telemetría, APIs (CCXT, brokers), scanners en tiempo real, fórmulas cuantitativas (ATR, RSI, comisiones round-trip).
7. **Testimonios y Experiencias**:
   - Sabiduría de operadores legendarios de Wall Street (ex-traders de Goldman Sachs, Einstein de Wall Street, multimillonarios), trampas de manipulación institucional, lecciones de vida y psicología de trinchera.

---

## 🎨 Arquitectura de la Plataforma Web (`/web`)
- **Estilo visual**: Terminal profesional oscura (Dark slate/zinc, acentos emerald/rose/cyan, tipografía de alta legibilidad técnica).
- **Navegación**: Menú lateral acorde a las 7 categorías, buscador en tiempo real, tarjetas de axiomas y reglas IF/THEN.
- **Herramientas interactivas**: Calculadora de riesgo/lotaje, simulador de Breakeven con comisiones y generador de prompts para Gems.
- **Puerto local asignado**: `8550` (según `REGISTRO_PUERTOS.md`).

---

## 📁 Estructura del Repositorio
```
estudio_trading/
├── CONTEXTO.md
├── extracciones/
│   ├── 01_analisis_tecnico.md
│   ├── 02_criptomonedas.md
│   ├── 03_desarrollo_negocios.md
│   ├── 04_estrategias_trading.md
│   ├── 05_gestion_riesgo.md
│   ├── 06_sistemas_automatizacion.md
│   └── 07_testimonios_experiencias.md
├── docs/
│   ├── knowledge_base.md
│   └── SYSTEM_PROMPT_GEM.md
└── web/
```

---

## ⏱️ Estado Actual
- **Fase**: Fase 1 (Extracción Modular de las 7 Categorías).
- **Categoría 1 (Análisis Técnico)**: ✅ COMPLETADA Y VERIFICADA (`extracciones/01_analisis_tecnico.md` - 33 KB).
- **Categoría 2 (Criptomonedas)**: ✅ COMPLETADA Y VERIFICADA (`extracciones/02_criptomonedas.md` - 24 KB).
- **Categoría 3 (Desarrollo de Negocios)**: ✅ COMPLETADA Y VERIFICADA (`extracciones/03_desarrollo_negocios.md` - 33 KB: De Operador a CEO de $100k+, Runway de 6-12 meses, rutinas pre/post con framework XDS, mecánica real de piso NYSE con Citadel/Jane Street al 60%, embudos high-ticket y reclutamiento predictivo en 5 pasos).
- **Próximo paso**: Extracción de la **Categoría 4: Estrategias de Trading**.
