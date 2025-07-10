import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-9xl font-bold">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
      <p className="mt-2 text-lg">Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="mt-6 text-lg text-blue-500 hover:underline">
        Go back home
      </Link>
    </main>
  );
}