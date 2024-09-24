import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-main",
});

export const metadata: Metadata = {
	title: "Nextjs Webcache",
	description: "Cache test",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${roboto.variable} font-main antialiased`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
