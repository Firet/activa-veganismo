import React from 'react';
import './about-us.css';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {

    return (
        <section className='flex flex-row space-evenly items-center about-us-section'>
            <div className='flex justify-end p-10 w-1/2'>
                <Image
                    src="./about-us.jpg"
                    alt="Voluntarios en contraste con el sol"
                    className=''
                    unoptimized
                    width={500}
                    height={500}
                />
            </div>
            <div className="w-1/2">
                <h1 className='about-us-title'>
                    ¿Quiénes Somos?
                </h1>
                <h2 className='about-us-subtitle'>
                    Sobre nosotres
                </h2>
                <p className='about-us-text w-1/2'>
                    Un grupo de gente apasionada con muchas ganas de ayudar. Creemos en la liberacion animal
                    y en la justicia social.
                    Nuestro objetivo es crear puentes entre personas con recursos
                    y ganas de ayudar, con espacios que
                    lo necesitan.
                </p>
                {/* <Link href='/about-us' className='about-us-call-to-action'>Conocé Más</Link> */}
            </div>
        </section>
    );
}
