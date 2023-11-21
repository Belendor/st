export const dynamic = 'force-dynamic'; // defaults to force-static
export async function GET(request: Request) {
    // Replace 'YOUR_HOME_URL' with the actual URL you want to redirect to
    const homeUrl = 'http://localhost:3000';

    // Create a response with a 302 Found status code and a Location header
    const response = new Response('Redirecting to home...', {
        status: 302,
        headers: {
            'Location': homeUrl,
            'content-type': 'text/plain',
        },
    });

    return response;
}