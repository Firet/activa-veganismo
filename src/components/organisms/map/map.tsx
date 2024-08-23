import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
	width: '100%',
	height: '400px',
};

const center = {
	lat: -34.603722, // Latitud de Buenos Aires
	lng: -58.381592, // Longitud de Buenos Aires
};

export default function Map() {
	return (
		<>
			<LoadScript googleMapsApiKey="AIzaSyAno2Y5lzSsxzKzML7FJjpmyzkUpuRMRyw">
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
