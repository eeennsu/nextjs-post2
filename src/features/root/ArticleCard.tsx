import type { FC } from 'react';
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import Image from 'next/image';

type Props = {
    article: Article;
}

const ArticleCard: FC<Props> = ({ article }) => {

    return (
        <Card className='flex flex-col items-center justify-center rounded-2xl drop'>
            <CardHeader>
                <CardTitle>{article.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <Image
                    src={article.image}
                    alt={`${article.title} image`}
                    className='object-cover'
                    width={300}
                    height={200}
                />
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    This is a short description for Article 1.
                </p>
            </CardContent>
        </Card>
    );
}

export default ArticleCard;