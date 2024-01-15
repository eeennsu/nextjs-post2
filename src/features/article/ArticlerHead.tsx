import Image from 'next/image';
import type { FC } from 'react';

type Props = {
    title: string;
    category: Category;
    createdBy: NewUser;
}

const ArticlerHead: FC<Props> = ({ title, category, createdBy: { avatarUrl, name } }) => {

    return (
        <section className='flex items-center justify-center w-full gap-5 lg:justify-start'>
            <Image
                src={avatarUrl}
                width={40}
                height={40}
                className='hidden rounded-full lg:block'
                alt='avatar'
            />
            <div className='flex flex-col justify-center gap-4 lg:gap-2'>
                <h2 className='text-4xl font-bold lg:text-3xl'>
                    {title}
                </h2>
                <div className='flex items-center justify-center lg:justify-start'>
                    <p className='font-light max-lg:flex max-lg:gap-2 max-lg:items-center'>
                        <Image
                            src={avatarUrl}
                            width={30}
                            height={30}
                            className='block rounded-full lg:hidden'
                            alt='avatar'
                        />
                        {name}
                    </p>
                    <span className='mx-2'>
                        &middot;
                    </span>
                    <p className='text-purple-500'>
                        {category}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ArticlerHead;