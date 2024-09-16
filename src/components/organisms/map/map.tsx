import 'dotenv/config';
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
	width: '80%',
	height: '500px',
	margin: '20px',
};

const locations = [
	{ lat: -34.581063540279516, lng: -58.53425706141999, title: 'Viandas en la Kennedy' },
	{ lat: -34.915131589117976, lng: -57.95489072886467, title: 'La verdurolla' },    // se necesita ubi exacta
	{ lat: -34.60102216113937, lng: -58.384254735760926, title: 'Healthsave Microcentro' },
	{ lat: -34.598455385569615, lng: -58.398248442642064, title: 'Healthsave Palermo'},
	{ lat: -34.62833285318419, lng: -58.46353150374588, title: 'Healthsave Flores'},
// 	{ lat: -34.598455385569615, lng: -58.398248442642064, title: 'Healthsave San Martin'},
	{lat: -34.581726035748716, lng: -58.53423560374678, title: 'Healthsave San Fernando'},
	{lat: -34.60367706241109, lng: -58.41101116141914, title: 'Healthsave Amigues Por Las Calles'},
	{lat: -34.61987444092998, lng: -58.3717174110214, title: 'Healthsave Amigues Por Las Calles'}  // se necesita ubi exacta
	 
	 
];

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
					{locations.map((location, index) => (
          				<Marker
            				key={index}
            				position={{ lat: location.lat, lng: location.lng }}
            				label={location.title}
          				/>
        			))}
				</GoogleMap>
			</LoadScript>
		</>
	);
}
