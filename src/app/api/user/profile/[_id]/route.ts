import connectToDB from '@/db/db';
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

        const user = await User.findById(_id);

        if (!user) {
            return NextResponse.json({ result: null, msg: 'Not founded user.' }, { status: 400 });
        }

        return NextResponse.json({ result: user }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ result: null, error: (error as Error).message }, { status: 500 });
    }
}