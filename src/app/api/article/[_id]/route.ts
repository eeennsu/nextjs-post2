import connectToDB from '@/db/db';
import Article from '@/models/Article';
import User from '@/models/User';
import { NextResponse } from 'next/server';

type Props = {
    params: {
        _id: string;
    };
}

// get one article
export async function GET(req: Request, { params: { _id } }: Props) {
    try {
        await connectToDB();

        const article = await Article.findById(_id).populate({ path: 'createdBy', model: User });

        if (!article) {
            return NextResponse.json({ result: null, msg: 'Failed find artilce.' }, { status: 500 });
        }
        
        return NextResponse.json({ result: article }, { status: 200 });
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({ result: null, error: (error as Error).message }, { status: 500 });
    }
}

export async function DELETE(req: Request, { params: { _id } }: Props) {
    try {
        await connectToDB();

        await Article.deleteOne({ _id: _id });

        return NextResponse.json({ msg: 'deleted!' }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ result: null, error: (error as Error).message }, { status: 500 });
    }
}

export async function PATCH(req: Request, { params: { _id } }: Props) {
    const { formData, createdBy } = await req.json();

    try {
        await connectToDB();

        const { title, description, image, liveSiteUrl, githubUrl, category } = formData as Form;

        const editedArticle: Omit<Article, 'createdAt' | 'updatedAt' | '_id'> = {
            createdBy,
            title,
            description,         
            image,   
            liveSiteUrl,        
            githubUrl,
            category 
        };

        const result = await Article.findByIdAndUpdate(_id, editedArticle);

        if (!result) {
            return NextResponse.json({ result: null, msg: 'Failed update article.' }, { status: 500 });
        }

        return NextResponse.json({ result }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ result: null, error: (error as Error).message }, { status: 500 });
    }
}