import type { NextPage } from 'next'
import {Contact} from '../components/Contact'
import {Header} from '../components/Header'
import {Header2} from '../components/header2'
import Title from '../components/title'
import { MyCarousel} from '../components/projectCards'
import GitHubSession from '../components/githubSession'
import Footer from '../components/footer'
import { ThemeToggle } from '../components/ThemeToggle'

const Home: NextPage = () => {
  return (
    <div className="isolate flex min-h-screen flex-col items-center justify-center bg-gray-200 py-2 dark:bg-gray-900">

      <Header />
      {/* <Header2 /> */}
      <div className="space-y-40">
        <ThemeToggle />
        <Title />
        <div
          id="projects"
          className=" flex w-full flex-grow flex-wrap items-center justify-center border-t-2 border-gray-800 py-36 dark:border-gray-400"
        >
          <div className="mb-10 w-full text-center items-center justify-center text-3xl font-bold">
            <h1>WEB PROJECTS</h1>
          </div>
          <MyCarousel />
        </div>
        <div
          id="mobile_projects"
          className=" flex w-full flex-grow flex-wrap items-center justify-center border-t-2 border-gray-800 py-36 dark:border-gray-400"
        >
          <div className="mb-10 w-full text-center items-center justify-center text-3xl font-bold">
            <h1>MOBILE PROJECTS</h1>
          </div>
          <text>Here soon... </text>
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
