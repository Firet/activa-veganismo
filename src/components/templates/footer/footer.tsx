import React from 'react';
import './footer.css';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			Copyright © {currentYear} | Design and development made by Damián Federico, Evelyn Di Salvo and Giselle San German
		</footer>
	);
}
