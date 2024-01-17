import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import connectToDB from '@/db/db';
import Article from '@/models/Article';
import User from '@/models/User';

// get articles by pagination
export async function GET (req: NextRequest) {
    const paramsCurPage = req.nextUrl.searchParams.get('curPage');

    try {        
        await connectToDB();

        if (!paramsCurPage) {
            return NextResponse.json({ result: null, msg: 'Not Found curPage params.' }, { status: 400 });
        }

        const curPage = +paramsCurPage;
        const perPage = 8;

        const totalArticles = await Article.countDocuments({});
        const totalPages = Math.ceil(totalArticles / perPage);
        
        const articles = await Article.find({})
            .skip((curPage - 1) * perPage)
            .limit(perPage)
            .populate({ path: 'createdBy', model: User });
    
        return NextResponse.json({ result: articles, totalPages }, { status: 200 });
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({ result: null,error: (error as Error).message }, { status: 500 });
    }
}