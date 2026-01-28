# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Sheeba Siddiqui – Frontend Portfolio

A modern, responsive frontend portfolio showcasing my experience as a Senior Frontend Developer with a focus on performance, clean architecture, and data-driven UI.

This project is built using a production-ready React stack and reflects how I structure, optimize, and ship real-world frontend applications.

---

## Live Demo
Coming soon

---

## Tech Stack

- **React** (Vite)
- **Tailwind CSS** for styling
- **Redux Toolkit** for global UI state
- **GraphQL (Apollo Client)** for data fetching
- **Recharts** for data visualization
- **Modern ES6+ JavaScript**

---

## Key Features

- Responsive, mobile-first design
- Clean component-based architecture
- Experience growth visualization using charts
- Structured professional experience & projects
- Scalable folder structure
- Accessible and performance-conscious UI

---

##  Architectural Decisions

### Why React + Vite?
Fast development server, modern bundling, and excellent developer experience.

### Why Tailwind CSS?
Utility-first styling allows rapid iteration while maintaining consistency and responsiveness.

### Why Redux + GraphQL?
- **GraphQL** handles server-side data requirements efficiently.
- **Redux Toolkit** manages client-side UI state cleanly.
- Clear separation of concerns improves scalability.

### Performance Considerations
- Component memoization
- Code splitting with lazy loading
- Optimized rendering for charts and lists
- Minimal re-renders through clean state management

---

##  Project Structure
src/
├─ components/
├─ data/
├─ pages/
├─ store/
├─ graphql/
├─ styles/
└─ utils/

