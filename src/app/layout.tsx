import type { Metadata, NextPage } from 'next';
import type { PropsWithChildren } from 'react';
import { Header, Footer } from '@/features';
import './globals.css'

export const metadata: Metadata = {
    title: 'Flexibble',
    description: 'Generated by create next app',
};

const RootLayout: NextPage<PropsWithChildren> = ({ children }) => {

    return (
        <html lang='ko'>
            <body className='flex flex-col min-h-screen bg-gradient-to-r from-light-white to-slate-200'>
                <Header />
                <div className='flex flex-col flex-1 w-full mx-auto max-w-7xl'>                    
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}

export default RootLayout;