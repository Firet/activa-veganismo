'use client';

import React from 'react';
import HeroSection from '@/components/templates/hero-section/hero-section';
import OrganizationSection from '@/components/templates/organization-section/organization-section';
import AboutUs from '@/components/templates/about-us/about-us';
import MapSection from '@/components/templates/map-section/map-section';

export default function Home() {
	return (
		<>
			<HeroSection />
			<OrganizationSection />
			<AboutUs />
			<MapSection />
		</>
	);
}
