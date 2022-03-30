import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="py-10">
        <div className='className="flex text-center" w-full flex-1 flex-col items-center justify-center px-20'>
          <h1 className="text-6xl font-bold">
            Welcome to{' '}
            <a className="text-blue-600" href="https://nextjs.org">
              Next.js!
            </a>
          </h1>
          <p className="mt-3 text-2xl">
            Get started by editing{' '}
            <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
              pages/index.tsx
            </code>
          </p>
        </div>
      </main>
      <div className="flex flex-wrap items-center justify-center">
        <div className="relative mx-2 mb-6 max-w-xs flex-shrink-0 overflow-hidden rounded-lg bg-yellow-500 shadow-lg">
          <svg
            className="absolute bottom-0 left-0 mb-8"
            viewBox="0 0 375 283"
            fill="none"
          ></svg>

          <div className="relative flex items-center justify-center px-10 pt-10">
            <div className="absolute bottom-0 left-0 -mb-24 ml-3 block h-48 w-48"></div>
            <picture>
              <source srcSet="/images/object/5.webp" type="image/webp" />
              <source srcSet="/images/object/5.png" />
              <img
                className="relative w-40"
                src="/images/object/5.png"
                alt="shopping item"
              />
            </picture>
          </div>
          <div className="relative mt-6 px-6 pb-6 text-white">
            <span className="-mb-1 block opacity-75">Indoor</span>
            <div className="flex justify-between">
              <span className="block text-xl font-semibold">Peace Lily</span>
              <span className="flex items-center rounded-full bg-white px-3 py-2 text-xs font-bold leading-none text-yellow-500">
                $36.00
              </span>
            </div>
          </div>
        </div>
        <div className="relative mx-2 mb-6 max-w-xs flex-shrink-0 overflow-hidden rounded-lg bg-blue-500 shadow-lg ">
          <svg
            className="absolute bottom-0 left-0 mb-8"
            viewBox="0 0 375 283"
            fill="none"
          ></svg>
          <div className="relative flex items-center justify-center px-10 pt-10">
            <div className="absolute bottom-0 left-0 -mb-24 ml-3 block h-48 w-48"></div>
            <img
              className="relative w-40"
              src="/images/object/6.png"
              alt="shopping"
            />
          </div>
          <div className="relative mt-6 px-6 pb-6 text-white">
            <span className="-mb-1 block opacity-75">Outdoor</span>
            <div className="flex justify-between">
              <span className="block text-xl font-semibold">Monstera</span>
              <span className="flex items-center rounded-full bg-white px-3 py-2 text-xs font-bold leading-none text-blue-500">
                $45.00
              </span>
            </div>
          </div>
        </div>
        <div className="relative mx-2 mb-6 max-w-xs flex-shrink-0 overflow-hidden rounded-lg bg-purple-500 shadow-lg">
          <svg
            className="absolute bottom-0 left-0 mb-8"
            viewBox="0 0 375 283"
            fill="none"
          ></svg>
          <div className="relative flex items-center justify-center px-10 pt-10">
            <div className="absolute bottom-0 left-0 -mb-24 ml-3 block h-48 w-48"></div>
            <img
              className="relative w-40"
              src="/images/object/7.png"
              alt="shopping"
            />
          </div>
          <div className="relative mt-6 px-6 pb-6 text-white">
            <span className="-mb-1 block opacity-75">Outdoor</span>
            <div className="flex justify-between">
              <span className="block text-xl font-semibold">Oak Tree</span>
              <span className="flex items-center rounded-full bg-white px-3 py-2 text-xs font-bold leading-none text-purple-500">
                $68.50
              </span>
            </div>
          </div>
        </div>
      </div>

      <footer className="flex h-24 w-full items-center justify-center border-t ">
        <p className="flex items-center justify-center gap-2">
          Powered by{' '}
          <Image
            src="/Doom-2-Cheats.png"
            alt="Doom Guy Face"
            width={72}
            height={56}
          />
          <Image
            src="/doomguygif.gif"
            alt="Doom Guy Face"
            width={72}
            height={56}
          />
          <Image src="/giphy.gif" alt="Doom Guy Face" width={72} height={56} />
        </p>
      </footer>
    </div>
  )
}

export default Home
