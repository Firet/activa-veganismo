import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import organizations from '@/constants/organization-map';

export default function OpenStreetMap() {

    const center = {
        lat: -34.603722,
        lng: -58.381592,
    };

    const locations = organizations.map(org => ({
        lat: org.lat, 
        lng: org.lng,
        title: org.title,
        location: org.location,
        contact: org.contact
    }));

    return (
        <MapContainer center={center} zoom={12} scrollWheelZoom={false}>
            <TileLayer

                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locations.map((location, index) => (
                <Marker
                    key={index}
                    position={{ lat: location.lat, lng: location.lng }}
                >
                    <Popup>
                        <p>{location.title}</p>
                        <p>{location.location}</p>
                        <a href={location.contact} target='_blank'>Contacto</a>
                    </Popup>
                </Marker>

            ))}
        </MapContainer>
    );
}
