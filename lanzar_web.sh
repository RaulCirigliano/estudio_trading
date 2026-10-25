#!/usr/bin/env bash
# Script para lanzar la plataforma web de Estudio Trading en el puerto 8550

set -e
PORT=8550
WEB_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/web" && pwd)"

echo "=========================================================="
echo "📈 INICIANDO ESTUDIO TRADING — KNOWLEDGE HUB & CAMPUS WEB"
echo "=========================================================="
echo "Directorio Web: $WEB_DIR"
echo "Puerto Asignado: $PORT (Verificado en REGISTRO_PUERTOS.md)"
echo "----------------------------------------------------------"

# Verificar si el puerto ya está en uso
if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null ; then
    echo "⚠️  El puerto $PORT ya está en uso. Cerrando proceso anterior..."
    fuser -k $PORT/tcp 2>/dev/null || true
    sleep 1
fi

cd "$WEB_DIR"

echo "🚀 Servidor activo en: http://localhost:$PORT"
echo "Para detener el servidor, presiona Ctrl+C"
echo "=========================================================="

# Intentar abrir en navegador predeterminado
if which xdg-open > /dev/null; then
    xdg-open "http://localhost:$PORT" &
elif which google-chrome > /dev/null; then
    google-chrome "http://localhost:$PORT" &
fi

# Iniciar servidor web ligero
python3 -m http.server $PORT
