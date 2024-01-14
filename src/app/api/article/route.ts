import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import connectToDB from '@/db/db';
import Article from '@/models/Article';
import User from '@/models/User';

export async function GET (req: NextRequest) {
    try {
        await connectToDB();
        const paramsCurPage = req.nextUrl.searchParams.get('curPage');

        if (!paramsCurPage) {
            return NextResponse.json({ msg: 'Not Found curPage params.' });
        }

        const curPage = +paramsCurPage;
        const perPage = 10;

        const totalArticles = await Article.countDocuments();
        const totalPages = Math.ceil(totalArticles / perPage);
        
        const articles = await Article.find({})
            .skip((curPage - 1) * perPage)
            .limit(perPage)
            .populate({ path: 'createdBy', model: User });
        
        return NextResponse.json({ 
            result: articles, 
            totalPages
        }, { status: 200 });
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}