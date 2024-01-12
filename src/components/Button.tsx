import type { FC, ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { Button as ShButton } from '@/components/ui/button';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    isWhite?: boolean;
}

const Button: FC<PropsWithChildren<Props>> = ({ children, isWhite, className, ...btnProps }) => {

    const basicClass = 'w-auto py-1 px-4';
    const _className = [basicClass, className].join(' ');

    return (
        <ShButton {...btnProps} className={_className} variant={isWhite ? 'outline' : 'default'}>
            {children}
        </ShButton>
    );
}

export default Button;