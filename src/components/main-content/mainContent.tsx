import React from 'react';
import styles from './mainContent.module.css';

export default function MainContent() {
    return (
        <main className="flex flex-col items-center p-24">
            <h1 className={styles.pageTitle}
            >
                App voluntariado vegano
            </h1>
        </main>
    )
}
