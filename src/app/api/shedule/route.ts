export const dynamic = 'force-dynamic' // defaults to force-static
import { TwitterApi } from 'twitter-api-v2';
import { env } from '~/env.mjs';

export async function GET(request: Request) {


    // Instantiate with desired auth type (here's Bearer v2 auth)
    const twitterClient = new TwitterApi({
        appKey: env.TWITTER_ID,
        appSecret: env.TWITTER_SECRET,
        // Following access tokens are not required if you are
        // at part 1 of user-auth process (ask for a request token)
        // or if you want a app-only client (see below)
        accessToken: env.ACCESS_TOKEN,
        accessSecret: env.ACCESS_SECRET,
    });
    const client = twitterClient.readWrite

    await client.v2.tweet('Hello, this is a test.')
    // const mediaIds = await Promise.all([
    //     // file path
    //     client.v1.uploadMedia('./test.jpg'),
    //     // from a buffer, for example obtained with an image modifier package
    // ]);

    // await client.v2.tweet({
    //     text: 'My tweet text with two images!',
    //     media: { media_ids: mediaIds }
    // });

    return new Response('Hello world!', {
        headers: {
            'content-type': 'text/plain',
        },
    })
}