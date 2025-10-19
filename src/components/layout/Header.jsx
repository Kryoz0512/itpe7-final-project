import Link from "next/link";
import { Gamepad2 } from 'lucide-react';
import { Geist } from "next/font/google";
import * as motion from "motion/react-client"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <Gamepad2 className="size-15 text-white" />
          <Link
            href="/"
            className={`${geistSans.className} text-white font-bold text-2xl tracking-tight`}
            style={{  textShadow: "0 0 5px #ec4899, 0 0 5px #ec4899" }}
          >
            BRAINERS
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8 text-white text-sm font-medium">
          <Link href="/" className="hover:text-pink-300 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-pink-300 transition">
            About
          </Link>
          <Link href="/games" className="hover:text-pink-300 transition">
            Games
          </Link>
        </nav>
      </div>
    </header>
  );
}
