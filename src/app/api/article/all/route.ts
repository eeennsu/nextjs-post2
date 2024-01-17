import connectToDB from '@/db/db';
import Article from '@/models/Article';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        await connectToDB();

        const allArticles = await Article.find({});

        return NextResponse.json({ result: allArticles }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ result: null,error: (error as Error).message }, { status: 500 });
    }
}