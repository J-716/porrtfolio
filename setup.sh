#!/bin/bash

# J Designs Portfolio Setup Script
# This script sets up the development environment for the J Designs portfolio

set -e

echo "🚀 Setting up J Designs Portfolio..."

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "❌ pnpm is not installed. Please install pnpm first:"
    echo "npm install -g pnpm"
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first:"
    echo "https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Prerequisites check passed"

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

# Create environment file if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating environment file..."
    cp env.example .env.local
    echo "⚠️  Please update .env.local with your Resend API key"
fi

# Create public directories
echo "📁 Creating public directories..."
mkdir -p public/images/projects
mkdir -p public/images/og

# Create placeholder images info
echo "🖼️  Setting up image placeholders..."
cat > public/images/projects/README.md << 'EOF'
# Project Images

Place your project images here. See the placeholder.md file for specifications.

Required images:
- ecommerce-platform.jpg
- mobile-banking.jpg
- brand-identity.jpg
- saas-dashboard.jpg
- restaurant-website.jpg
- fitness-app.jpg
EOF

# Run type check
echo "🔍 Running type check..."
pnpm type-check

# Run linting
echo "🧹 Running linter..."
pnpm lint

echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update .env.local with your Resend API key"
echo "2. Add project images to public/images/projects/"
echo "3. Run 'pnpm dev' to start the development server"
echo "4. Open http://localhost:4321 in your browser"
echo ""
echo "Happy coding! 🎉"

