'use client';

import React from 'react';
import HeroSection from '@/components/templates/hero-section/hero-section';
import OrganizationSection from '@/components/templates/organization-section/organization-section';
import Map from '@/components/organisms/map/map';

export default function Home() {
	return (
		<>
			<HeroSection />
			<OrganizationSection />
			<Map />
		</>
	);
}
