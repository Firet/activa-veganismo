import type { Metadata } from 'next';
import Script from 'next/script'
import { Quicksand } from 'next/font/google';
import './globals.css';
import Header from '@/components/templates/header/header';
import Footer from '@/components/templates/footer/footer';
import Supabase from '@/supabase/Supabase';

const quicksand = Quicksand({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'App Voluntariado vegano',
	description: 'Una app para encontrar el mejor lugar para voluntariar',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<head>
				<link
					rel="stylesheet"
					href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
					integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
					crossOrigin=""
				/>
				<script
					async
					src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
					integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
					crossOrigin=""
				></script>
			</head>
			<body className={quicksand.className}>
				<Header />
				<main className="flex flex-col items-center">{children}</main>
				<Footer />
				<Supabase />
			</body>
		</html>
	);
}
