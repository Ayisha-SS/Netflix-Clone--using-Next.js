'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';
// import type { Metadata } from 'next'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../lib/firebase/firebase'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//     title: 'Netflix-Clone',
//     description: 'Generated by create next app',
// };

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                router.push('/main');
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <html lang="en">
            <head>
                <title>Netflix-Clone</title>
                <meta name="description" content="Generated by create next app" />
                <meta property="og:image" content="public/images/og.jpeg"/>
                <meta property="og:image:width" content="1200"/>
                <meta property="og:image:height" content="630"/>
            </head>
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
};
export default RootLayout;
