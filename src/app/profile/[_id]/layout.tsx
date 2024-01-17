import type { Metadata, NextPage } from 'next';
import type { PropsWithChildren } from 'react';

// export const generateMetadata = async ({ params: { _id } }: Props): Promise<Metadata> => {
    
//     const data = await getOneUser(_id);
//     const article = data?.result;

//     return {
//         title: `${data.result.} ${article?.title}`,
//         description: `This page is Created by ${article?.createdBy.name}.`
//     };
// }

const ProfileLayout: NextPage<PropsWithChildren> = ({ children }) => {

    return (
        <>
            {children}
        </>
    );
};

export default ProfileLayout;