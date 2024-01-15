import connectToDB from '@/db/db';
import Article from '@/models/Article';
import User from '@/models/User';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

type Props = {
    params: {
        _id: string;
    };
}

// get users articles
export async function GET(req: NextRequest, { params: { _id } }: Props) {
    try {
        await connectToDB();

        const myArticles = await Article.find({ createdBy: _id }).populate({ path: 'createdBy', model: User });

        return NextResponse.json({ result: myArticles }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ result: null, error: (error as Error).message }, { status: 500 });
    }
}