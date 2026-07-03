# Style-Snap 📸✨

[![React Version](https://img.shields.io/badge/react-v19.2.4-blue.svg?logo=react)](https://react.dev/)
[![Vite Version](https://img.shields.io/badge/vite-v5.4.0-646CFF.svg?logo=vite)](https://vitejs.dev/)
[![Bootstrap Version](https://img.shields.io/badge/bootstrap-v5.3.8-563D7C.svg?logo=bootstrap)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

Style-Snap is a premium, fully-responsive e-commerce web application featuring a modern catalog showcase, user authentication flows, interactive blogs, and elegant styling with custom animations.

---

## ✨ Key Features

* **🛍️ Rich Product Catalog**: Dynamic product discovery, detail viewing, and filtering features.
* **🔑 Built-in Authentication**: Login & Registration flows structured using React Context API for global state management.
* **💎 Premium UI/UX**: Designed using Bootstrap 5 and custom CSS styles featuring smooth transitions and Boxicons integration.
* **⚡ Blazing Fast Performance**: Powered by Vite for instant Hot Module Replacement (HMR) and optimized build assets.
* **📦 Dynamic Routing**: Structured client-side routing implemented using React Router DOM v7.

---

## 🛠️ Technology Stack

| Technology | Purpose | Link |
| :--- | :--- | :--- |
| **React 19** | UI Library & Components | [React](https://react.dev/) |
| **Vite 5** | Build tool & Development server | [Vite](https://vitejs.dev/) |
| **React Router DOM v7** | Declarative routing | [React Router](https://reactrouter.com/) |
| **Bootstrap 5** | Responsive layout & utility classes | [Bootstrap](https://getbootstrap.com/) |
| **Boxicons** | Modern icon set | [Boxicons](https://boxicons.com/) |
| **React-Toastify** | Beautiful toast notifications | [React-Toastify](https://github.com/fkhadra/react-toastify) |

---

## 📂 Directory Structure

```
style-snap/
├── public/                 # Static assets (favicons, manifest files)
├── src/
│   ├── components/         # Reusable UI components (Navbar, Footer, Login, Forms)
│   ├── context/            # AuthContext for global authentication state
│   ├── data/               # Static/Mock data files
│   ├── pages/              # Page level views (Home, Product, Blog, Contact, etc.)
│   ├── routes/             # Route setups & Layout configurations
│   ├── App.jsx             # Main app component
│   ├── index.jsx           # React app entry point
│   ├── App.css             # Custom global styles
│   └── index.css           # CSS base layout config
├── index.html              # HTML Shell
├── vite.config.js          # Vite config
└── package.json            # Scripts & Dependencies
```

---

## 🚀 Getting Started

Follow these steps to run Style-Snap locally:

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open **`http://localhost:5173`** in your browser to view the application.

### 3. Build for Production
```bash
npm run build
```
This generates optimized assets under the `dist/` directory.

---

## 🌐 Deployment (GitHub Pages)

To deploy this project to GitHub Pages:

1. **Commit and Push Changes**:
   ```bash
   git add .
   git commit -m "Configure gh-pages deployment"
   git push origin main
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```


