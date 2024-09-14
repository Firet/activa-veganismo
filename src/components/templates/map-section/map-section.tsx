import React from 'react';
import Map from '@/components/organisms/map/map';
import './map.css';

export default function MapSection() {
	return (
		<section id="map" className="flex flex-col items-center w-full mt-10">
			<h1 className="map-title">
				Encontrá una organización que te quede cerca
			</h1>
			<Map />
		</section>
	);
}
