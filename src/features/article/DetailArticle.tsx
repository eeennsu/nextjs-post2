import type { FC } from 'react';
import { Modal } from '..';
import ArticlerHead from './ArticlerHead';
import ArticleBody from './ArticleBody';
import UserArticles from './UserArticles';

type Props = {
    article: DetailArticle;
}

const DetailArticle: FC<Props> = ({ article }) => {

    const { _id, title, description, createdBy, image, category, githubUrl, liveSiteUrl } = article;

    return (
        <Modal>
            <article className='flex flex-col w-full h-full gap-4'>
                <ArticlerHead title={title} category={category as Category} createdBy={createdBy} />
                <ArticleBody image={image} description={description} githubUrl={githubUrl} liveSiteUrl={liveSiteUrl} />
                <UserArticles mainArticleId={_id} createdBy={createdBy} />
            </article>
        </Modal>
    );
}

export default DetailArticle;