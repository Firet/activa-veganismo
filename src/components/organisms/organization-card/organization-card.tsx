import React from 'react';
import organizations from '../../../constants/organization';
import Image from 'next/image';
import './organization-card.css';

export default function OrganizationCard() {
	organizations;

	return (
		<>
			<div className="organizations-container">
				<ul className="organizations-list">
					{organizations.map((organization) => (
						<li key={organization.id} className="organization-item">
							<div className="image-container">
								<Image
									src={organization.logo}
									alt="Logo de organización"
									className="organization-logo"
									unoptimized
									width={100}
									height={24}
								/>
							</div>
							<h3 className="organization-title">
								{organization.name}
							</h3>
							<p className="organization-description">
								{organization.description}
							</p>
							{organization.website !== '' ? (
								<a
									href={organization.website}
									target="_blank"
									className="organization-link"
								>
									Sitio web
								</a>
							) : (
								''
							)}		
							{organization.instagram !== '' ? (
								<a
									href={organization.instagram}
									target="_blank"
								>
									<Image
										src="./instagram.png"
										alt="Dirigite al instagram de {organization.name}"
										unoptimized
										width={24}
										height={24}
									/>
								</a>
							) : (
								''
							)}
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
