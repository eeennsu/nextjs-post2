import type { FC } from 'react';
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    article: Article;
}

const ArticleCard: FC<Props> = ({ article }) => {

    return (
        <Link href={`/article/${article._id}`}>
            <Card className='flex flex-col items-center justify-center rounded-2xl shadow-md hover:shadow-lg transition'>
                <CardHeader>
                    <CardTitle className='line-clamp-1'>{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <Image
                        src={article.image}
                        alt={`${article.title} image`}
                        className='w-full h-full object-cover rounded-sm'
                        width={414}
                        height={314}
                    />
                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                        This is a short description for Article 1.
                    </p>
                </CardContent>
            </Card>
        </Link>
    );
}

export default ArticleCard;