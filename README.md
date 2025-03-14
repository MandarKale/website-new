# Mandar Kale - Personal Website

A professional personal website built with Next.js and Tailwind CSS. This website showcases my portfolio, blog posts, and professional information.

## Features

- ✅ Modern and responsive design
- ✅ Portfolio showcasing projects
- ✅ Blog section displaying Medium posts
- ✅ About page with skills and experience
- ✅ Contact form
- ✅ Dark mode support
- ✅ Built with Next.js and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v16.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/MandarKale/website-new.git
cd website-new
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
website-new/
├── public/            # Static assets (images, favicon, etc.)
├── src/
│   ├── app/           # Next.js 13+ App Router
│   │   ├── about/     # About page
│   │   ├── blog/      # Blog page
│   │   ├── contact/   # Contact page
│   │   ├── portfolio/ # Portfolio page
│   ├── components/    # Reusable components
│   ├── styles/        # Global styles
│   ├── utils/         # Utility functions
│   └── lib/           # Library code
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
└── tailwind.config.js
```

## Deployment

This website can be deployed to various platforms including:

- [Vercel](https://vercel.com/) (recommended for Next.js projects)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

### Deploy to Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/):

1. Create an account on Vercel
2. Install the Vercel CLI: `npm i -g vercel`
3. Run `vercel` from the project root

## Customization

- Update personal information in each page component
- Replace placeholder images with your own in the `/public/images` directory
- Modify color scheme in `tailwind.config.js`
- Update links to your social media profiles in the components

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)