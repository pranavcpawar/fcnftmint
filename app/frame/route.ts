import { FrameRequest, getFrameMessage } from "@coinbase/onchainkit";
import { NextRequest, NextResponse } from "next/server";

async function getResponse(req: NextRequest): Promise<NextResponse> {
    let accountAddress: string | undefined = "";
    const body: FrameRequest = await req.json();
    const {isValid, message} = await getFrameMessage(body, {neynarApiKey: 'NEYNAR_API_DOCS'});
    if(isValid){
        accountAddress = message?.interactor.verified_accounts[0]
    }
    return new NextResponse(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <title>Secret Word</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://fcnftmint.vercel.app/mip5_layout.webp" />
    <meta property="fc:frame:button:1" content="Secret Word" />
    <meta property="fc:frame:post_url" content="https://giftdrop-frame.vercel.app/api/mint?mintAddress=${accountAddress}&secretWord=yourSecretWord" />
    </head>
    </html>`);
}

export async function POST(req: NextRequest): Promise<Response> {
    return getResponse(req);
  }

export const dynamic = 'force-dynamic';