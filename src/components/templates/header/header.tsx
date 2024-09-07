'use client';

import React from 'react';
import Image from 'next/image';
import './header.css';

export default function Header() {
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

	return (
		<header>
			<div className="image-container">
				<Image
					src="./activa-veganismo.png"
					alt="Logo activá veganismo"
					unoptimized
					width={125}
					height={125}
				/>
			</div>
			<nav className="navbar flex flex-row justify-around items-center">
				<a onClick={() => scrollToSection('organizations', -20)}>
					Organizaciones
				</a>
				<a onClick={() => scrollToSection('about-us', -30)}>
					Quiénes somos
				</a>
				<a onClick={() => scrollToSection('map')}>Mapa</a>
			</nav>
		</header>
	);
}
