/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // COLORES PRIMARIOS - DEFINIDOS COMPLETAMENTE
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
          DEFAULT: '#3b82f6', // Color por defecto
        },
        
        // COLORES SECUNDARIOS
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
          DEFAULT: '#64748b',
        },
        
        // COLORES DE ACENTO
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
          DEFAULT: '#f59e0b',
        },
        
        // COLORES DE FONDO PARA MODO OSCURO
        dark: {
          bg: '#111827',
          surface: '#1f2937',
          text: '#f3f4f6',
          border: '#374151',
        }
      },
      
      // EXTENDER OTROS ESTILOS
      backgroundColor: {
        'light': '#f8fafc',
        'dark': '#111827',
      },
      textColor: {
        'light': '#1f2937',
        'dark': '#f3f4f6',
      },
      borderColor: {
        'light': '#e5e7eb',
        'dark': '#374151',
      },
    },
  },
  plugins: [],
}