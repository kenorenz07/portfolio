# Keno Renz Bacunawa - Portfolio Website

A modern, creative, and fully responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Modern Design**: Clean, minimal, and elegant UI with glassmorphism effects
- **Fully Responsive**: Optimized for all screen sizes and devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Framer Motion animations throughout
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance**: Built with Next.js 14 App Router for optimal performance
- **Type-Safe**: Written in TypeScript for better development experience

## 🚀 Pages

- **Home**: Hero section with stats and featured projects
- **About**: Professional journey, experience timeline, and skills
- **Projects**: Filterable project showcase
- **Services**: Comprehensive list of offered services
- **Contact**: Contact form with social links

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 📦 Installation

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run the development server**:

   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 🚀 Deploy to Vercel

The easiest way to deploy this portfolio is to use [Vercel](https://vercel.com):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy" and your site will be live!

### Manual Deployment

```bash
npm install -g vercel
vercel
```

## 📁 Project Structure

```
port/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── projects/            # Projects page
│   ├── services/            # Services page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── layout/             # Layout components
│   │   ├── Navbar.tsx      # Navigation bar
│   │   └── Footer.tsx      # Footer
│   └── ui/                 # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Badge.tsx
│       └── SectionHeader.tsx
├── contexts/               # React contexts
│   └── ThemeContext.tsx   # Dark mode context
├── data/                   # Data and configuration
│   └── portfolio-data.ts  # Portfolio content
├── types/                  # TypeScript types
│   └── index.ts
├── public/                 # Static assets
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.mjs        # Next.js configuration
```

## 🎨 Customization

### Update Personal Information

Edit `data/portfolio-data.ts` to update:

- Personal details (name, email, bio)
- Work experience
- Skills
- Projects
- Services
- Social links

### Update Colors

Modify the color scheme in `tailwind.config.ts`:

```ts
colors: {
  primary: {
    // Update these values
    500: '#0ea5e9',
    600: '#0284c7',
    // ...
  },
}
```

### Update Content

- **Homepage**: Edit `app/page.tsx`
- **About Page**: Edit `app/about/page.tsx`
- **Projects**: Edit `app/projects/page.tsx`
- **Services**: Edit `app/services/page.tsx`
- **Contact**: Edit `app/contact/page.tsx`

## 🔧 Environment Variables

For the contact form to work with a real email service (e.g., EmailJS), create a `.env.local` file:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Keno Renz Bacunawa**

- GitHub: [@kenorenz07](https://github.com/kenorenz07)
- LinkedIn: [Keno Renz Bacunawa](https://www.linkedin.com/in/keno-renz-bacunawa-17594323b/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

Built with ❤️ using Next.js and Tailwind CSS
