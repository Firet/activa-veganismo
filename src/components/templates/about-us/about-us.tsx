import React from 'react';
import './about-us.css';
import Link from 'next/link';

export default function AboutUs() {

    return (
        <section className='flex flex-col space-evenly items-center about-us-section'>
            <h1 className='about-us-title'>
                ¿Quiénes Somos?
            </h1>
            <h2 className='about-us-subtitle'>
                Sobre nosotres
            </h2>
            <p className='about-us-text'>
                Un grupo de gente apasionada con muchas ganas de ayudar. Creemos en la liberacion animal
                y en la justicia social.
                Nuestro objetivo es crear puentes entre personas con recursos
                y ganas de ayudar, con espacios que
                lo necesitan.
            </p>
            <Link href='/about-us' className='about-us-call-to-action'>Conocé Más</Link>
        </section>
    );
}
