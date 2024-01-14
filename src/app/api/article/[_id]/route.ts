import connectToDB from '@/db/db';
import Article from '@/models/Article';
import User from '@/models/User';
import { NextResponse } from 'next/server';

type Props = {
    params: {
        _id: string;
    }
}

export async function GET(req: Request, { params: { _id } }: Props) {
    try {
        await connectToDB();

        const article = await Article.findById(_id);

        if (!article) {
            return NextResponse.json({ result: null, msg: 'Failed find artilce.' }, { status: 500 });
        }

        return NextResponse.json({ result: article }, { status: 200 });
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({ result: null, error: (error as Error).message }, { status: 500 });
    }
}