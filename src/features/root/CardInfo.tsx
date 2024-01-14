'use client';

import Image from 'next/image';
import type { FC, PropsWithChildren } from 'react';
import { useEffect, useState } from 'react';

type Props = {

}

const ranMultipleLike = [75, 150, 200];
const ranMultipleView = [5000, 17500, 20000];

const CardInfo: FC<Props> = ({  }) => {

    const [ranLikes, setRanLikes] = useState<number>(0);
    const [ranView, setRanViews] = useState<string>(''); 

    useEffect(() => {
        const ranIndex = Math.floor(Math.random() * ranMultipleLike.length);
        const ranIndex2 = Math.floor(Math.random() * ranMultipleView.length);
   
        setRanLikes(Math.floor(Math.random()* ranMultipleLike[ranIndex]) + 10);
        setRanViews(String((Math.floor((Math.random() * ranMultipleView[ranIndex2]) + 2000) / 1000).toFixed(1)));
    }, []);

    return (
        <>
            <Wrapper>
                <Image
                    src='/hearth.svg'
                    alt='like'
                    width={13}
                    height={12}
                    className='text-red-500'
                />
                <Value>
                {ranLikes}
                </Value>             
            </Wrapper>
            <Wrapper>
                <Image
                    src='/eye.svg'
                    alt='eye'
                    width={13}
                    height={12}
                />
                <Value>
                    {ranView}k
                </Value>
            </Wrapper>
        </>
    );
}

export default CardInfo;



const Wrapper: FC<PropsWithChildren> = ({ children }) => {

    return (
        <div className='flex gap-2'>
            {children}
        </div>
    )
}

const Value: FC<PropsWithChildren> = ({ children }) => {

    return (
        <p className='text-sm'>
            {children}
        </p>
    )
}