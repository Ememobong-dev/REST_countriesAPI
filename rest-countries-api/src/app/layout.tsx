"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [isDarkMode, setIsDarkMode ] = useState(false);


  const handleBgChange = () => {
    setIsDarkMode((prev) => !prev);
  }


   useEffect( () => {
      const preferredDrkMode = localStorage.getItem('darkMode');
        if(preferredDrkMode !== null) {
          setIsDarkMode(JSON.parse(preferredDrkMode))
        }
    }, [])


    useEffect(() => {
      localStorage.setItem("darkMode", JSON.stringify(isDarkMode))
    }, [isDarkMode])


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${isDarkMode ? " bg-darkModeBg text-white " : "bg-lightModeBG" }  antialiased`}
      >
        <Navbar handleChangeMode = {handleBgChange} isDarkMode={isDarkMode}   />
        {children}
      </body>
    </html>
  );
}
