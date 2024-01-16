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
    const paramsCurCount = req.nextUrl.searchParams.get('curCount');

    try {
        await connectToDB();

        if (!paramsCurCount) {
            return NextResponse.json({ result: null, msg: 'Not Found curCount params.' }, { status: 400 });
        }

        const curCount = +paramsCurCount;
        const perCount = 4;

        const totalMyArticles = await Article.countDocuments({ createdBy: _id });
        const totalPages = Math.ceil(totalMyArticles / perCount);
        
        const myArticles = await Article.find({ createdBy: _id })
            .skip((curCount - 1) * perCount)
            .limit(perCount + 1)        // 메인 게시글에 자신 하나것을 제외해야 하므로
            .populate({ path: 'createdBy', model: User });

        return NextResponse.json({ result: myArticles, totalPages }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ result: null, error: (error as Error).message }, { status: 500 });
    }
}