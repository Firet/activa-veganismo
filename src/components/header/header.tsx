'use client';

import React from 'react';
import Link from 'next/link';
import './header.css';

export default function Header() {
	return (
		<header>
			<nav className="navbar flex flex-col space-evenly items-center">
				<div>
					<Link href="/">Inicio</Link>
					<a href="#about">Donar</a>
					<Link href="/cargar-ong">Cargá tu ONG</Link>
					<Link href="/quienes-somos">Quienes somos</Link>
				</div>
			</nav>
		</header>
	);
}
