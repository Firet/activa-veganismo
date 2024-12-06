import React from 'react';
import OrganizationCard from '@/components/organisms/organization-card/organization-card';
import organizations from '../../../constants/organization';


export default function OrganizationSection() {
	organizations;

	return (
		<>
			<h1 className="organizations-main-title">
				¿Con cuál organización te identificás más?
			</h1>
			<section id="organizations" className="flex flex-wrap organizations-container">
				{organizations.map((organization) =>
					<OrganizationCard
						key={organization.id}
						logo={organization.logo}
						name={organization.name}
						description={organization.description}
						website={organization.website}
						instagram={organization.instagram}
					/>)}
			</section>
		</>
	);
}
