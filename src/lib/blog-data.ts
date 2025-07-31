export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  readTime: number;
  featured: boolean;
  author: string;
  slug: string;
  metaDescription: string;
  keywords: string[];
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "getting-started-nextjs-blog",
    title: "Getting Started with Next.js Blog Development",
    excerpt:
      "Learn how to build a modern blog with Next.js 15, TypeScript, and Tailwind CSS. This comprehensive guide covers everything from setup to deployment.",
    content: `<h2>Introduction to Next.js Blog Development</h2>

<p>Building a blog with Next.js offers incredible performance benefits and developer experience. In this guide, we'll explore how to create a modern, SEO-optimized blog using the latest web technologies.</p>

<h2>Why Choose Next.js for Your Blog?</h2>

<ul>
<li><strong>Performance:</strong> Static site generation and server-side rendering</li>
<li><strong>SEO:</strong> Built-in optimization features</li>
<li><strong>Developer Experience:</strong> Hot reloading and TypeScript support</li>
<li><strong>Flexibility:</strong> Can be deployed anywhere</li>
</ul>

<h2>Setting Up Your Development Environment</h2>

<p>First, make sure you have Node.js 18+ installed on your system. Then create a new Next.js project:</p>

<pre><code>npx create-next-app@latest my-blog --typescript --tailwind --eslint</code></pre>

<h2>Project Structure</h2>

<p>A well-organized project structure is crucial for maintainability:</p>

<ul>
<li><code>src/app/</code> - Next.js App Router pages</li>
<li><code>src/components/</code> - Reusable React components</li>
<li><code>src/lib/</code> - Utility functions and data</li>
<li><code>public/</code> - Static assets</li>
</ul>

<h2>Creating Your First Blog Post</h2>

<p>Blog posts can be stored as TypeScript objects, Markdown files, or fetched from a headless CMS. For this example, we'll use TypeScript objects for simplicity.</p>

<h2>Styling with Tailwind CSS</h2>

<p>Tailwind CSS provides utility-first styling that's perfect for rapid development. Configure your design system in <code>tailwind.config.ts</code>.</p>

<h2>SEO Optimization</h2>

<p>Next.js provides excellent SEO capabilities out of the box:</p>

<ul>
<li>Meta tags with the Metadata API</li>
<li>Automatic sitemap generation</li>
<li>Structured data support</li>
<li>Image optimization</li>
</ul>

<h2>Deployment Options</h2>

<p>Deploy your blog to various platforms:</p>

<ul>
<li><strong>Vercel:</strong> Zero-configuration deployment</li>
<li><strong>Netlify:</strong> Great for static sites</li>
<li><strong>AWS:</strong> Full control and scalability</li>
</ul>

<h2>Conclusion</h2>

<p>Next.js provides an excellent foundation for building modern blogs. With its performance optimizations, SEO features, and developer experience, you can create a blog that both users and search engines will love.</p>`,
    category: "Web Development",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Blog", "Tutorial"],
    publishedAt: "2024-01-15",
    updatedAt: "2024-01-15",
    readTime: 8,
    featured: true,
    author: "Blog Author",
    slug: "getting-started-nextjs-blog",
    metaDescription:
      "Learn how to build a modern blog with Next.js 15, TypeScript, and Tailwind CSS. Complete guide from setup to deployment.",
    keywords: [
      "Next.js blog",
      "React blog tutorial",
      "TypeScript blog",
      "Tailwind CSS",
      "Static site generation",
      "SEO optimization",
    ],
  },
  {
    id: "typescript-best-practices",
    title: "TypeScript Best Practices for React Applications",
    excerpt:
      "Discover essential TypeScript patterns and practices that will make your React applications more maintainable and type-safe.",
    content: `<h2>Why TypeScript Matters in React Development</h2>

<p>TypeScript brings static typing to JavaScript, catching errors at compile time and improving code quality. When combined with React, it creates a powerful development experience.</p>

<h2>Essential TypeScript Patterns</h2>

<h3>1. Component Props Typing</h3>

<p>Always define interfaces for your component props:</p>

<pre><code>interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export function Button({ children, onClick, variant = 'primary', disabled }: ButtonProps) {
  return (
    &lt;button 
      onClick={onClick} 
      disabled={disabled}
      className={\`btn btn-\${variant}\`}
    &gt;
      {children}
    &lt;/button&gt;
  );
}</code></pre>

<h3>2. State Management</h3>

<p>Use proper typing for useState hooks:</p>

<pre><code>const [user, setUser] = useState&lt;User | null&gt;(null);
const [loading, setLoading] = useState&lt;boolean&gt;(false);
const [posts, setPosts] = useState&lt;BlogPost[]&gt;([]);</code></pre>

<h3>3. Event Handlers</h3>

<p>Type your event handlers correctly:</p>

<pre><code>const handleSubmit = (event: React.FormEvent&lt;HTMLFormElement&gt;) =&gt; {
  event.preventDefault();
  // Handle form submission
};

const handleChange = (event: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; {
  setValue(event.target.value);
};</code></pre>

<h2>Advanced Patterns</h2>

<h3>Generic Components</h3>

<p>Create reusable components with generics:</p>

<pre><code>interface ListProps&lt;T&gt; {
  items: T[];
  renderItem: (item: T) =&gt; React.ReactNode;
  keyExtractor: (item: T) =&gt; string;
}

function List&lt;T&gt;({ items, renderItem, keyExtractor }: ListProps&lt;T&gt;) {
  return (
    &lt;ul&gt;
      {items.map(item =&gt; (
        &lt;li key={keyExtractor(item)}&gt;
          {renderItem(item)}
        &lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}</code></pre>

<h2>Configuration Tips</h2>

<p>Configure TypeScript properly in your <code>tsconfig.json</code>:</p>

<ul>
<li>Enable strict mode</li>
<li>Use path mapping for imports</li>
<li>Configure proper JSX settings</li>
</ul>

<h2>Common Pitfalls to Avoid</h2>

<ul>
<li>Using <code>any</code> type excessively</li>
<li>Not typing component props</li>
<li>Ignoring TypeScript errors</li>
<li>Over-complicating type definitions</li>
</ul>

<h2>Conclusion</h2>

<p>TypeScript significantly improves the React development experience by providing type safety, better IDE support, and catching errors early. Following these best practices will help you build more maintainable applications.</p>`,
    category: "TypeScript",
    tags: ["TypeScript", "React", "Best Practices", "Development", "Type Safety"],
    publishedAt: "2024-01-10",
    updatedAt: "2024-01-10",
    readTime: 6,
    featured: true,
    author: "Blog Author",
    slug: "typescript-best-practices",
    metaDescription:
      "Essential TypeScript patterns and practices for React applications. Learn proper typing, component patterns, and common pitfalls to avoid.",
    keywords: [
      "TypeScript React",
      "React TypeScript patterns",
      "TypeScript best practices",
      "React component typing",
      "TypeScript configuration",
    ],
  },
  {
    id: "tailwind-css-design-system",
    title: "Building a Design System with Tailwind CSS",
    excerpt:
      "Learn how to create a consistent and scalable design system using Tailwind CSS utility classes and custom configurations.",
    content: `<h2>Introduction to Design Systems</h2>

<p>A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build applications. Tailwind CSS provides an excellent foundation for creating design systems.</p>

<h2>Setting Up Your Design System</h2>

<h3>Custom Color Palette</h3>

<p>Define your brand colors in <code>tailwind.config.ts</code>:</p>

<pre><code>module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#3B82F6',
          secondary: '#10B981',
          accent: '#F59E0B',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          // ... more shades
        }
      }
    }
  }
}</code></pre>

<h3>Typography Scale</h3>

<p>Create a consistent typography system:</p>

<pre><code>fontSize: {
  'xs': '0.75rem',
  'sm': '0.875rem',
  'base': '1rem',
  'lg': '1.125rem',
  'xl': '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
}</code></pre>

<h2>Component Patterns</h2>

<h3>Button Component</h3>

<p>Create consistent button styles:</p>

<pre><code>const buttonVariants = {
  primary: 'bg-brand-primary hover:bg-blue-700 text-white',
  secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900',
  outline: 'border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white'
};

const buttonSizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg'
};</code></pre>

<h3>Card Component</h3>

<p>Standardize card layouts:</p>

<pre><code>function Card({ children, className = '' }) {
  return (
    &lt;div className={\`bg-white rounded-lg shadow-md border border-gray-200 \${className}\`}&gt;
      {children}
    &lt;/div&gt;
  );
}</code></pre>

<h2>Spacing and Layout</h2>

<p>Use Tailwind's spacing scale consistently:</p>

<ul>
<li><code>space-y-4</code> for vertical spacing</li>
<li><code>gap-6</code> for grid and flex gaps</li>
<li><code>p-6</code> for padding</li>
<li><code>m-4</code> for margins</li>
</ul>

<h2>Responsive Design</h2>

<p>Implement mobile-first responsive design:</p>

<pre><code>&lt;div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"&gt;
  {/* Content */}
&lt;/div&gt;</code></pre>

<h2>Dark Mode Support</h2>

<p>Add dark mode variants:</p>

<pre><code>&lt;div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"&gt;
  Content that adapts to theme
&lt;/div&gt;</code></pre>

<h2>Documentation</h2>

<p>Document your design system components:</p>

<ul>
<li>Create a style guide</li>
<li>Use Storybook for component documentation</li>
<li>Provide usage examples</li>
<li>Include accessibility guidelines</li>
</ul>

<h2>Best Practices</h2>

<ul>
<li>Use consistent naming conventions</li>
<li>Limit color and spacing options</li>
<li>Create reusable component patterns</li>
<li>Test across different screen sizes</li>
<li>Ensure accessibility compliance</li>
</ul>

<h2>Conclusion</h2>

<p>A well-designed system with Tailwind CSS creates consistency, improves developer productivity, and ensures a cohesive user experience across your application.</p>`,
    category: "Design",
    tags: ["Tailwind CSS", "Design System", "CSS", "UI/UX", "Frontend"],
    publishedAt: "2024-01-05",
    updatedAt: "2024-01-05",
    readTime: 7,
    featured: false,
    author: "Blog Author",
    slug: "tailwind-css-design-system",
    metaDescription:
      "Create a consistent and scalable design system using Tailwind CSS. Learn about color palettes, typography, components, and best practices.",
    keywords: [
      "Tailwind CSS design system",
      "CSS design patterns",
      "UI component library",
      "Tailwind configuration",
      "Design system best practices",
    ],
  },
];

export const categories = ["All", "Web Development", "TypeScript", "Design"];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured);
}

export function getRecentPosts(limit: number = 6): BlogPost[] {
  return blogPosts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

export function getPostsByCategory(category: string): BlogPost[] {
  if (category === "All") return blogPosts;
  return blogPosts.filter((post) => post.category === category);
}

export function getRelatedPosts(
  currentSlug: string,
  category: string,
  limit: number = 3
): BlogPost[] {
  return blogPosts
    .filter((post) => post.category === category && post.slug !== currentSlug)
    .slice(0, limit);
}

export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter((post) => post.tags.includes(tag));
}

export function getAllTags(): string[] {
  const allTags = blogPosts.flatMap((post) => post.tags);
  return [...new Set(allTags)].sort();
}
