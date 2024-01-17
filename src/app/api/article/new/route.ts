import { NextResponse } from "next/server";
import connectToDB from "@/db/db";
import Article from "@/models/Article";

// create new article
export async function POST(req: Request) {

    const { formData, createdBy } = await req.json();
    const { title, description, image, liveSiteUrl, githubUrl, category } = formData as Form;

    try {
        await connectToDB();
        
        const newArticle = new Article({
            createdBy, 
            title,
            description,         
            image,   
            liveSiteUrl,        
            githubUrl,
            category 
        });

        await newArticle.save();

        return NextResponse.json({ result: newArticle }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ result: null, msg: (error as Error).message }, { status: 500 });  
    }
}