import type { FC } from 'react';
import Image from 'next/image';

type Props = {
    image: string;
    description: string;
    githubUrl: string;
    liveSiteUrl: string;
}

const ArticleBody: FC<Props> = ({ image, description, githubUrl, liveSiteUrl }) => {

    return (
        <section className='flex flex-col w-full gap-5 lg:flex-row'>
            <div className='relative w-full h-[320px] lg:h-[582px]'>
                <Image 
                    src={image}
                    alt='article image'
                    className='object-contain rounded-md shadow-md'
                    fill
                />            
            </div>
            <div className='flex flex-col w-full gap-5 lg:gap-10 lg:justify-center lg:items-center'>
                <p className='text-lg'>
                    {description}
                </p>
                <div className='flex gap-8 max-lg:justify-center'>
                    <p className='flex items-center gap-2'>
                        <Image 
                            src='/gihub.png'
                            alt='github'
                            width={20}
                            height={20}
                            className='object-contain rounded-full'
                        />
                        <a href={githubUrl} className='underline underline-offset-2 hover:text-blue-400'>
                            Github
                        </a>
                    </p>
                    <p className='flex items-center gap-1.5'>
                        🚀
                        <a href={githubUrl} className='underline underline-offset-2 hover:text-blue-400'>
                            Live Site
                        </a>
                    </p>                  
                </div>
            </div>
        </section>
    );
}

export default ArticleBody;