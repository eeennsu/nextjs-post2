import { NextResponse } from "next/server";
import { v2 as cloudinary, UploadApiOptions } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

export async function POST(req: Request) {
    const { imgPath } = await req.json();

    if (!imgPath) {
        return NextResponse.json({ msg: 'Image path is required.' }, { status: 400 });
    }

    try {
        const options: UploadApiOptions = {
            use_filename: true,
            unique_filename: false,
            overwrite: true,
            transformation: [{ width: 1000, height: 752, crop: 'scale' }]
        };

        const result = await cloudinary.uploader.upload(imgPath, options);

        return NextResponse.json(result, { status: 201 });
    } catch (error) {
        return NextResponse.json({ msg: (error as Error).message }, { status: 500 });        
    }
}