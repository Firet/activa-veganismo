import React from 'react';
import Map from '@/components/organisms/map/map';

export default function MapSection() {
	return (
		<section id="map" className="flex flex-col items-center w-full mt-10">
			<h1 className="text-4xl font-bold text-[color:var(--green-2)] mb-7">
				Buscá tu organización en el mapa
			</h1>
			<Map />
		</section>
	);
}
