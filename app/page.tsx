import { getFrameMetadata, FrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Mint NFT',
    }
  ],
  image: 'https://fcnftmint.vercel.app/mip5_layout.webp',
  postUrl: '',
});

export const metadata: Metadata = {
  manifest: '/manifest.json',
  other: {
    ...frameMetadata,
  },
};

export default function Home() {

  return (
      <FrameMetadata
        buttons={[
          {
            label: 'Mint NFT',
          },
        ]}
        image={{
          src: "https://fcnftmint.vercel.app/mip5_layout.webp",
          aspectRatio: "1:1"
        }}
        postUrl="https://fcnftmint.vercel.app/api/frame"
      />
  );
}