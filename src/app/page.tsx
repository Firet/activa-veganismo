'use client';

import React from 'react';
import HeroSection from '@/components/templates/hero-section/hero-section';
import OrganizationCard from '@/components/organisms/organization-card/organization-card';
import Map from '@/components/organisms/map/map';

export default function Home() {
	return (
		<>
			<HeroSection />
			<OrganizationCard />
			<Map />
		</>
	);
}
