import React from 'react';
import './organization-section.css';
import OrganizationCard from '@/components/organisms/organization-card/organization-card';

export default function OrganizationSection() {

    return (
        <section id="organizations" className="organization-section">

            <h1 className='organization-section-title'>Buscá la organización a tu medida</h1>
            <OrganizationCard />
        </section>
    );
}
