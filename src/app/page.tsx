import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-[#e8ecfd]">
      <Image src="/logo.png" alt="logo" width={300} height={300} />
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black">
        Welcome to GoTeam Manager
      </h1>
      <p className='text-base sm:text-lg md:text-xl mb-8 text-black'>
        You can access different versions of the dashboard by clicking the links below.
      </p>
      <Link 
        href="/admin" 
        className="w-64 px-6 py-3 bg-go-green text-black border-go-green-shadow hover:bg-go-cyan hover:border-t-go-cyan-shadow transition-colors rounded-lg border-t-2 text-center"
      >
        Go to Admin Dashboard
      </Link>
      <Link 
        href="/manager" 
        className="w-64 px-6 py-3 bg-go-green text-black border-go-green-shadow hover:bg-go-cyan hover:border-t-go-cyan-shadow transition-colors rounded-lg border-t-2 mt-4 text-center"
      >
        Go to Manager Dashboard
      </Link>
      <Link 
        href="/user" 
        className="w-64 px-6 py-3 bg-go-green text-black border-go-green-shadow hover:bg-go-cyan hover:border-t-go-cyan-shadow transition-colors rounded-lg border-t-2 mt-4 text-center"
      >
        Go to User Dashboard
      </Link>
    </main>
  )
}