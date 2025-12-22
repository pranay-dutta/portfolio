import { Theme } from "@radix-ui/themes";
import "@radix-ui/colors/black-alpha.css";
import "@radix-ui/colors/mauve.css";
import "@radix-ui/colors/violet.css";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <Theme appearance="dark">
          <main>
            <div className="lg:max-w-6/11 lg:ml-[22%] xl:max-w-4/11 xl:ml-[23%] md:p-8 md:pt-10 p-4">
              {children}
            </div>
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
