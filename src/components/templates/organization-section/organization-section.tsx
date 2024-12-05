import React from 'react';
import OrganizationCard from '@/components/organisms/organization-card/organization-card';
import organizations from '../../../constants/organization';


export default function OrganizationSection() {
	organizations;

	return (
		<section id="organizations" className="flex flex-col items-center">
			<h1 className="organizations-main-title">
				¿Con cuál organización te identificás más?
			</h1>
			{organizations.map((organization) =>
				<OrganizationCard
					key={organization.id}
					logo={organization.logo}
					name={organization.name}
					description={organization.description}
					website={organization.website}
					instagram={organization.website}
				/>)}
		</section>
	);
}
