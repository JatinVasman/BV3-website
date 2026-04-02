#!/bin/bash

# Business Volunteers Website - Setup & Run Guide

echo "🚀 Business Volunteers Website Setup"
echo "======================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo ""

# Navigate to project directory
cd "$(dirname "$0")" || exit

# Install dependencies
echo "📦 Installing dependencies..."
npm install
echo "✅ Dependencies installed"
echo ""

# Check environment variables
if [ ! -f .env.local ]; then
    echo "⚠️  .env.local not found!"
    echo "Creating .env.local..."
    cat > .env.local << EOF
RESEND_API_KEY=re_LL69nLdt_66Hz3NTEjfNcpojsUD4tAT4C
NEXT_PUBLIC_SITE_URL=https://businessvolunteers.online
EOF
    echo "✅ .env.local created with default values"
fi
echo ""

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🎉 Setup complete!"
    echo ""
    echo "To run the development server:"
    echo "  npm run dev"
    echo ""
    echo "To start the production server:"
    echo "  npm start"
    echo ""
    echo "📖 For more information, see README.md"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
