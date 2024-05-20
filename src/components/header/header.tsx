import React from 'react';
import './header.css';

const Header = () => {
    return (
        <nav className="navbar w-full flex justify-between items-center">
            <div className="flex justify-center w-full lg:w-auto">
                <a href="#home">Ser voluntario</a>
                <a href="#about">Donar</a>
                <a href="#contact">Carga tu ONG</a>
                <a href="#about">Quienes somos</a>
            </div>
        </nav>
    );
};

export default Header;