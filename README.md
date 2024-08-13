# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```


Bgl que já tava criado

export function App() {
  const linkUrlWhatsApp = "https://wa.me/5562981958251"; 
  const buttonTextWhatsApp = "WhatsApp";
  const iconPathWhatsApp = "/styles/icons/icon-whatsapp.png"; 
  const linkUrlLinkedin = "https://www.linkedin.com/in/marcos-gabriel-866182303/";
  const buttonTextLinkedin = "Linkedin"; 
  const iconPathLinkedin = "/styles/icons/icon-linkedin.png"; 

  return (
    <div className="flex justify-center items-center h-screen gap-2">
      <a href={linkUrlWhatsApp} target="_blank" rel="noopener noreferrer">
        <button className="px-4 py-1.5 bg-green-500 text-white rounded flex items-center gap-2 hover:bg-green-700 transition-colors duration-200">
          <img src={iconPathWhatsApp} alt="WhatsApp Icon" className="w-5 h-5" />
          {buttonTextWhatsApp}
        </button>
      </a>
      <a href={linkUrlLinkedin} target="_blank" rel="noopener noreferrer">
        <button className="px-6 py-1.5 bg-blue-500 text-white rounded flex items-center gap-2 hover:bg-blue-700 transition-colors duration-200">
          <img src={iconPathLinkedin} alt="Linkedin" className="w-5 h-5" />
          {buttonTextLinkedin}
        </button>
      </a>
    </div>
  );
}