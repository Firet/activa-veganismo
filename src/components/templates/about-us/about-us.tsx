import React from 'react';
import './about-us.css';
import Image from 'next/image';

export default function AboutUs() {

    return (
        <section className='grid md:grid-cols-1 lg:grid-cols-2 about-us-section'>
            <div className='flex justify-end p-10'>
                <Image
                    src="./about-us.jpg"
                    alt="Voluntarios en contraste con el sol"
                    className=''
                    unoptimized
                    width={500}
                    height={500}
                />
            </div>
            <div className="">
                <h1 className='about-us-title font-bold sm:text-xl md:text-xl lg:text-5xl xg:text-5xl'>
                    ¿Quiénes Somos?
                </h1>
                <h2 className='about-us-subtitle sm:text-xl md:text-xl lg:text-3xl xg:text-3xl'>
                    Sobre nosotres
                </h2>
                <p className='about-us-text sm:text-sm lg:text-base xg:text-base'>
                    Un grupo de gente apasionada con muchas ganas de ayudar. Creemos en la liberacion animal
                    y en la justicia social.
                    Nuestro objetivo es crear puentes entre personas con recursos
                    y ganas de ayudar, con espacios que
                    lo necesitan.
                </p>
            </div>
        </section>
    );
}
