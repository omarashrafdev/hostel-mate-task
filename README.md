# Positivus - Digital Marketing Agency Landing Page

A modern, responsive landing page for Positivus digital marketing agency built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with custom Positivus branding
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Engaging animations powered by Framer Motion
- **Type Safety**: Built with TypeScript for better development experience
- **Component Library**: Uses shadcn/ui components for consistency
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS v4, shadcn/ui components
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd hostel-mate-task
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## 🎨 Design System

### Colors

- **Primary**: #B9FF66 (Bright Green)
- **Secondary**: #F3F3F3 (Light Gray)
- **Dark**: #191A23 (Almost Black)
- **White**: #FFFFFF

### Typography

- **Font Family**: Space Grotesk
- **Desktop**: 60px/45px/30px/20px/18px
- **Mobile**: 43px/36px/26px/18px/16px

## 📱 Sections

1. **Navbar** - Logo, navigation links, and CTA button
2. **Hero** - Main headline with illustration
3. **Companies** - Trusted company logos with luminosity blend
4. **Services** - Six service cards with custom styling
5. **CTA** - Call-to-action section with contact form
6. **Footer** - Contact info, newsletter signup, and social links

## 🚀 Deployment

### Vercel Deployment

The project is configured for automatic deployment to Vercel via GitHub Actions.

#### Setup Instructions:

1. **Create a Vercel account** and connect your GitHub repository
2. **Get your Vercel tokens**:

   - Go to Vercel Dashboard → Settings → Tokens
   - Create a new token and copy it
   - Get your Organization ID and Project ID from your project settings

3. **Add GitHub Secrets**:
   Go to your GitHub repository → Settings → Secrets and variables → Actions

   Add the following secrets:

   - `VERCEL_TOKEN`: Your Vercel token
   - `VERCEL_ORG_ID`: Your Vercel organization ID
   - `VERCEL_PROJECT_ID`: Your Vercel project ID

4. **Deploy**:
   - Push to the `main` branch to trigger automatic deployment
   - Or deploy manually using Vercel CLI:
   ```bash
   npm i -g vercel
   vercel --prod
   ```

#### Vercel Configuration

The project includes a `vercel.json` file with:

- **Build settings**: Vite framework detection
- **Routing**: SPA routing support
- **Security headers**: XSS protection, content type options
- **Caching**: Optimized asset caching

### Manual Deployment

You can also deploy manually:

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/
│   ├── sections/          # Page sections
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Companies.tsx
│   │   ├── Services.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   └── ui/               # Reusable UI components
├── lib/                  # Utility functions
├── pages/               # Page components
├── assets/              # Static assets
└── index.css           # Global styles
```

## 🎯 Key Features Implemented

### Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts and typography scaling

### Custom Components

- Service cards with dynamic backgrounds and styling
- Company logo carousel with luminosity blend effects
- Newsletter subscription with form validation
- Social media icons with hover effects

### Performance Optimizations

- Vite for fast development and optimized builds
- Image optimization and lazy loading
- CSS purging and minification
- Asset caching headers

### Accessibility

- Semantic HTML structure
- Proper ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance

## 🌟 Live Demo

Visit the live demo: [Positivus Landing Page](https://hostel-mate-task.vercel.app)

## 📄 License

This project is created for demonstration purposes.

## 🤝 Contributing

This is a task project, but feel free to suggest improvements via issues.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
