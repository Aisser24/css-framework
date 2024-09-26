import type { Metadata } from "next";

import "../styles/normalize.css"
import "../styles/skeleton.css"
import "../styles/hamburgers.css"
import "../styles/globals.css";

import Navbar from "@/components/navbar";

export const metadata: Metadata = {
    title: "Apollo Club",
    description: "Generated by create next app", //TODO
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
            <div className="container">
                {children}
            </div>
        </body>
        </html>
    );
}
