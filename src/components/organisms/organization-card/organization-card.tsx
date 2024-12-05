import React from 'react';
import organizations from '../../../constants/organization';
import Image from 'next/image';
import './organization-card.css';

export default function OrganizationCard({ logo = '', name = '', description = '', website = '', instagram = '' }) {
	organizations;

	return (
		<div className='organizations-container'>
			<ul className='organizations-list'>
				<li className="organization-item">
					<div className="image-container">
						<Image
							src={logo}
							alt="Logo de organización"
							className="organization-logo"
							unoptimized
							width={100}
							height={24}
						/>
					</div>
					<h3 className="organization-title">
						{name}
					</h3>
					<p className="organization-description">
						{description}
					</p>
					{website !== '' ? (
						<a
							href={website}
							target="_blank"
							className="organization-link"
						>
							Sitio web
						</a>
					) : (
						''
					)}
					{instagram !== '' ? (
						<a
							href={instagram}
							target="_blank"
						>
							<Image
								src="./instagram.png"
								alt="Dirigite al instagram de {name}"
								unoptimized
								width={24}
								height={24}
							/>
						</a>
					) : (
						''
					)}
				</li>
			</ul>
		</div>
	);
}
