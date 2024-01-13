import type { FC, ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { Button as ShButton } from '@/components/ui/button';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    color?: 'blue' | 'green';
};

const Button2: FC<PropsWithChildren<Props>> = ({ children, className, color = 'blue', disabled, ...btnProps }) => {

    const bgColor = color === 'blue' ? `${disabled ? 'bg-blue-500/90' : 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700'}` : `${disabled ? 'bg-green-500/90' : 'bg-green-500 hover:bg-green-600 active:bg-green-700'}`;

    const basicClass = `rounded-full px-6 py-2 text-white ${bgColor}`;
    const _className = [basicClass, className].join(' ');

    return (
        <ShButton {...btnProps} disabled={disabled} className={_className} variant='default'>
            {children}
        </ShButton>
    );
}

export default Button2;