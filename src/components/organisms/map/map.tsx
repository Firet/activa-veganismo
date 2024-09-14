import 'dotenv/config';
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
	width: '80%',
	height: '400px',
	margin: '20px'
};

const center = {
	lat: -34.603722, // Latitud de Buenos Aires
	lng: -58.381592, // Longitud de Buenos Aires
};

export default function Map() {
	const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
	return (
		<>
			<LoadScript googleMapsApiKey={apiKey}>
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={center}
					zoom={12}
				>
					{/* Child components, such as markers, info windows, etc. */}
				</GoogleMap>
			</LoadScript>
		</>
	);
}
