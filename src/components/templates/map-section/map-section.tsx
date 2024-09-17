import React from 'react';
import DynamicOpenStreetMap from '@/components/organisms/openstreetmap/dynamic-openstreetmap';
import './map-section.css';

export default function MapSection() {
	return (
		<section id="map" className="">
			<h1 className="map-section-title">
				Encontrá la organización más cercana a vos!
			</h1>
			<div className="open-street-map-container">
				<DynamicOpenStreetMap />
			</div>
		</section>
	);
}
