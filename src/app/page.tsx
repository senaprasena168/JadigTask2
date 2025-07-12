import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <div className='text-center'>
        <h1 className='text-6xl font-bold mb-8'>Jabar Istimewa Digital Academy Fullstack - Task 2</h1>
        <p className='text-xl mb-8 text-gray-600'>
          A Next.js application with routing and navigation
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12'>
          <Link
            href='/about'
            className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-lg transition-colors'
          >
            About Page
          </Link>
          <Link
            href='/profile'
            className='bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg transition-colors'
          >
            Profile Page
          </Link>
          <Link
            href='/products'
            className='bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-6 rounded-lg transition-colors'
          >
            Products Page
          </Link>
          <Link
            href='/nonexistent'
            className='bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-lg transition-colors'
          >
            404 Page Demo
          </Link>
        </div>

        <div className='mt-12'>
          <h2 className='text-2xl font-semibold mb-4'>Features Implemented:</h2>
          <ul className='text-left max-w-md mx-auto space-y-2'>
            <li>✅ Static Pages (About, Profile, Products)</li>
            <li>✅ Dynamic Routes (/products/[id])</li>
            <li>✅ Custom 404 Page</li>
            <li>✅ Navigation with Next.js Link</li>
            <li>✅ Responsive Design</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
