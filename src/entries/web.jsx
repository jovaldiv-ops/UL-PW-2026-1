// src/entries/web.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'

// Opcional: si creas un archivo de estilos general o específico
import './web.css' 

function HolaMundo() {
  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: '2rem' }}>
      <h1 style={{ color: '#4f46e5' }}>¡Hola Mundo desde React! 🚀</h1>
      <p>Esta es mi sub-aplicación desplegada desde <code>src/entries/web.jsx</code>.</p>
    </div>
  )
}

// Buscamos un contenedor en el HTML donde se inyectará esta sub-app
const container = document.getElementById('root')

if (container) {
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <HolaMundo />
    </React.StrictMode>
  )
}