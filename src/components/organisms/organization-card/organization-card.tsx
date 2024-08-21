import React from 'react';
import organizations from '../../../constants/organization';
import Image from 'next/image';
import './organization-card.css';

export default function OrganizationCard() {
	organizations;

	return (
		<>
			<div className="organizations-container">
				<h2>Organizaciones para donar</h2>
				<ul className="organizations-list">
					{organizations.map((organization) => (
						<li key={organization.id} className="organization-item">
							<div className="image-container">
								<Image
									src={organization.logo}
									alt="Logo de organizaciones"
									className="organization-logo"
									unoptimized
									width={100}
									height={24}
								/>
							</div>
							<h3>{organization.name}</h3>
							<p className="organization-description">
								{organization.description}
							</p>
							<a
								href={organization.website}
								target="_blank"
								className="organization-link"
							>
								Website
							</a>
							<a
								href={organization.donationUrl}
								target="_blank"
								className="organization-link"
							>
								Donar
							</a>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
