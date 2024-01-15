'use client';

type Props = {
    error: Error;
    reset: () => void;
}

import type { FC } from 'react';
import { useEffect } from 'react';
import ErrorPage from '@/features/root/ErrorPage';

const RootError: FC<Props> = ({ error, reset }) => {

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <ErrorPage errMsg={error.message} />
    );
}

export default RootError;