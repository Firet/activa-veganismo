import React from 'react';
import './header.css';
import Link from 'next/link';

export default function Header() {
	return (
		<header>
			<nav className="navbar flex flex-col space-evenly items-center">
				<div>
					<a href="#home">Ser voluntario</a>
					<a href="#about">Donar</a>
					<a href="#contact">Carga tu ONG</a>
					<Link href="/quienes-somos">Quienes somos</Link>
				</div>
			</nav>
		</header>
	);
}
