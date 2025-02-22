import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const islandMoments = localFont({
  src: "./fonts/IslandMoments-Regular.ttf",
  variable: "--island-moments"
})
const playFair = localFont({
  src: "./fonts/PlayfairDisplay-VariableFont_wght.ttf",
  variable: "--playfair",
});

export const metadata: Metadata = {
  title: "Amy & Johan 2025",
  description: "Amy & Johans bröllop 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${islandMoments.variable} ${playFair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
