import type { FC } from 'react';

type Props = {
    errMsg: string;
}

const ErrorPage: FC<Props> = ({ errMsg }) => {

    return (
        <section className='flex flex-col items-center h-full gap-4'>
            <h3 className='text-3xl font-semibold text-red-300'>
                Some Error Occured.
            </h3>
            <p>
                {errMsg}
            </p>
        </section>
    );
}

export default ErrorPage;