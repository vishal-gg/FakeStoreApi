import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./providers/ThemeProvider";
import Navbar from "./components/Navbar";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "fakeStoreApi - free products api",
  description: "fakeStoreApi is a free products API for testing and prototyping. It's a fake API with products that include images, prices, descriptions, and more. we also provide data for users where you can get all the users data and single user data.",
  keywords: "fakestoreapi, fake store api, free products api, fake api, fakestore api products fakeusersapi, fake users api, fake users data, fake users",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
