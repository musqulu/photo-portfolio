# 📸 Konrad Galan - Photography Portfolio

A minimal, elegant photography portfolio website built with Next.js and Tailwind CSS. Features a clean sidebar navigation and immersive full-screen image viewing experience for Konrad Galan's photography work.

## ✨ Features

- **Minimalist Design**: Clean, professional interface with sidebar navigation
- **Full-Screen Image Viewer**: Distraction-free photo viewing with black background
- **Keyboard Navigation**: Navigate through images with arrow keys (← / →)
- **Responsive Layout**: Mobile-friendly with slide-out sidebar menu
- **Image Counter**: Track your position in the gallery
- **Info Panel**: Toggle image information with the INFO button or 'I' key
- **Performance Optimized**: Built with Next.js 15 and React 18
- **TypeScript**: Full type safety throughout the codebase
- **Tailwind CSS**: Utility-first styling for rapid development

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd photo_portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
photo_portfolio/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx            # Root layout with sidebar
│   └── page.tsx              # Homepage with ImageViewer
├── components/
│   ├── ImageViewer.tsx       # Full-screen image viewer with navigation
│   └── Sidebar.tsx           # Left sidebar navigation
├── public/                   # Static assets (add your images here)
├── next.config.js            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies
```

## ⌨️ Keyboard Shortcuts

- **Arrow Right (→)**: Next image
- **Arrow Left (←)**: Previous image
- **I**: Toggle image information panel

## 🎨 Customization

### Projects

The portfolio currently features three main projects:
- **Homeoffice** - A project about burnout and productivity culture (2023-2024)
- **Terka** - Documenting self-sufficient lifestyle in the Carpathian Mountains (ongoing)
- **Poles** - Identity study of contemporary Poland (2024)

And one book:
- **Homeoffice - zine** - Self-published work on productivity culture

### Adding Your Photos

Replace the sample images in `components/ImageViewer.tsx` with your own images:

```typescript
const projects = {
  'homeoffice': [
    { 
      id: 1, 
      src: '/images/your-photo.jpg',  // or use full URL
      title: 'Your Photo Title', 
      info: 'Photo description, year, location, etc.' 
    },
    // Add more images...
  ],
}
```

### Updating Content

- **About page**: Edit `app/about/page.tsx` for the artist statement
- **Bio page**: Edit `app/bio/page.tsx` for education and professional experience
- **Contact**: Update contact details in `app/contact/page.tsx`
- **Projects**: Add or modify projects in `components/ImageViewer.tsx` and `components/Sidebar.tsx`

### Customizing Colors

Edit the colors in `app/globals.css` or use Tailwind classes:

- Sidebar background: Currently `bg-white`, change in `Sidebar.tsx`
- Image viewer background: Currently `bg-black`, change in `ImageViewer.tsx`
- Text colors: Modify Tailwind classes throughout components

## 🛠️ Built With

- [Next.js 15](https://nextjs.org/) - React framework
- [React 18](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Next/Image](https://nextjs.org/docs/app/api-reference/components/image) - Optimized image loading

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🚢 Deployment

### Vercel (Recommended)

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy with one click

### Other Platforms

You can also deploy to:
- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [Digital Ocean](https://www.digitalocean.com/)
- Any platform that supports Node.js

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For any questions or inquiries, reach out at contact@lensphoto.com

---

Made with ❤️ by [Your Name]

