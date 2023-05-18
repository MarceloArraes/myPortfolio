import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import { useEffect } from 'react'
import Contact from '../components/contact'
import Header from '../components/header'
import Backgroundgraph from '../components/graphback'
import Title from '../components/title'
import {CarrouselCards, ProjectCards, SwiperCards} from '../components/projectCards'
import GitHubSession from '../components/githubSession'
import Footer from '../components/footer'

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme()

  //Here im redrawing everytime i change the theme
  //another way to do it is making a especial function on graphback that change only the colors.. maybe..
  useEffect(() => {
    setTheme('light')
  },[])
  useEffect(() => {
    Backgroundgraph(theme)
  }, [theme])

  return (
    <div className="isolate flex min-h-screen flex-col items-center justify-center bg-gray-200 py-2 dark:bg-gray-900">
      <Head>
        <title>Marcelo Portfolio Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <canvas
        id="nokey"
        className="z-index-10 absolute top-0  w-full dark:bg-transparent"
      >
        Your Browser Don't Support Canvas, Please Download Brave ^_^``
      </canvas>
      <Header />
      <div className="space-y-40">
        <label
          htmlFor="toogleA"
          className="absolute top-16 right-2 flex cursor-pointer items-center"
        >
          <div className="relative">
            <input
              id="toogleA"
              type="checkbox"
              className=" mb-1 h-4 w-10 appearance-none rounded-full bg-gray-400 shadow transition"
              onClick={() => {
                setTheme(theme === 'light' ? 'dark' : 'light')
              }}
            />
            {/*           <div className="h-4 w-10 rounded-full bg-gray-400 shadow-inner"></div> */}
            <div className="dot absolute -left-1 -top-1 h-6 w-6 rounded-full bg-white shadow transition"></div>
          </div>
          <div className="mb-3 ml-3 font-medium text-gray-700 dark:text-gray-200">
            {theme === 'light' ? 'Dark' : 'Light'}
          </div>
        </label>
        <Title />
        <div
          id="projects"
          className=" flex w-full flex-grow flex-wrap items-center justify-center border-t-2 border-gray-800 py-36 dark:border-gray-400"
        >
          <div className="mb-10 w-full text-center text-3xl font-bold">
            <h1>PROJECTS</h1>
            <CarrouselCards />
            <SwiperCards />
            <text>Teste</text>
          </div>
        </div>

        <GitHubSession />

        <div
          id="contact"
          className="w-full border-t-2 border-gray-800 py-10 dark:border-gray-400"
        >
          <div className="mb-10 w-full text-center text-3xl font-bold">
            <h1>CONTACT</h1>
          </div>
          <Contact />
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default Home
