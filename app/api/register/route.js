export async function POST (req) {

    try {
        const { email, password1 } = await req.json()
        console.log(email)
    } catch(error) {}
}