# VSV Communications Frontend

Modern, responsive frontend for VSV Communications built with React, Vite, and TailwindCSS.

## Features

- 🚀 Built with Vite for lightning-fast development
- 💅 Styled with TailwindCSS for modern, responsive design
- 🎨 3D animations with Three.js and React Three Fiber
- 🖼️ Optimized image loading with lazy loading
- 📱 Mobile-first responsive design
- 🔄 Smooth animations with Framer Motion
- 🎯 Performance optimized with code splitting and lazy loading

## Prerequisites

- Node.js >= 18
- npm >= 9

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
4. Update environment variables in `.env`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
Frontend/
├── public/             # Static files
├── src/
│   ├── assets/        # Images, fonts, etc.
│   ├── components/    # Reusable components
│   ├── config/        # Configuration files
│   ├── context/       # React context providers
│   ├── hooks/         # Custom React hooks
│   ├── pages/         # Page components
│   ├── styles/        # Global styles
│   ├── utils/         # Utility functions
│   ├── App.jsx        # Root component
│   └── main.jsx       # Entry point
├── .env.example       # Example environment variables
├── .gitignore         # Git ignore rules
├── index.html         # HTML template
├── package.json       # Dependencies and scripts
├── postcss.config.js  # PostCSS configuration
├── tailwind.config.js # Tailwind configuration
└── vite.config.js     # Vite configuration
```

## Environment Variables

```env
VITE_API_BASE_URL=http://localhost:8080  # Backend API URL
VITE_NODE_ENV=development                # Environment (development/production)
```

## Production Deployment

1. Update environment variables for production
2. Build the project:
   ```bash
   npm run build
   ```
3. The `dist` folder will contain production-ready files
4. Serve using a static file server

## Performance Optimizations

- Lazy loading of images using `react-lazy-load-image-component`
- Code splitting with React.lazy and Suspense
- Optimized 3D models and textures
- Minified and compressed assets
- Efficient routing with React Router

## Browser Support

- Chrome >= 60
- Firefox >= 60
- Safari >= 12
- Edge >= 79

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

This project is proprietary and confidential.
