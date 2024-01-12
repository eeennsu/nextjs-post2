'use client';

import type { FC, PropsWithChildren } from 'react';
import type { NewSession } from '@/lib/session';
import { useState, Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
    session: NewSession | null;
}

const ProfileMenu: FC<Props> = ({ session }) => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        <Popover className='relative flex items-center' as='div' onMouseLeave={() => setIsModalOpen(false)}>
            <Popover.Button onMouseEnter={() => setIsModalOpen(true)} className='outline-none'>
                {
                    session?.user?.avatarUrl && (
                        <Image src={session?.user?.avatarUrl} alt='avatar' width={36} height={36} className='object-contain rounded-full' />                   
                    ) 
                }
            </Popover.Button>
            <Transition 
                show={isModalOpen} 
                as={Fragment}
                enter='transition ease-out duration-200'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
            >
                <Popover.Panel className='absolute z-10 w-max bg-slate-50/65 rounded-md shadow-menu'>
                    <div className='flex flex-col items-center w-44 justify-center gap-4 py-6'>
                        <h3>
                            <Image src={session!.user!.avatarUrl} alt='avatar' width={64} height={64} className='object-contain rounded-full' />
                        </h3>
                        <p className='text-lg font-bold'>
                            {session?.user.name}
                        </p>
                        <ul className='flex flex-col gap-1.5 w-full'>
                            <MenuListItem>
                                <Link href='/'>
                                    Work Preferences
                                </Link>
                            </MenuListItem>
                            <MenuListItem>
                                <Link href='/'>
                                    Settings
                                </Link>
                            </MenuListItem>
                            <MenuListItem>
                                <Link href={`/profile/${session?.user._id}`}>
                                    Profile
                                </Link>
                            </MenuListItem>
                        </ul>
                        <div className='border-t border-nav-border pt-4 flex justify-center items-center font-semibold w-4/6'>
                            <button className='text-lg hover:underline underline-offset-4' onClick={() => signOut()}>
                                Logout
                            </button>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>            
        </Popover>
    );
}

export default ProfileMenu;



const MenuListItem: FC<PropsWithChildren> = ({ children }) => {
    
    return (
        <li className='inline-flex ps-8 h-9 w-full items-center justify-start rounded-md y-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'>
            {children}
        </li>
    );
}