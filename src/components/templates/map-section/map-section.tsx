import React from 'react';
import DynamicOpenStreetMap from '@/components/organisms/openstreetmap/dynamic-openstreetmap';
import './map.css';

export default function MapSection() {
	return (
		<section id="map" className="">
			<h1 className="map-title">
				Encontrá la organización más cercana a vos!
			</h1>
			<DynamicOpenStreetMap/>
		</section>
	);
}
