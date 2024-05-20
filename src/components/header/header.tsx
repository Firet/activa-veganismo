import React from 'react';
import styles from './header.module.css';
import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <nav className={styles.navbar}>
                <div>
                    <a href="#home">Ser voluntario</a>
                    <a href="#about">Donar</a>
                    <a href="#contact">Carga tu ONG</a>
                    <Link href='/quienes-somos'>
                        Quienes somos
                    </Link> 
            </div>
        </nav>
        </header >
    );
};
