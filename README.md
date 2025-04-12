# 🥘 Recipe Explorer

**Recipe Explorer** is a modern web application built with **Next.js**, allowing users to search and explore recipes from various cuisines around the world. The app provides an intuitive interface for searching recipes with filtering options.

---

## 🚀 Features

- 🔍 **Search recipes** by cuisine type and additional filters.
- 🌐 **Server-Side Rendering (SSR)** for faster page loading.
- 📱 **Responsive layout**, optimized for different screen sizes.
- 🎨 **Modern UI**, built with **Tailwind CSS**.
- ⚙️ **Integration with Spoonacular API** to fetch recipe data.
- 🔄 Manage search parameters via **URL** (using `useSearchParams`).
- 🌍 Multi-language interface support (if localization is added).

---

## 🧠 Application Architecture

- Built with **Next.js 13+** and **App Router**.
- **TypeScript** for strict type safety.
- **Tailwind CSS** for styling the user interface.
- **Composables** and **hooks** for managing state and URL parameters.
- **Component-based approach**: the application consists of many small, reusable components.
- **API calls** using environment variables to access the Spoonacular API.

---

## 🏗 Installation and Setup

### ✅ Prerequisites

- Node.js version 16.8 or later
- npm package manager

### 💻 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yatochkaaa/next_nextlevel-food.git
2. Install dependencies:
   ```bash
   npm install
3. Run the project:
   ```bash
   npm run dev

---

## 🚀 Build and Deployment

### Running in Production Mode
1. Build the project:
   ```bash
   npm run build
#### This will generate an optimized production build in the .next folder.

2. Start the application:
   ```bash
   npm start
#### After this, your app will be available at http://localhost:3000 by default. To change the port, use the following command:

---

## 🌐 Configuration

1. API Key: To use the Spoonacular API, you will need to set up an API key.
- Create an account on Spoonacular and get your API key.
- Add the API key to your .env file:
   ``` bash
   NEXT_PUBLIC_API_KEY=your-api-key-here

---

## 📝 Acknowledgments

- **[Spoonacular API](https://spoonacular.com/food-api)** for providing recipe data.
- **[Next.js](https://nextjs.org/)** for the framework.
- **[Tailwind CSS](https://tailwindcss.com/)** for styling.
- **[TypeScript](https://www.typescriptlang.org/)** for static type checking.