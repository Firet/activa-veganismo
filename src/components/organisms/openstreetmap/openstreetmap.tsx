import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import organizations from '@/constants/organization-map';
import './openstreetmap.css'
import styled from 'styled-components';

const StyledPopup = styled(Popup)`
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;

  .leaflet-popup-content-wrapper {
    background: #f0f0f0;
    color: #333;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }
  
  /*css para el triangulo: */
  .leaflet-popup-tip {
    background: #f0f0f0;
  }

  /*css para la X: */
  .leaflet-popup-close-button {
    margin-top: 15px;
    margin-right: 15px
  }

  /*css para etiqueta a: */
  .leaflet-container a{
    color: #216a89;
  }
`;
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
                    <StyledPopup>
                            <p className='openstreetmap-title'>{location.title}</p>
                            <p>{location.location}</p>
                            <a href={location.contact} target='_blank' className='openstreetmap-contact'>Contacto</a>
                    </StyledPopup>
                </Marker>

            ))}
        </MapContainer>
    );
}
