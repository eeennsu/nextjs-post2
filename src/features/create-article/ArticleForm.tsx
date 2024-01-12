'use client';

import { NewSession } from '@/lib/session';
import type { FC } from 'react';

type Props = {
    type: 'create' | 'update';
    session: NewSession;
}

const ArticleForm: FC<Props> = ({ type, session }) => {

    return (
        <div>
            ArticleForm
        </div>
    );
}

export default ArticleForm;