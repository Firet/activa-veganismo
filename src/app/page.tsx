import React from 'react';
import './styles/navbar.css'; // Asegúrate de que la ruta sea correcta

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <nav className="navbar w-full flex justify-between items-center">
        <div className="flex justify-center w-full lg:w-auto">
          <a href="#home">Ser voluntario</a>
          <a href="#about">Donar</a>
          <a href="#contact">Carga tu ONG</a>
          <a href="#about">Quienes somos</a>
        </div>
      </nav>
      <h1 className="page-title">
        App voluntariado vegano
      </h1>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {/* Aquí puedes añadir el contenido principal de la página */}
      </div>
    </main>
  )
}
