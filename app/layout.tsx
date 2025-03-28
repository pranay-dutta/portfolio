import { Container, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import "./theme-config.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pranay Dutta",
  description: "I work on frontend development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>
        <Theme appearance="dark">
          <main className="px-5 py-10 lg:p-10">
            <Container size="2" className="md:mr-50">
              {children}
            </Container>
          </main>
        </Theme>
      </body>
    </html>
  );
}
