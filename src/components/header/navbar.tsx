import Link from "next/link";


export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
      <Link href="/" className="text-xl font-bold mr-5">
        TheHithub
      </Link>
      <div className="flex space-x-4">
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/sports" className="hover:underline">
          Sports
        </Link>
        <Link href="/gallery" className="hover:underline">
          Gallery
        </Link>
        <Link href="/pricing" className="hover:underline">
          Pricing
        </Link>
        <Link href="/rules" className="hover:underline">
          Rules
        </Link>
      </div>
    </nav>
  );
}