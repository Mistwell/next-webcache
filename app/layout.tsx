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
	verification: {
		yandex: "32aa2d44c3e7b0d3",
	},
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
