import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

type Props = {
    article: DetailArticle;
}

const MiniArticleCard: FC<Props> = ({ article }) => {

    return (
        <div className='min-w-[180px] min-h-[140px] drop-shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 rounded-md'>
            <Link href={`/article/${article._id}`} className='relative flex flex-col items-center w-full h-full gap-2'>
                <Image
                    src={article.image}
                    alt={article.title}
                    className='object-cover rounded-sm fill'
                    fill
                />
                <div className='absolute flex items-end justify-between w-full pl-1 text-lg text-black -bottom-9'>
                    <p className='font-semibold'>
                        {article.title}
                    </p>
                    <p className='text-sm text-purple-500'>
                        {article.category}
                    </p>
                </div>
            </Link>
        </div>
    );
}

export default MiniArticleCard;