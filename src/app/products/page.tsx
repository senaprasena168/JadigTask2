import Link from 'next/link';

export default function Products() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Products</h1>
      <ul className="mt-4 text-lg">
        <li>
          <Link href="/products/1" className="text-blue-500 hover:underline">
            Product 1
          </Link>
        </li>
        <li>
          <Link href="/products/2" className="text-blue-500 hover:underline">
            Product 2
          </Link>
        </li>
        <li>
          <Link href="/products/3" className="text-blue-500 hover:underline">
            Product 3
          </Link>
        </li>
      </ul>
    </main>
  );
}