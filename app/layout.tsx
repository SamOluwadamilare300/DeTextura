
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Toaster } from "@/components/ui/toaster";
import Providers from "./components/Providers";




const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Textura",
  description: "Printing Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body

        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
  <div className="inline-flex gap-1 items-center">
    <p className="text-white/60">
      Login or Sign Up before customizations.<span className="hidden sm:inline" >You might lose your custom design doing so at the checkout while redirecting!</span> 
    </p>
  </div>
</div>

        <Navbar/>
        <main className='flex grainy-light flex-col min-h-[calc(100vh-3.5rem-1px)]'>
          <div className='flex-1 flex flex-col h-full'>
          <Providers> 
           {children}
          </Providers>
          </div>

           <Footer/>
           </main>
           <Toaster/>
      </body>
   
    </html>
     
  );
}
