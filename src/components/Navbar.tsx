import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="flex space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link href="/profile" className="text-white hover:text-gray-300">
            Profile
          </Link>
          <Link href="/products" className="text-white hover:text-gray-300">
            Products
          </Link>
        </div>
      </div>
    </nav>
  );
}