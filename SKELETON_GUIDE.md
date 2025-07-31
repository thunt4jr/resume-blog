# Next.js Blog Skeleton - Setup Guide

This is a sanitized skeleton version of a Next.js blog project, designed to be safely shared publicly while maintaining all the structure and functionality of a modern blog.

## 🚀 Quick Start

1. **Clone or download this skeleton**
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 📁 Project Structure

```
th-resume-blog-skeleton/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── blog/              # Blog pages
│   │   │   ├── [slug]/        # Individual blog post pages
│   │   │   └── page.tsx       # Blog listing page
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── not-found.tsx      # 404 page
│   │   ├── robots.ts          # Robots.txt generation
│   │   └── sitemap.ts         # Sitemap generation
│   ├── components/            # Reusable components
│   │   ├── header.tsx         # Navigation header
│   │   ├── footer.tsx         # Site footer
│   │   ├── theme-provider.tsx # Theme context
│   │   └── theme-toggle.tsx   # Dark/light mode toggle
│   └── lib/                   # Utilities and data
│       ├── blog-data.ts       # Blog posts data
│       └── utils.ts           # Utility functions
├── public/                    # Static assets
├── package.json              # Dependencies
├── tailwind.config.ts        # Tailwind configuration
├── next.config.ts            # Next.js configuration
└── tsconfig.json             # TypeScript configuration
```

## 🎨 Features Included

### ✅ Core Features
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Dark/Light mode** support
- **Responsive design** for all devices
- **SEO optimization** with meta tags
- **Blog functionality** with categories and tags
- **Contact form** with validation
- **Performance optimized** with Core Web Vitals in mind

### ✅ Pages Included
- **Home page** with featured and recent posts
- **Blog listing** with search and filtering
- **Individual blog posts** with related posts
- **About page** with skills and timeline
- **Contact page** with working form
- **404 page** for missing content

### ✅ Components
- **Responsive header** with mobile menu
- **Footer** with social links
- **Theme toggle** for dark/light mode
- **Blog post cards** with metadata
- **Contact form** with validation states

## 🛠️ Customization Guide

### 1. Update Site Information

**In `src/app/layout.tsx`:**
```typescript
export const metadata: Metadata = {
  title: {
    default: "Your Blog Name - Your Tagline",
    template: "%s | Your Blog Name",
  },
  description: "Your blog description here",
  // ... update other metadata
}
```

**In `src/components/header.tsx` and `src/components/footer.tsx`:**
- Update site name and branding
- Update social media links
- Customize navigation items

### 2. Add Your Content

**Blog Posts (`src/lib/blog-data.ts`):**
```typescript
export const blogPosts: BlogPost[] = [
  {
    id: "your-post-id",
    title: "Your Post Title",
    excerpt: "Brief description of your post",
    content: `<h2>Your HTML content here</h2>`,
    category: "Your Category",
    tags: ["tag1", "tag2"],
    publishedAt: "2024-01-01",
    // ... other fields
  },
  // Add more posts
]
```

**About Page (`src/app/about/page.tsx`):**
- Update personal information
- Modify skills and experience
- Customize timeline and values

**Contact Information:**
- Update email addresses in contact page
- Modify social media links
- Customize contact form fields

### 3. Styling Customization

**Colors (`tailwind.config.ts`):**
```typescript
theme: {
  extend: {
    colors: {
      brand: {
        primary: "#your-primary-color",
        dark: "#your-dark-color",
        light: "#your-light-color",
      },
    },
  },
}
```

**Global Styles (`src/app/globals.css`):**
- Modify CSS custom properties for colors
- Update typography settings
- Customize component styles

### 4. SEO Configuration

**Sitemap (`src/app/sitemap.ts`):**
```typescript
const baseUrl = 'https://yourdomain.com' // Update your domain
```

**Robots (`src/app/robots.ts`):**
```typescript
sitemap: 'https://yourdomain.com/sitemap.xml', // Update your domain
```

## 🚀 Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Netlify
1. Build command: `npm run build`
2. Publish directory: `out` (if using static export)
3. Deploy from Git repository

### Other Platforms
- **AWS Amplify**: Configure build settings for Next.js
- **Railway**: Connect GitHub repository
- **DigitalOcean App Platform**: Deploy with git integration

## 📝 Content Management

### Adding New Blog Posts
1. Add new post object to `blogPosts` array in `src/lib/blog-data.ts`
2. Include all required fields (id, title, excerpt, content, etc.)
3. Use HTML for content formatting
4. Add appropriate tags and categories

### Managing Categories and Tags
- Update `categories` array in `src/lib/blog-data.ts`
- Tags are automatically collected from all posts
- Create category-specific pages if needed

### Images and Media
- Place images in `public/images/` directory
- Reference with `/images/filename.jpg` in your content
- Optimize images for web (WebP/AVIF formats recommended)

## 🔧 Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🎯 Performance Tips

1. **Optimize Images**: Use Next.js Image component for automatic optimization
2. **Code Splitting**: Leverage Next.js automatic code splitting
3. **Bundle Analysis**: Run `npm run build` to analyze bundle size
4. **Core Web Vitals**: Monitor performance with built-in optimizations

## 🔒 Security Considerations

- No sensitive data included in this skeleton
- Environment variables should be added to `.env.local`
- API keys and secrets should never be committed to version control
- Use environment variables for production configuration

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev/)

## 🤝 Contributing

This skeleton is designed to be a starting point. Feel free to:
- Add new features and components
- Improve existing functionality
- Share improvements with the community
- Create issues for bugs or suggestions

## 📄 License

This skeleton is provided under the MIT License. Feel free to use it for personal or commercial projects.

---

**Happy blogging!** 🚀

For questions or support, refer to the documentation links above or create an issue in the repository.
