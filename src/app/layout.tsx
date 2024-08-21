import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/header';
import Footer from '@/components/templates/footer/footer';

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
			<body className={quicksand.className}>
				<Header />
				<main className="flex flex-col items-center p-24">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
