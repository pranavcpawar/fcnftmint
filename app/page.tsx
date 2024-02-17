import { getFrameMetadata, FrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";
import Image from "next/image";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Mint NFT',
    },
  ],
  image: 'https://jooinn.com/images/dog-67.jpg',
  postUrl: 'https://build-onchain-apps.vercel.app/api/frame',
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
      postUrl="https://build-onchain-apps.vercel.app/api/frame"
      image={{
        src: "https://jooinn.com/images/dog-67.jpg",
        aspectRatio: "1.91:1"
      }}
      buttons={[{
        label: 'Mint NFT',
      }]}

     />
  );
}
