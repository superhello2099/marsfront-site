# MARSFRONT Website - Claude Documentation

## Project Overview
High-end boutique AI studio website with Mars-themed visualization and luxury positioning.

**Live Site**: https://marsfront.com
**Status**: ✅ Production Ready
**Last Updated**: September 26, 2025

---

## Tech Stack
- **Framework**: Next.js 15.5.4 (App Router)
- **React**: 19.1.0
- **TypeScript**: Yes
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12.23.22
- **Icons**: Lucide React 0.544.0
- **Deployment**: Vercel
- **Node**: 22.x

---

## Project Structure
```
marsfront-site/
├── app/
│   ├── page.tsx          # Main homepage (consolidated)
│   ├── layout.tsx        # Root layout with metadata
│   ├── globals.css       # Global styles
│   └── favicon.ico       # Site icon
├── vercel.json           # Vercel deployment config (CRITICAL)
├── next.config.ts        # Next.js configuration
├── package.json          # Dependencies
├── tailwind.config.ts    # Tailwind configuration
└── DEPLOYMENT_ISSUES.md  # Deployment troubleshooting guide
```

---

## Key Features

### Visual Design
- **Mars-themed 3D orb**: Rotating sphere with dust storm effects
- **Floating particle background**: 15 animated orbs with gradient colors
- **Glass morphism**: Backdrop blur effects throughout
- **Responsive design**: Mobile-first approach

### Content Strategy
- **Positioning**: "AI Intelligence Crafted to Perfection"
- **Tone**: High-end, luxury, boutique studio
- **Messaging**: "Architects of Digital Consciousness"
- **Location**: New York (not San Francisco)
- **Copyright**: 2025 Marsfront Studio

### Technical Implementation
- **Static Generation**: All pages pre-rendered
- **Performance**: 154KB homepage, optimized assets
- **SEO**: Proper meta tags and structured content
- **Animations**: Smooth scroll effects and hover interactions

---

## Development Commands

### Local Development
```bash
npm run dev          # Start development server (with Turbopack)
npm run build        # Create production build
npm start           # Start production server
npm run lint        # Run ESLint
```

### Deployment
```bash
npx vercel --prod --yes                           # Deploy to production
npx vercel alias [deployment-url] marsfront.com   # Update domain alias
npx vercel inspect [deployment-url] --logs        # Check deployment logs
```

---

## Critical Configuration Files

### vercel.json (ESSENTIAL)
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```
**⚠️ This file is CRITICAL for proper Vercel deployment**

### next.config.ts
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
```

---

## Content Guidelines

### Brand Voice
- **Tone**: Sophisticated, confident, mystical
- **Avoid**: Technical jargon, casual language, specific metrics
- **Emphasize**: Craftsmanship, excellence, vision

### Copy Standards
- Use "we" not "I"
- Focus on outcomes, not process
- No mention of team size or founding dates
- Email: hello@marsfront.com

### Visual Standards
- **Primary Colors**: Blue (#3B82F6), Purple (#8B5CF6), Cyan (#06B6D4)
- **Mars Theme**: Orange/red gradients, dust particles
- **Typography**: Geist font family
- **Spacing**: Generous whitespace, centered layouts

---

## Deployment History & Issues

### Major Milestones
1. **Initial Setup**: Next.js 15 + React 19 foundation
2. **Content Evolution**: Enterprise → Boutique positioning
3. **Visual Evolution**: Terminal → Gradient → Cube → Glass → Mars orb
4. **Deployment Crisis**: 404 errors resolved with vercel.json
5. **Production Launch**: September 26, 2025

### Critical Issue: Vercel 404 Resolution
**Problem**: Website built successfully but returned 404 on production
**Solution**: Added explicit `vercel.json` configuration
**Root Cause**: Vercel couldn't auto-detect Next.js App Router setup
**Prevention**: Always include vercel.json for Next.js projects

See `DEPLOYMENT_ISSUES.md` for complete troubleshooting guide.

---

## Performance Metrics
- **Homepage Size**: 52 kB (154 kB with JS)
- **Build Time**: ~30 seconds on Vercel
- **Lighthouse Score**: Optimized for performance
- **Core Web Vitals**: Meeting standards

---

## Dependencies

### Core
- next: 15.5.4
- react: 19.1.0
- typescript: ^5
- framer-motion: ^12.23.22
- lucide-react: ^0.544.0

### Development
- tailwindcss: ^4
- eslint: ^9
- @types/node: ^20
- @types/react: ^19

---

## Troubleshooting

### Common Issues

1. **404 on Deployment**
   - Ensure `vercel.json` exists with correct configuration
   - Check that `app/page.tsx` exports default function
   - Verify build completes without errors locally

2. **Build Errors**
   - Clear `.next` directory: `rm -rf .next`
   - Check for TypeScript errors: `npm run build`
   - Verify all imports resolve correctly

3. **Animation Issues**
   - Ensure Framer Motion is properly imported
   - Check for hydration mismatches with `suppressHydrationWarning`

4. **Image Loading**
   - Verify `next.config.ts` has correct `remotePatterns`
   - Use Next.js Image component for optimization

---

## Future Development Notes

### Completed Features
- ✅ Mars-themed visual design
- ✅ High-end luxury copy
- ✅ Responsive layout
- ✅ Performance optimization
- ✅ Production deployment

### Maintenance Tasks
- Monitor Vercel deployment status
- Update dependencies quarterly
- Review content for accuracy
- Test cross-browser compatibility

### Never Do
- ❌ Remove vercel.json file
- ❌ Add specific founding dates
- ❌ Mention team size or Claude Code
- ❌ Change domain from marsfront.com
- ❌ Alter core Mars theme

---

## Contact & Support
- **Domain**: marsfront.com
- **Email**: hello@marsfront.com
- **Repository**: superhello2099/marsfront-site
- **Deployment**: Vercel (automatic from main branch)

---

*Last updated by Claude on September 26, 2025*
*For deployment issues, see DEPLOYMENT_ISSUES.md*