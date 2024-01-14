import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CardInfo from './CardInfo';

type Props = {
    article: Article;
}

const ArticleCard: FC<Props> = ({ article }) => {
    
    return (      
        <div className='flex flex-col items-center justify-center transition rounded-md shadow-md hover:shadow-lg'>
             <div className='flex-1'>
                <Link className='relative flex items-center justify-center h-full group w-ful' href={`/article/${article._id}`}>                
                    <Image
                        src={article.image}
                        alt={`${article.title} image`}
                        className='object-cover w-full h-full rounded-t-md'
                        width={414}
                        height={314}
                    />            
                    <div className='absolute bottom-0 z-10 w-full p-3 pt-6 font-light text-white transition-all opacity-0 group-hover:opacity-100 line-clamp-1 bg-gradient-to-b from-transparent to-black/70'>
                        {article.liveSiteUrl}
                    </div>    
                </Link>
            </div>
            <div className='flex flex-col w-full'>
                <div className='p-4'>
                    <h3 className='text-xl font-bold line-clamp-1'>{article.title}</h3>   
                    <hr className='w-full my-1.5 border-t-2 border-black-100/5' />                 
                    <p className='mt-4 text-sm text-gray-500 dark:text-gray-400 line-clamp-3'>
                        This is a short description for Article 1.
                    </p>
                </div>
                <div className='flex items-center justify-end p-3.5 mt-2.5 gap-4 bg-slate-200/70'>
                    <CardInfo />
                </div>
            </div>         
        </div>   
    );
}

export default ArticleCard;