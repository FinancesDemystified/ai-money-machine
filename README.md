# AI Money Machine 💰

> **AI-powered personal finance app specifically designed for recently laid-off individuals who need to access 401K funds strategically while continuing to build wealth through micro-investing and community support.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14+-black)](https://nextjs.org/)
[![Python](https://img.shields.io/badge/Python-3.8+-blue)](https://python.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)](https://typescriptlang.org/)

## 🎯 Purpose & Mission

**Transform unemployment from a financial disaster into an opportunity for continued wealth building.**

This project addresses the critical gap in specialized financial guidance for unemployment scenarios, combining 401K strategy optimization with continued wealth building and emotional support.

### Why This Matters

- **Crisis-First Design**: Immediate value delivery when people need it most
- **Emotional Support**: Human connection during life's most challenging moments  
- **Personalized Guidance**: Tailored advice over generic financial advice
- **Small Actions, Big Impact**: Micro-investing that compounds over time
- **Integrated Approach**: Financial and career guidance working together

## 🚀 Core Features

### 💼 401K Emergency Calculator
- Real-time tax and penalty calculations
- Multiple withdrawal strategies with clear pros/cons
- Personalized recommendations based on financial situation

### 🤖 AI Financial Crisis Coach
- Personalized guidance and emotional support
- Crisis-specific advice for unemployment scenarios
- 24/7 availability with human-like understanding

### 📈 Micro-Investing Platform
- Invest as little as $5 with no minimum balance
- Automated recommendations based on risk tolerance
- Progress tracking with milestone celebrations

### 👥 Community Support Network
- Connect with others in similar situations
- Peer support and shared experiences
- Job search integration with financial planning

### 📊 Unemployment Budgeting Tools
- Specialized for reduced income scenarios
- Integration with job search financial planning
- Re-employment transition support

## 🛠 Tech Stack

### Frontend
- **Next.js 14+** (App Router)
- **Tailwind CSS** + **shadcn/ui** components
- **Zustand** for state management
- **Progressive Web App (PWA)** for mobile access

### Backend
- **Next.js API routes**
- **NeonDB (PostgreSQL)** with **Prisma ORM**
- **Redis** for caching
- **Clerk** for authentication and MFA

### AI/ML Stack
- **Groq LLM API** for personalized guidance
- **Pinecone** vector database
- **LangSmith** prompt management

### Financial Integrations
- **Plaid API** for bank connections
- **Alpha Vantage** market data
- **IEX Cloud** financial data
- **CoinGecko** crypto data

### Infrastructure
- **Vercel** hosting with Edge Network
- **Sentry** monitoring
- **Axiom** logging

## 📁 Project Structure

```
ai-money-machine/
├── 4d-outputs/                    # 4D Product Development Framework outputs
│   └── ai-personal-finance-app/   # Complete PRD and analysis
├── context/                       # Project context and documentation
├── frameworks/                    # Development frameworks and methodologies
├── prompts/                       # AI prompts for 4D framework
├── reddit-mcp/                    # Reddit MCP server for research
├── .gitignore                     # Comprehensive ignore rules
├── DEPLOYMENT_GUIDE.md           # Deployment instructions
└── README.md                     # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- Python 3.8+
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/FinancesDemystified/ai-money-machine.git
   cd ai-money-machine
   ```

2. **Install dependencies**
   ```bash
   # Install Node.js dependencies
   npm install
   
   # Install Python dependencies (for Reddit MCP)
   cd reddit-mcp
   pip install -r requirements.txt
   ```

3. **Environment setup**
   ```bash
   # Copy environment files
   cp .env.example .env.local
   cp reddit-mcp/.env.example reddit-mcp/.env
   
   # Configure your environment variables
   # See DEPLOYMENT_GUIDE.md for detailed setup
   ```

4. **Start development servers**
   ```bash
   # Start Next.js app
   npm run dev
   
   # Start Reddit MCP server (in separate terminal)
   cd reddit-mcp
   python server.py
   ```

## 🧠 4D Product Development Framework

This project includes a comprehensive 4D framework for product development:

### D1: Discovery
- Market research and user persona development
- Problem identification and validation
- Competitive analysis

### D2: Dynamics  
- User journey mapping
- Feature prioritization
- Technical architecture planning

### D3: Difficulty
- Risk assessment and mitigation
- Technical complexity analysis
- Resource planning

### D4: Drive
- Implementation roadmap
- Success metrics and KPIs
- Launch strategy

**Usage**: Run the 4D prompts in sequence to develop any product from concept to launch.

## 📊 Success Metrics

- **User Acquisition**: 100+ users in first month, 500+ by month 3
- **Engagement**: 70% weekly active users, 2+ minutes average session
- **Financial Outcomes**: Average user saves $500+ in 401K penalties
- **Retention**: 60% monthly retention rate
- **Community**: 50%+ of users participate in community features weekly

## 🎯 Target Users

### Sarah, 35, Tech Worker
- Recently laid off from tech company
- $50k in 401K, no emergency fund
- Needs strategic 401K access and continued investing

### Mike, 55, Manufacturing  
- Laid off after 20 years
- $200k in 401K, age discrimination concerns
- Needs to make 401K last until Social Security

### Jessica, 28, Marketing
- Recently laid off, $15k in 401K
- High student debt, optimistic outlook
- Wants to grow wealth quickly while job searching

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

### Reddit MCP Server
The included Reddit MCP server provides research capabilities:
- Get user information and posts
- Analyze subreddit trends
- Research financial topics and user sentiment

## 📚 Documentation

- [Deployment Guide](DEPLOYMENT_GUIDE.md) - Complete setup and deployment instructions
- [4D Framework](frameworks/) - Product development methodology
- [Context Documentation](context/) - Project background and research
- [Prompts](prompts/) - AI prompts for development

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with the 4D Product Development Framework
- Powered by Groq AI and modern web technologies
- Inspired by the need to help people during financial crisis

## 📞 Support

For support, email support@financesdemystified.com or join our community discussions.

---

**Remember**: This isn't just an app—it's a lifeline for people navigating one of life's most challenging financial moments. Every feature, every line of code, every decision should be made with empathy and understanding for those who need it most.

*Built with ❤️ for those who need it most*
