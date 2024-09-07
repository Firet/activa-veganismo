import React from 'react';
import OrganizationCard from '@/components/organisms/organization-card/organization-card';

export default function OrganizationSection() {
	return (
		<section id="organizations" className="flex flex-col items-center">
			<h1 className="organizations-main-title">
				¿Con cuál organización te identificás más?
			</h1>
			<OrganizationCard />
		</section>
	);
}
