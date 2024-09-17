import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export default function OpenStreetMap() {

    const center = {
        lat: -34.603722, // Latitud de Buenos Aires
        lng: -58.381592, // Longitud de Buenos Aires
    };

    const locations = [
        { lat: -34.581063540279516, lng: -58.53425706141999, title: 'Viandas en la Kennedy' },
        { lat: -34.915131589117976, lng: -57.95489072886467, title: 'La verdurolla' },    // se necesita ubi exacta
        { lat: -34.60102216113937, lng: -58.384254735760926, title: 'Healthsave Microcentro' },
        { lat: -34.598455385569615, lng: -58.398248442642064, title: 'Healthsave Palermo' },
        { lat: -34.62833285318419, lng: -58.46353150374588, title: 'Healthsave Flores' },
        { lat: -34.44417, lng: -58.5775, title: 'Healthsave San Fernando' },
        { lat: -34.60367706241109, lng: -58.41101116141914, title: 'Amigues Por Las Calles' },
    ];

    return (
        <MapContainer center={center} zoom={12} scrollWheelZoom={false}>
            <TileLayer

                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locations.map((location, index) => (
                <Marker
                    key={index}
                    position={{ lat: location.lat, lng: location.lng }}
                    title={location.title}
                />
            ))}
        </MapContainer>
    );
}
