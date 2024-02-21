import { FrameRequest, getFrameHtmlResponse, getFrameMessage } from "@coinbase/onchainkit";
import { NextRequest, NextResponse } from "next/server";

async function getResponse(req: NextRequest): Promise<NextResponse> {
    let accountAddress: string | undefined = "";
    const body: FrameRequest = await req.json();
    const {isValid, message} = await getFrameMessage(body, {neynarApiKey: 'NEYNAR_API_DOCS'});
    if(isValid){
        accountAddress = message?.interactor.verified_accounts[0]
    }
    return new NextResponse(getFrameHtmlResponse({
        buttons: [
            {
                label: 'secret word'
            }
        ],
        image: {
            src: "https://fcnftmint.vercel.app/mip5_layout.webp",
            aspectRatio: "1:1"
        }
    }));
}

export async function POST(req: NextRequest): Promise<Response> {
    return getResponse(req);
  }

export const dynamic = 'force-dynamic';