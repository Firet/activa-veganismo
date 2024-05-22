import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/header";
import MainContent from "@/components/main-content/mainContent";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
	title: "App Voluntariado vegano",
	description: "Una app para encontrar el mejor lugar para voluntariar",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Header />
				<MainContent />
				{children}
				<Footer />
			</body>
		</html>
	);
}