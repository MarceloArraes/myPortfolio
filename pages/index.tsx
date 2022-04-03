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

      <div className="flex flex-grow flex-wrap items-center justify-center">
        <a href="https://Adaminter.org" target="_blank">
          <div className="relative mx-2 mb-6 h-40 w-56 max-w-xs flex-shrink-0 overflow-hidden rounded-lg bg-cover-pic bg-cover bg-center shadow-lg">
            <div className="backdrop-blur-[3px]">
              <div className="relative flex flex-wrap items-center justify-center px-10 pt-3">
                <img
                  className="relative w-12"
                  src="/adamintericon.svg"
                  alt="Adaminter.org"
                />
                <div>Adaminter.org</div>
                <span className="flex-wrap-2 flex items-center bg-transparent px-5 text-xs font-bold leading-none">
                  <img
                    className="relative w-8 animate-spin-slow"
                    src="/reacticon.png"
                    alt="reactjs"
                  />
                  <img
                    className="relative w-9 animate-spin-slow"
                    src="/djangoicon.png"
                    alt="reactjs"
                  />
                  <img
                    className="relative -ml-2 w-14 animate-spin-slow"
                    src="/nodejsicon.png"
                    alt="nodejs"
                  />
                </span>
              </div>
              <div className="relative px-2 pb-2 text-black">
                <span className="-mb-1 block opacity-75">
                  Havard Final Project
                </span>
                <div className="flex justify-between">
                  <span className="block break-normal text-lg font-semibold">
                    Reactjs+Django+Nodejs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </a>
        <div className="relative mx-2 mb-6 h-40 w-56 max-w-xs flex-shrink-0 overflow-hidden rounded-lg bg-blue-500 shadow-lg ">
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

        <div className="relative mx-2 mb-6 h-40 w-56 max-w-xs flex-shrink-0 overflow-hidden rounded-lg bg-purple-500 shadow-lg">
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

      <div className="flex w-full items-center justify-center border-t p-10">
        <div className="max-w-sm overflow-hidden rounded shadow-lg">
          <img className="w-full" src="/giphy.gif" alt="giphy.gif" />
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">Mountain</div>
            <p className="text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              #photography
            </span>
            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              #travel
            </span>
            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              #winter
            </span>
          </div>
        </div>
      </div>

      <footer className=" flex h-24 w-full items-center justify-center border-t ">
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
