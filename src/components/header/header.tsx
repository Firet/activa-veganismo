import React from 'react';
import './header.css';

export default function Header() {
    return (
        <header>
            <nav className="navbar w-full flex space-evenly items-center">
                <div className="flex justify-center w-full lg:w-auto">
                    <a href="#home">Ser voluntario</a>
                    <a href="#about">Donar</a>
                    <a href="#contact">Carga tu ONG</a>
                    <a href="#about">Quienes somos</a>
                </div>
            </nav>
        </header>
    );
};
