import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import { Button as ShButton } from './ui/button';
import Image from 'next/image';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const Button3: FC<PropsWithChildren<Props>> = ({ children, ...btnProps }) => {

    return (
        <ShButton {...btnProps} className="flex items-center justify-center px-4 py-2 space-x-2 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:text-white">
            <Image
                src='/arrow-down.svg'
                alt='arrow-down'
                width={16}
                height={16}
            />      
            {children}
        </ShButton>
    );
}

export default Button3;