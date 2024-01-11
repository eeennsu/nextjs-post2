import type { FC } from 'react';
import { FooterLink, footerLinks } from '../../constants';
import Link from 'next/link';
import Image from 'next/image';

const Footer: FC = () => {

    return (
        <footer className='flex flex-col w-full px-6 py-4 xl:px-36 xl:py-8'>
            <section className='flex flex-col items-start gap-5'>
                <Image 
                    src='/logo.svg'
                    alt='flexibble'
                    width={115}
                    height={43}
                />
                <p className='max-w-xs text-sm text-start'>
                    Flexibble is the world&apos;s leading community for creatives to share, grow, and get hired.
                </p>
            </section>
            <section className='mt-12 flex flex-wrap gap-10 lg:gap-3.5'>
                <FooterColumn col={footerLinks[0]} />
                <div className='flex flex-col flex-1 gap-8'>
                    <FooterColumn col={footerLinks[1]} />
                    <FooterColumn col={footerLinks[2]} />
                </div>
                <FooterColumn col={footerLinks[3]} />
                <div className='flex flex-col flex-1 gap-8'>
                    <FooterColumn col={footerLinks[4]} />
                    <FooterColumn col={footerLinks[5]} />
                </div>
                <FooterColumn col={footerLinks[6]} />
            </section>
            <section className='flex justify-center max-lg:gap-4 max-lg:mt-8 lg:justify-between items-center'>
                <p>
                    &copy; 2024 eeennsu <br /> All rights reserved.
                </p>
                <p>
                    <span className='font-bold text-blue-600 number-format text-lg'>{(12315).toLocaleString()}</span> projects submitted.
                </p>
            </section>
        </footer>
    );
}

export default Footer;



const FooterColumn: FC<{ col: FooterLink }> = ({ col }) => {

    return (
        <div className='flex flex-col flex-1 gap-5'>
            <h4 className='lg:text-lg font-semibold'>
                {col.title}
            </h4>
            <ul className='flex flex-col gap-2 font-normal'>
                {
                    col.links.map((link) => (
                        <li key={link}>
                            <Link className='hover:underline underline-offset-4' href='/'>
                                {link}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}