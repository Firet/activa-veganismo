'use client';

import React from 'react';
import HeroSection from '@/components/hero-section/hero-section';
import OrganizationCard from '@/components/organization-card/organization-card';
import Map from '@/components/map/map';

export default function Home() {
	return (
		<>
			<HeroSection />
			<OrganizationCard />
			<Map />
		</>
	);
}
