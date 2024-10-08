import React from 'react';
import Image from 'next/image';
import './hero-section.css';

export default function HeroSection() {
	return (
		<section className="hero-section">
			<h1 className="hero-title">
				Sumate a una organización como voluntarie
			</h1>
			<Image
				src="./hero.jpg"
				alt="Voluntarios al aire libre"
				fill={true}
				className="hero-image"
				unoptimized
			/>
		</section>
	);
}
