import { getFrameMetadata, FrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Get Address',
    },
    {
      label: 'Mint NFT',
    }
  ],
  image: 'https://fcnftmint.vercel.app/mip5_layout.webp',
  postUrl: 'https://giftdrop-frame.vercel.app/api/mint?mintAddress=0xYourAddress&secretWord=yourSecretWord',
});

export const metadata: Metadata = {
  manifest: '/manifest.json',
  other: {
    ...frameMetadata
  },
};

export default function Home() {

  return (
    <FrameMetadata
      buttons={[
        {
          label: 'Get Address',

        },
        {
          label: 'Mint NFT',
          target: 'https://giftdrop-frame.vercel.app/api/mint?mintAddress=0xYourAddress&secretWord=yourSecretWord',
        },
      ]}
      image={{
        src: "https://fcnftmint.vercel.app/mip5_layout.webp",
        aspectRatio: "1:1"
      }}
      postUrl="https://giftdrop-frame.vercel.app/api/mint?mintAddress=0xYourAddress&secretWord=yourSecretWord"
     />
  );
}
