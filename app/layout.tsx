import { Container, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Squares from "./_ui/backgrounds/Squares/Squares";
import "./globals.css";
import SplashCursor from "./_ui/animations/SplashCursor/SplashCursor";


const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>
        <SplashCursor DENSITY_DISSIPATION={10} />
        <Theme appearance="dark">
          <main>
            <div className="absolute h-full">
              <Squares borderColor="#2227" speed={0.5} direction="left" squareSize={30} />
            </div>
            <Container size="2" className="md:mr-50 px-5 py-10 lg:p-10">
              {children}
            </Container>
          </main>
        </Theme>
      </body>
    </html>
  );
}
export const metadata: Metadata = {
  title: "Pranay Dutta",
  description: "I work on frontend development.",
};
