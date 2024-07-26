import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Scroll from "@/components/SmoothScroll";
import ScrollToTop from "@/components/ScrollToTop";
import '@/app/styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeadComponent from "@/components/HeadComponent";
import State from "@/context/state/State";
import Head from 'next/head';
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ostraders",
  description: "Car Dealership",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/OS Traders.png" type="image/x-icon" sizes="16x16" />
      </head>
      <body className={inter.className}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KNPVD5PH"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <State>
          <Navbar />
          <Scroll />
          <ScrollToTop />
          <HeadComponent />
          <div className={`smoothContainer`}>
            {children}
            <Footer />
          </div>
        </State>
      </body>
    </html>
  );
}
