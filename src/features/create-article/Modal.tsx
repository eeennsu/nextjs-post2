'use client';

import type { FC, PropsWithChildren, MouseEvent } from 'react';
import { useRef, Fragment } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Modal: FC<PropsWithChildren> = ({ children }) => {

    const overlay = useRef<HTMLDivElement>(null);
    const wrapper = useRef<HTMLDivElement>(null);
    const router = useRouter();
    
    const handleDismiss = () => {
        router.push('/');
    }

    const handleClick = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target === overlay.current) {
            handleDismiss();
        }
    }

    return (
        <div className='fixed inset-0 z-10 mx-auto bg-black/60' ref={overlay} onClick={handleClick}
        >
            <button className='absolute p-3 transition-colors bg-black rounded-full top-3 right-6 hover:bg-slate-800' onClick={handleDismiss}>
                <Image src='/close.svg' width={15} height={15} alt='close' />
            </button>
            <motion.div
                initial={{ opacity: 0.4, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0.8, y: 5 }}
                transition={{ duration: 0.15, ease: 'easeInOut' }}
                className='flex justify-center items-center flex-col absolute h-[94%] w-full bottom-0 bg-white rounded-3xl lg:px-40 px-8 pt-14 pb-72 overflow-auto'
                ref={wrapper} 
            >
                {children}
            </motion.div>      
        </div>             
    );
}

export default Modal;