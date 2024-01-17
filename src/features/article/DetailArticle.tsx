import type { FC } from 'react';
import { Modal } from '..';
import ArticleHead from './ArticleHead';
import ArticleBody from './ArticleBody';
import UserArticles from './UserArticles';

type Props = {
    article: Article;
}

const DetailArticle: FC<Props> = ({ article }) => {

    const { _id, createdAt, title, description, createdBy, image, category, githubUrl, liveSiteUrl } = article;

    return (
        <Modal>
            <article className='flex flex-col w-full h-full gap-4'>
                <ArticleHead title={title} category={category as Category} createdBy={createdBy} createdAt={createdAt} />
                <ArticleBody image={image} description={description} githubUrl={githubUrl} liveSiteUrl={liveSiteUrl} />
                {/* <UserArticles mainArticleId={_id} createdBy={createdBy} /> */}
            </article>
        </Modal>
    );
}

export default DetailArticle;