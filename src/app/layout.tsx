import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { EB_Garamond } from "next/font/google";
import { Providers } from "./providers";

const inter = EB_Garamond({ subsets: ["latin"] });

import { SITE_NAME } from "@/constants/site";
import { GAScript } from "./scripts";

export const metadata = {
  title: SITE_NAME,
  description: "Popular Harry Potter: Magic Awakened Decks",
  keywords: [
    "Harry Potter: Magic Awakened",
    "Tier List",
    "Meta",
    "Decks",
    "Cards",
    "Echoes",
    "Database",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GAScript />
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
