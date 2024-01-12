import type { FC } from 'react';
import type { NavLink } from '../../constants';
import Image from 'next/image';
import Link from 'next/link';
import SessionCondition from './SessionCondition';
import { navLinks } from '../../constants';

const Header: FC = () => {

    return (
        <header className='w-full px-8 py-2 border-b shadow-sm border-nav-border bg-white h-[72px] flex items-center justify-center'>
            <nav className='flex items-center justify-between flex-1 gap-4 mx-auto max-w-7xl'>
                <div className='flex items-center gap-14'>
                    <Link href='/'>
                        <Image 
                            src='/logo-purple.svg'                         
                            alt='flexibble'
                            width={115}
                            height={43}
                        />
                    </Link>
                    <ul className='hidden text-sm xl:flex gap-9'>
                        {
                            navLinks.map((link) => (
                                <Menu key={link.key} link={link} />
                            ))
                        }
                    </ul>
                </div>
                <div className='flex items-center justify-center gap-4'>
                    <SessionCondition />
                </div>
            </nav>           
        </header>
    );
}

const Menu: FC<{ link: NavLink }> = ({ link }) => {
    
    return (
        <li>
            <Link className='font-medium hover:underline underline-offset-2' href={link.href}>
                {link.text}
            </Link>
        </li>
    );
}

export default Header;