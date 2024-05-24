import React from 'react';
import Organization from '@/interfaces/organization';
import Image from 'next/image';
import './organization-card.css';

export default function OrganizationCard() {

    const organizations: Organization[] = [
        {
            id: 1,
            name: 'Voicot',
            description:
                'Organización artística.',
            logo: '/voicot.png',
            website: 'https://www.voicot.com/',
            donationUrl: 'https://www.voicot.com/donaciones',
        },
        {
            id: 2,
            name: 'Difusión V',
            description:
                'Difunde Veganismo.',
            logo: '/difu-v.png',
            website: 'https://www.difusionv.com',
            donationUrl: 'https://www.unicef.org/argentina/donar',
        },
        {
            id: 3,
            name: 'Amigues por las calles',
            description:
                'Organización de voluntaries que proveen comida vegana a la gente en situación de calle.',
            logo: '/amigues-sin-fondo.png',
            website: 'https://www.instagram.com/amiguesporlascalles/',
            donationUrl: 'https://www.instagram.com/amiguesporlascalles/',
        }
    ];

    return (
        <>
            <div className="organizations-container">
                <h2>Organizaciones para donar</h2>
                <ul className="organizations-list">
                    {organizations.map((organization) => (
                        <li key={organization.id} className="organization-item">
                            <Image
                                src={organization.logo}
                                alt="Logo de organizaciones"
                                className="organizations-logo"
                                unoptimized
                            />
                            <h3>{organization.name}</h3>
                            <p>{organization.description}</p>
                            <a
                                href={organization.website}
                                target="_blank"
                                className="organization-link"
                            >
                                Website
                            </a>
                            <a
                                href={organization.donationUrl}
                                target="_blank"
                                className="organization-link"
                            >
                                Donar
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
