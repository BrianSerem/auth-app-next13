import { connectToDB } from '@utils/database'

export async function POST(request) {

    const { email, password } = await request.json()

    try {

        await connectToDB();
        

        return new Response('user created', {
            status: 201
        })
    } catch (error) {
        return new Response('error creating user', {
            status: 400
        })
    }
}