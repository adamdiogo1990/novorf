import React from "react";
import { Inter } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs";

import '../globals.css'
import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSibebar from "@/components/shared/RightSidebar";
import Bottombar from "@/components/shared/Bottombar";

export const metadata = {
    title: 'RF',
    description: 'Next 13 Meta RF App'
}

const inter = Inter({ subsets: ["latin"]})

export default function RootLayout({ children } : {children: React.ReactNode}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} bg-dark-1`}>
                    <Topbar />
                    <main className="flex flex-row">
                        <LeftSidebar />
                        <section className="main-container">
                            <div className="w-full max-w-4xl">
                                {children}
                            </div>
                        </section>
                    </main>
                    <Bottombar />
                </body>
            </html>
        </ClerkProvider>
    )
}