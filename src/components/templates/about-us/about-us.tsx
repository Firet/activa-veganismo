import React from 'react';
import './about-us.css';
import Image from 'next/image';

export default function AboutUs() {
	return (
		<section id="about-us" className=" about-us-section">
			<div className="about-us">
				<div className="about-us-image">
					<Image
						src="./about-us.jpg"
						alt="Voluntarios en contraste con el sol"
						className=""
						unoptimized
						width={600}
						height={500}
					/>
				</div>
				<div className="about-us-container">
					<h2 className="about-us-title">
						¿Q
						<span className="border-b-2 border-red-500 border-solid">
							uiénes Somos?
						</span>
					</h2>
					<div className="about-us-info">
						<h2 className="about-us-subtitle">Sobre nosotres</h2>
						<p className="about-us-text">
							Un grupo de gente apasionada con muchas ganas de
							ayudar. Creemos en la liberacion animal y en la
							justicia social. Nuestro objetivo es crear puentes
							entre personas con recursos y ganas de ayudar, con
							espacios que lo necesitan. Queremos despertar
							conciencia social y compromiso en la comunidad,
							buscando siempre el bienestar de quienes más lo
							necesitan. Además, queremos ser el punto de
							referencia para aquellos que quieren involucrarse y
							para las organizaciones que necesitan apoyo,
							ofreciendo un servicio fácil y práctico.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
