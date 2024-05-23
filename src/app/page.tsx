import React from 'react';
import Organization from '@/interfaces/organization';
import Image from "next/image";

export default function Home() {

	const organizations: Organization[] = [
		{
			id: 1,
			name: "Voicot",
			description: "Organización humanitaria que brinda asistencia a personas en situaciones de emergencia.",
			logo: '/voicot.JPG',
			website: "https://www.cruzroja.org.ar/",
			donationUrl: "https://donar.cruzroja.org.ar/",
		},
		{
			id: 2,
			name: "Difusión V",
			description: "Organización que trabaja para defender los derechos de los niños y niñas.",
			logo: '/difu-v.JPG',
			website: "https://www.unicef.org/argentina/",
			donationUrl: "https://www.unicef.org/argentina/donar",
		},
		{
			id: 3,
			name: "Amigues por las calles",
			description: "Organización que trabaja para defender los derechos de los niños y niñas.",
			logo: '/amigues-sin-fondo.png',
			website: "https://www.unicef.org/argentina/",
			donationUrl: "https://www.unicef.org/argentina/donar",
		},
	];

	return (
		<>
			<div className="organizations-container">
				<h2>Organizaciones para donar</h2>
				<ul className="organizations-list">
					{organizations.map((organization) => (
						<li key={organization.id} className="organization-item">
							<Image src={organization.logo} alt="Logo de organizaciones" className="organizations-logo" width={100}
								height={24} />
							<h3>{organization.name}</h3>
							<p>{organization.description}</p>
							<a href={organization.website} target="_blank" className="organization-link">Website</a>
							<a href={organization.donationUrl} target="_blank" className="organization-link">Donar</a>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
