'use client';

import type { FC, PropsWithChildren, MouseEvent } from 'react';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import useFormDatatStore from '@/zustand/FormStore/useFormDatatStore';

const Modal: FC<PropsWithChildren> = ({ children }) => {

    const resetFormData = useFormDatatStore(state => state.resetFormData);
    const overlay = useRef<HTMLDivElement>(null);
    const wrapper = useRef<HTMLDivElement>(null);
    const router = useRouter();
    
    const handleDismiss = () => {
        router.push('/');
        resetFormData();
    }

    const handleClick = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target === overlay.current) {
            handleDismiss();
        }
    }

    return (
        <div className='fixed inset-0 z-10 flex justify-center mx-auto bg-black/60' ref={overlay} onClick={handleClick}
        >
            <button className='absolute p-3 transition-colors bg-black rounded-full top-3 right-3 lg:right-[88px] hover:bg-slate-800' onClick={handleDismiss}>
                <Image src='/close.svg' width={15} height={15} alt='close' />
            </button>
            <motion.div
                initial={{ opacity: 0.4, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className='flex justify-start items-center flex-col absolute h-[94%] w-full lg:w-11/12 bottom-0 bg-white rounded-t-2xl lg:px-40 px-8 pt-14 pb-72 overflow-auto'
                ref={wrapper} 
            >
                {children}
            </motion.div>      
        </div>             
    );
}

export default Modal;