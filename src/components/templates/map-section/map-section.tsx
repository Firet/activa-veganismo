import React from 'react';
import Map from '@/components/organisms/map/map';

export default function MapSection() {

	return (
		<section id="map" className="w-full">
            <h1>Buscá tu organización en el mapa</h1>
			<Map />
		</section>
	);
}
