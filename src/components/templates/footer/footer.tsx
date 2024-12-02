import React from 'react';
import './footer.css';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			Copyleft {currentYear} | Diseñado y desarrollado por Damián
			Federico, Evelyn Di Salvo y Giselle San German
		</footer>
	);
}
