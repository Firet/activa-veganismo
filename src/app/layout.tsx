import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
