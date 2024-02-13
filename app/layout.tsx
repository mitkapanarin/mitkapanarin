import type { Metadata, ResolvingMetadata } from "next";
import "./globals.css";

import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ReduxProvider } from "@/store/Provider";
import AnimatedCursor from "react-animated-cursor";
import { sanityClientFetch } from "@/sanity/lib/client";
import { seoDataQuery } from "@/sanity/query/queries";
import { IHeroSectionProps } from "@/types/interface";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const data: IHeroSectionProps = await sanityClientFetch({
    query: seoDataQuery,
  });
  // console.log("data seo", data);
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${data?.name} || ${data?.title}`,
    openGraph: {
      images: [data?.mainImage, ...previousImages],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          innerStyle={{
            background: "#26AC9B",
          }}
          outerStyle={{
            border: "2px solid #26AC9B",
          }}
        />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
