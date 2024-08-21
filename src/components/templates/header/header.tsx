'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './header.css';

export default function Header() {
	return (
		<header>
			<div className="image-container">
				<Image
					src='./activa-veganismo.png'
					alt="Logo activá veganismo"
					unoptimized
					width={125}
					height={125}
				/>
			</div>
			<nav className="navbar flex flex-row justify-around items-center">
				<Link href="/">Inicio</Link>
				<Link href="/donar">Donar</Link>
				<Link href="/cargar-ong">Cargá tu ONG</Link>
				<Link href="/quienes-somos">Quienes somos</Link>
			</nav>
		</header>
	);
}
