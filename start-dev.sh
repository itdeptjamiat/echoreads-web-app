#!/bin/bash

echo "🚀 Starting EchoReads Web Development Server..."
echo "=============================================="

# Check if we're in the correct directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the echoreads-web directory."
    exit 1
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Start the development server
echo "🌐 Starting development server on http://localhost:3000"
echo "Press Ctrl+C to stop the server"
echo ""

npm start
