'use client';

import React from 'react';
import OrganizationCard from '@/components/organization-card/organization-card';
import Map from '@/components/map/map'

export default function Home() {
	return (
		<>
			<OrganizationCard />
			<Map />
		</>
	);
}
