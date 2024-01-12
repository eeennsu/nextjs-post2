import type { NextAuthOptions, Session, User as NextAuthUser } from 'next-auth';
import { getServerSession } from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import connectToDB from '@/db/db';
import User from '@/models/User';

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],
    theme: {
        colorScheme: 'light',
        logo: '/logo.png',
    },
    callbacks: {
        session: async ({ session }) => {
            try {
                await connectToDB();

                const sessionUser = await User.findOne({ email: session.user?.email });

                const updatedUserInfo = {
                    ...session?.user,
                    avatarUrl: session.user?.image,
                    _id: sessionUser._id.toString(),
                };

                const newSession = {
                    ...session,
                    user: updatedUserInfo
                };

                return newSession;  

            } catch (error) {
                console.log(error);
                return session;  
            }             
        },
        signIn: async ({ user }) => {
            try {
                await connectToDB();

                const existUser = await User.findOne({ email: user.email });
                
                if (!existUser) {
                    await User.create({
                        name: user.name,
                        email: user.email,
                        avatarUrl: user.image
                    });
                }

                return true;
            } catch (error) {
                console.log(error);
                return false;
            }
        }
    }
};

export type NewSession = Session & {
    user: NextAuthUser & NewUser;
}

// custome hooks로 작성하면 클라이언트 컴포넌트에서만 가능하지만, 이렇게 하면 server 컴포넌트에서만 가능하다.
export const getCurrentUser = async () => {
    const session = await getServerSession(authOptions) as NewSession;

    if (!session) {
        return null;
    }

    return session;
}