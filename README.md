# Next.js Blog Skeleton

A modern, performant blog skeleton built with Next.js 15, TypeScript, and Tailwind CSS. This project serves as a starting point for creating professional blogs with best practices for SEO, performance, and user experience.

You can see this resume-blog at https://terryhunt.dev

## Features

- ⚡ **Next.js 15** with App Router
- 🎨 **Tailwind CSS** for styling
- 🌙 **Dark/Light mode** support
- 📱 **Fully responsive** design
- 🔍 **SEO optimized** with meta tags and structured data
- 📝 **Blog functionality** with categories and tags
- 🎯 **TypeScript** for type safety
- 🚀 **Performance optimized** with Core Web Vitals in mind
- 📊 **Analytics ready** (Google Analytics integration)
- 🎭 **Framer Motion** for smooth animations
- 📧 **Contact forms** with validation
- 🏗️ **Component-based architecture**

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd nextjs-blog-skeleton
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── blog/              # Blog pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects showcase
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── header.tsx         # Navigation header
│   ├── footer.tsx         # Site footer
│   └── theme-toggle.tsx   # Dark/light mode toggle
├── lib/                   # Utility functions and data
│   ├── blog-data.ts       # Blog posts data
│   ├── projects-data.ts   # Projects data
│   └── utils.ts           # Utility functions
public/                    # Static assets
├── images/               # Image assets
└── favicon.ico           # Site favicon
```

## Customization

### Adding Your Content

1. **Blog Posts**: Edit `src/lib/blog-data.ts` to add your blog posts
2. **Projects**: Edit `src/lib/projects-data.ts` to add your projects
3. **About Page**: Customize `src/app/about/page.tsx` with your information
4. **Contact**: Update contact information in relevant components

### Styling

- **Colors**: Modify the color scheme in `tailwind.config.ts`
- **Typography**: Customize fonts and text styles in `src/app/globals.css`
- **Components**: Update component styles using Tailwind classes

### SEO Configuration

- Update meta tags in each page component
- Modify `src/app/sitemap.ts` for sitemap generation
- Configure `src/app/robots.ts` for search engine crawling

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms

This project can be deployed to any platform that supports Next.js:

- **Netlify**: Use the Next.js build command
- **AWS Amplify**: Configure build settings for Next.js
- **Railway**: Connect your GitHub repository
- **DigitalOcean App Platform**: Deploy with git integration

## Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Your Blog Name
```

For production, set these variables in your deployment platform.

## Performance

This skeleton is optimized for performance:

- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Code Splitting**: Automatic route-based code splitting
- **Bundle Analysis**: Use `npm run build` to analyze bundle size
- **Core Web Vitals**: Optimized for Google's performance metrics

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you find this skeleton helpful, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs via GitHub issues
- 💡 Suggesting new features
- 🤝 Contributing to the codebase

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Animations with [Framer Motion](https://www.framer.com/motion/)

---

**Happy blogging!** 🚀
