# Google Disco 🪩

Google Disco is a premium, AI-native landing page and blog showcase designed with a retro-inspired Google aesthetic. It highlights the next generation of AI-powered web experiences, including GenTabs, AI-native browsing, and advanced reasoning models.

## 🚀 Key Features

- **Retro-Modern Branding**: A custom "Google Disco" logo using classic serif typography and the signature Google color palette.
- **AI-Native Browsing**: High-fidelity visual showcases of AI-integrated web environments.
- **GenTabs**: A generative UI concept for dynamic, context-aware browser tabs.
- **Premium UI/UX (Pro Max)**: A dark-themed, glassmorphic design with high-contrast text, smooth grids, and sophisticated lighting effects.
- **Responsive Blog Ecosystem**: A multi-page structure including a dynamic blog list and detailed post views.
- **GSAP-Ready**: Built-in hooks for high-performance scroll animations.

## 🛠️ Tech Stack

- **Build Tool**: [Vite 8.0](https://vitejs.dev/)
- **Core**: HTML5, Vanilla JavaScript (ESM)
- **Styling**: Vanilla CSS3 (Custom Design System)
- **Animations**: [GSAP](https://greensock.com/gsap/)
- **Typography**: [Google Fonts](https://fonts.google.com/) (Libre Baskerville, Inter, Outfit)
- **Assets**: Custom-generated 3D conceptual imagery

## 📋 Prerequisites

- **Node.js**: v18.0 or higher
- **npm**: v9.0 or higher (or yarn/pnpm)

## 🏗️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/nivas4506/google-disco.git
cd google-disco
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### 4. Build for Production

```bash
npm run build
```

The production assets will be generated in the `dist/` directory.

## 📂 Architecture

### Directory Structure

```text
├── public/                # Static assets (images, icons, favicon)
│   ├── blog1-3.png        # Blog post feature images
│   ├── hero.png           # Hero section 3D visual
│   ├── logo.png           # Branding assets
│   └── icons.svg          # UI iconography
├── src/
│   ├── assets/            # Component-specific assets
│   ├── main.js            # Entry point for JavaScript logic
│   ├── counter.js         # Interactive demo logic
│   └── style.css          # Core design system and global styles
├── blog.html              # Blog listing page
├── index.html             # Main landing page
├── post.html              # Single blog post template
├── package.json           # Project dependencies and scripts
└── vite.config.js         # Multi-page Vite configuration
```

### Design System (style.css)

The project uses a custom-built design system defined via CSS variables:

- **Colors**: A deep, atmospheric dark theme (`#030303`) with Google-inspired accent colors.
- **Glassmorphism**: Sophisticated semi-transparent cards with `backdrop-filter: blur(12px)`.
- **Typography Hierarchy**:
    - **Branding**: `Libre Baskerville` (Serif)
    - **Headings**: `Outfit` (Modern Sans)
    - **Body**: `Inter` (UI-optimized Sans)
- **Grid Layouts**: Flexible 12-column and 2-column grid systems optimized for high-resolution displays.

## 🚀 Deployment

The project is optimized for deployment on modern edge platforms like **Vercel**, **Netlify**, or **GitHub Pages**.

### Deploying to Vercel

```bash
npm install -g vercel
vercel
```

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ for the future of AI browsing.
