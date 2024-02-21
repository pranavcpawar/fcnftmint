import { getFrameMetadata, FrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

export default function Home() {

  const frameMetadataArray = [
    {
      label: "address",
    },
    {
      label: "mint"
    }
  ]

  return (
    <>
      {frameMetadataArray.map((frameMetadata) => (
        <FrameMetadata
          buttons={[
            {
              label: frameMetadata.label,
            },
          ]}
          image={{
            src: "https://fcnftmint.vercel.app/mip5_layout.webp",
            aspectRatio: "1:1"
          }}
          postUrl="https://giftdrop-frame.vercel.app/api/mint?mintAddress=0xYourAddress&secretWord=yourSecretWord"
        />
      ))}
    </>
  );
}
