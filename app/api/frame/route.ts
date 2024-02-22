import { FrameRequest, getFrameHtmlResponse, getFrameMessage } from "@coinbase/onchainkit";
import { NextRequest, NextResponse } from "next/server";

async function getResponse(req: NextRequest): Promise<NextResponse> {
		let accountAddress: string | undefined = "";
		let secretWord: string | undefined = "";
		const body: FrameRequest = await req.json();
		const {isValid, message} = await getFrameMessage(body, {neynarApiKey: 'NEYNAR_API_DOCS'});
		if(isValid){
				secretWord = body.untrustedData.inputText;
				accountAddress = message?.interactor.verified_accounts[0]
		}

		if (secretWord && accountAddress) {
			return new NextResponse(getFrameHtmlResponse({
				input: {text: "Secret Message: "},
				image: {
					src: "https://fcnftmint.vercel.app/mip5_layout.webp",
					aspectRatio: "1:1"
					},
				
				buttons: [{
					label: 'Share',
					action: 'link',
					target: `https://edgscan.live/?address=${accountAddress}`
	
				}],
				postUrl: `https://giftdrop-frame.vercel.app/api/mint?secretWord=${secretWord}&accountAddress=${accountAddress}`,
			}));

		}

		return new NextResponse(getFrameHtmlResponse({
			input: {text: "Secret Message: "},
			image: {
				src: "https://fcnftmint.vercel.app/mip5_layout.webp",
				aspectRatio: "1:1"
				},
			
			buttons: [{
				label: 'Claim NFT',
				action: 'post'

			}],
			postUrl: `https://fcnftmint.vercel.app/api/frame?secretWord=${secretWord}&accountAddress=${accountAddress}`,
		}));
	}

export async function POST(req: NextRequest): Promise<Response> {
		return getResponse(req);
	}

export const dynamic = 'force-dynamic';