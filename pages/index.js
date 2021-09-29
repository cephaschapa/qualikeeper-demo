import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="flex space-y-2 flex-col items-center justify-center h-screen p-2">
          <p className="text-2xl mb-10 font-bold text-white">Qualikeeper Farm Companion</p>
          <div className="h-auto bg-white space-y-3 w-full shadow-lg rounded-2xl p-4 border border-gray-300">
            <p className="text-center uppercase tex-gray-600">Login In</p>
            <input type="text" placeholder="Email" className="border border-gray-300 w-full p-3 rounded-2xl"/>
            <input type="password" placeholder="Password" className="border border-gray-300 w-full p-3 rounded-2xl"/>
            <Link href="/dashboard">
              <button className="w-full p-3 bg-blue-600 text-white rounded-2xl">LOGIN</button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="">
        
      </footer>
    </div>
  )
}
