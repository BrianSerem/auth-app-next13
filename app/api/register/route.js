import { connectToDB } from '@/utils/database';
import User from '@/models/user';
import bcrypt from 'bcryptjs';

export async function POST(request) {

    const { email, password } = await request.json()

    try {

        await connectToDB()

        const userExists = await User.find({
            email: email

        })
        if (userExists.length < 1) {
            const hashedPassword = await bcrypt.hash(password, 10)
            await User.create({
                email,
                password : hashedPassword
            })
            return new Response('user created', {
                status: 201
            })

        } else {
            return new Response(JSON.stringify({
                message: 'Email exists already, try logging in'
            }), {
                status: 403,
            })
        }

    } catch (error) {
        return new Response('error creating user', {
            status: 404
        })
    }
}