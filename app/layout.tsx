'use client';
import Link from "next/link";
import "@/styles/globals.css";
import { ReactNode, useEffect, useState } from "react";
import SignOutButton from '@/app/ui/signout';
// import { signOut } from '@/auth'; // Import the signOut function from your auth configuration
// import { PowerIcon } from '@heroicons/react/24/outline'; // Example icon (optional)


export default function RootLayout({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <html lang="en" data-theme={theme}>
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100..900&display=swap');
        </style>
      </head>
      <body>
        <header>
          <div>
            <Link href="/HCH-Home/"> <h1 className="roboto title header-title"> Handcrafted Haven</h1> </Link> 
            <nav className="header-links">
              <SignOutButton />
              <button className="inter" onClick={toggleTheme}>
                {theme === "light" ? "🌑 Dark Mode" : "☀️ Light Mode"}
              </button>
              <Link href="/HCH-Home/home" className="inter">Home</Link>
              <Link href="/HCH-Home/clients/shop" className="inter">Shop</Link>
              <Link href="/HCH-Home/login" className="inter">Login🤵</Link>
              
            </nav>
           
          </div>
        </header>
        <main>{children}</main>
        <footer>
          <h1 className="roboto title footer-title">Handcrafted Haven</h1>
          <div className="footer-bottom">
            <p className="inter copyright">&copy; Handcrafted Haven {new Date().getFullYear()} | WDD430</p>
            <Link href="/HCH-Home/sellersignup" className="inter">Become A Seller</Link>
            <Link href="/" className="inter">About Us</Link>
            <button className="inter" onClick={toggleTheme}>
              {theme === "light" ? "🌑 Dark Mode" : "☀️ Light Mode"}
            </button>
          </div>
        </footer>
      </body>
    </html>
  );
}
