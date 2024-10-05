import type { Metadata } from "next";

import "@/styles/normalize.css"
import "@/styles/skeleton.css"
import "@/styles/hamburgers.css"
import "@/styles/globals.css";

import Navbar from "@/components/general/navbar";

export const metadata: Metadata = {
    title: "Apollo Club",
    description: "Apollo Club is a vibrant community platform where enthusiasts and experts come together to share insights, collaborate on projects, and foster innovation.",
    authors: [
        { name: "Gregor Enengl" },
        { name: "Jonathan Guger" }
    ],

    // Open Graph
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://apollo-club.com",
        siteName: "Apollo Club",
        images: [
            {
                url: "https://apollo-club.com/images/og-image.jpg",
                width: 800,
                height: 600,
                alt: "Og Image Alt",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
            <Navbar/>
            {children}
        </body>
        </html>
    );
}
