# Helping Hands Charity Frontend

<div align="center">
  <h1>🤝 Helping Hands Charity Foundation</h1>
  <p><strong>Transform Lives Through Giving</strong></p>
  <p>A comprehensive charity management platform with role-based access control, bilingual support (EN/BN), and modern Next.js architecture.</p>
</div>

## ✨ Features

### 🏗️ Architecture
- **Next.js 14** with App Directory and TypeScript
- **Tailwind CSS** with custom charity design system
- **Responsive Design** - Mobile-first approach
- **Internationalization** - English & Bengali (বাংলা) support
- **SEO Optimized** - Meta tags, Open Graph, structured data
- **Performance** - Image optimization, font loading, caching

### 🎨 Design System
- Custom charity color palette with orange/amber theme
- Shadcn/ui components with charity branding
- Animated counters, floating elements, and smooth transitions
- Accessibility-focused (WCAG 2.1 AA compliant)
- Premium UI/UX with donation-focused CTAs

### 📱 Public Pages
- **Home** - Hero section, impact statistics, programs showcase, testimonials
- **About** - Mission, vision, team, impact metrics, transparency
- **Programs** - Education, healthcare, emergency relief, detailed pages
- **Events** - Public event listings, registration, calendar integration
- **Blog** - Success stories, impact reports, community updates
- **Donate** - Multi-amount options, payment methods, impact calculator
- **Contact** - Contact form, office information, embedded map
- **Stories** - Beneficiary and volunteer impact stories

### 🔐 Role-Based Dashboards
- **Admin Panel** - Full system control, analytics, user management
- **Volunteer Dashboard** - Event registration, hours tracking, achievements
- **Donor Panel** - Donation history, tax receipts, impact tracking
- **Beneficiary Dashboard** - Aid requests, history, family profile

### 🌐 Internationalization
- Next.js i18n routing (`/en`, `/bn`)
- Bilingual content support
- Language toggle component
- RTL support ready
- Localized number and currency formatting

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/sobuj757676-hash/helping-hands-charity-frontend.git
cd helping-hands-charity-frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Open your browser
open http://localhost:3000
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js 14 App Directory
│   ├── (pages)/           # Public pages
│   ├── admin/             # Admin dashboard
│   ├── volunteer/         # Volunteer dashboard
│   ├── donor/             # Donor dashboard
│   ├── beneficiary/       # Beneficiary dashboard
│   ├── auth/              # Authentication pages
│   └── layout.tsx         # Root layout
├── components/
│   ├── ui/                # Reusable UI components
│   ├── layout/            # Header, Footer, Navigation
│   └── i18n/              # Internationalization
├── lib/
│   └── utils.ts           # Utility functions
├── locales/
│   ├── en.ts              # English translations
│   └── bn.ts              # Bengali translations
└── styles/
    └── globals.css        # Global styles and Tailwind
```

## 🎨 Design System

### Colors
```css
--charity-50: #fef7ed    /* Light background */
--charity-500: #ed6b2f   /* Primary brand */
--charity-600: #de5425   /* Hover states */
--charity-900: #7a2f1e   /* Dark text */
```

### Components
- **Button** - Multiple variants (primary, secondary, outline, ghost, glow)
- **Card** - Consistent container with hover effects
- **Badge** - Status indicators and labels
- **Input** - Form inputs with focus states
- **Typography** - Inter font with Bengali support

### Animations
- Fade in/up animations for page load
- Hover effects on cards and buttons
- Pulse glow for donation CTAs
- Counter animations for statistics
- Floating elements for visual interest

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:

```env
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME="Helping Hands Charity"

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# API (when backend is ready)
API_URL=http://localhost:8000
API_KEY=your-api-key

# Authentication (when implemented)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# Database (future)
DATABASE_URL=postgresql://...

# Payment Gateways (future)
STRIPE_SECRET_KEY=sk_...
BKASH_API_KEY=your-bkash-key
NAGAD_API_KEY=your-nagad-key
```

### Tailwind Configuration
Custom charity theme with:
- Brand colors and gradients
- Animation keyframes
- Typography scale
- Responsive breakpoints
- Component utilities

## 📊 Performance

### Optimization Features
- Next.js Image component with lazy loading
- Font optimization with `next/font`
- CSS minification and purging
- Automatic code splitting
- Static asset caching
- Preload critical resources

### Lighthouse Targets
- **Performance**: 90+
- **Accessibility**: 90+
- **Best Practices**: 90+
- **SEO**: 90+

## 🔍 SEO & Meta

### Implemented
- Comprehensive meta tags
- Open Graph for social sharing
- Twitter Card integration
- Structured data (Schema.org)
- Sitemap generation
- Robots.txt configuration
- Multi-language alternate URLs

### Social Media
- Facebook Open Graph
- Twitter Cards with large images
- LinkedIn sharing optimization
- WhatsApp preview support

## 🌍 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Netlify
```bash
# Build command
npm run build

# Publish directory
out
```

### Manual Deployment
```bash
# Build for production
npm run build

# Start production server
npm run start
```

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

### Code Standards
- TypeScript strict mode
- ESLint configuration
- Prettier code formatting
- Semantic commit messages
- Component documentation

## 📋 Roadmap

### Phase 2: Backend Integration
- [ ] API routes and client hooks
- [ ] Authentication with NextAuth.js
- [ ] Database integration (PostgreSQL)
- [ ] Payment gateway integration
- [ ] Real-time notifications
- [ ] File upload handling

### Phase 3: Advanced Features
- [ ] Progressive Web App (PWA)
- [ ] Offline functionality
- [ ] Push notifications
- [ ] Advanced analytics
- [ ] A/B testing framework
- [ ] Multi-tenant support

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- **Email**: developer@helpinghands.org
- **Documentation**: [Wiki](../../wiki)
- **Issues**: [GitHub Issues](../../issues)
- **Discussions**: [GitHub Discussions](../../discussions)

---

<div align="center">
  <p><strong>Built with ❤️ for creating positive change</strong></p>
  <p>© 2025 Helping Hands Charity Foundation</p>
</div>