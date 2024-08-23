import React from 'react';
import OrganizationCard from '@/components/organisms/organization-card/organization-card';

export default function OrganizationSection() {

    return (
        <section id="organizations" className="flex flex-col items-center">

            <h1 className='text-3xl font-bold text-[color:var(--green-2)]'>Buscá la organización a tu medida</h1>
            <OrganizationCard />
        </section>
    );
}
