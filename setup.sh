#!/bin/bash

# MindForge MVP Setup Script
# This script helps set up the MindForge 2-hour MVP

echo "🚀 MindForge MVP Setup Script"
echo "=============================="

# Check if we're in the right directory
if [ ! -f "MindForge_MVP_Plan.md" ]; then
    echo "❌ Error: Please run this script from the ai-money-machine directory"
    exit 1
fi

echo "✅ Found MindForge MVP files"

# Create .env file for backend if it doesn't exist
if [ ! -f "mindforge-backend/.env" ]; then
    echo "📝 Creating .env file for backend..."
    cat > mindforge-backend/.env << EOF
# MindForge Backend Environment Variables
# Replace these with your actual values

OPENAI_API_KEY=your_openai_api_key_here
JWT_SECRET_KEY=your_jwt_secret_key_here
DATABASE_URL=sqlite:///./mindforge.db
EOF
    echo "✅ Created mindforge-backend/.env file"
else
    echo "✅ Backend .env file already exists"
fi

# Create .env file for frontend if it doesn't exist
if [ ! -f "mindforge-frontend/.env" ]; then
    echo "📝 Creating .env file for frontend..."
    cat > mindforge-frontend/.env << EOF
# MindForge Frontend Environment Variables
# Replace with your Railway backend URL

REACT_APP_API_URL=http://localhost:8000
EOF
    echo "✅ Created mindforge-frontend/.env file"
else
    echo "✅ Frontend .env file already exists"
fi

echo ""
echo "🎯 Next Steps:"
echo "=============="
echo ""
echo "1. Backend Setup (Railway):"
echo "   - Go to https://railway.app"
echo "   - Create new project from GitHub repo"
echo "   - Select mindforge-backend folder"
echo "   - Set environment variables:"
echo "     - OPENAI_API_KEY=your_actual_key"
echo "     - JWT_SECRET_KEY=your_secret_key"
echo "     - DATABASE_URL=sqlite:///./mindforge.db"
echo ""
echo "2. Frontend Setup (Lovable):"
echo "   - Go to https://lovable.dev"
echo "   - Create new React project"
echo "   - Import mindforge-frontend code"
echo "   - Set environment variable:"
echo "     - REACT_APP_API_URL=https://your-railway-app.railway.app"
echo ""
echo "3. Test the MVP:"
echo "   - Register a new user"
echo "   - Create a mind"
echo "   - Test chat functionality"
echo "   - Add collaborators"
echo "   - Check creator dashboard"
echo ""
echo "📚 For detailed instructions, see DEPLOYMENT_GUIDE.md"
echo ""
echo "🎉 Happy coding! Your MindForge MVP is ready to disrupt Delphi.ai!"
