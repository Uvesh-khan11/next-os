import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Scroll from "@/components/SmoothScroll";
import ScrollToTop from "@/components/ScrollToTop";
import '@/app/styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "@/components/Head";
import State from "@/context/state/State";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ostraders",
  description: "Car Dealership",
};


export default function RootLayout({ children }) {



  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet" />

        <link rel="shortcut icon" href="/images/OS TRADERS.png" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <State>
          <Navbar />
          <Scroll />
          <ScrollToTop />
          <Head />
          <div className={`smoothContainer`}>
            {children}
            <Footer />
          </div>
        </State>
      </body>
    </html >
  );
}
