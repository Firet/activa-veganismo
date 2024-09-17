import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export default function OpenStreetMap() {

    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer

                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    This is a popup
                </Popup>
            </Marker>
        </MapContainer>
    );
}
