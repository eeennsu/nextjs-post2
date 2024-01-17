import type { FC } from 'react';

type Props = {
    className: string;
}

const SkeletonBox: FC<Props> = ({ className}) => {

    return (
        <div className={`rounded-md animate-pulse bg-slate-400 block ${className}`} />
    );
}

export default SkeletonBox;