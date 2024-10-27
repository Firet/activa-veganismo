'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import './header.css';

export default function Header() {
	
    const [menuOpen, setMenuOpen] = useState(false);
	const scrollToSection = (sectionId: string, offset: number = 0) => {
		const section = document.getElementById(sectionId);

		if (section) {
			const position = section.offsetTop + offset;
			window.scrollTo({
				top: position,
				behavior: 'smooth',
			});
		}
	};

	const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const closeMenu = () => {
        setMenuOpen(false);
    }

	return (
		<header>
			<div className="image-container">
				<Image
					src="./activa-veganismo.png"
					alt="Logo activá veganismo"
					unoptimized
					width={125}
					height={125}
					className={'image-logo'}
				/>
			</div>
			<nav className="nav">
				<ul className={`nav-container-links ${menuOpen ? 'open' : ''}`}>
					<li><a onClick={() => { scrollToSection('organizations', -20); closeMenu() }}>Organizaciones</a></li>
					<li><a onClick={() => { scrollToSection('about-us', -30); closeMenu() }}>Quiénes somos</a></li>
					<li><a onClick={() => { scrollToSection('map'); closeMenu() }}>Mapa</a></li>
				</ul>
				<div className='menu-fixed'>
                    <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <svg className={`svg ${menuOpen ? 'open' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path className="line line1" d="M3 6h18"></path>
                            <path className="line line2" d="M3 12h18"></path>
                            <path className="line line3" d="M3 18h18"></path>
                        </svg>
                    </button>
                </div>
			</nav>

		</header>
	);
}
