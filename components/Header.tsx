import React from 'react'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Head from 'next/head'

function Header() {
  const [scrollDir, setScrollDir] = useState('scrolling down')
  const { theme, setTheme } = useTheme()

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    console.log(e)
    //e.currentTarget.classList.add('active:bg-blue-800')

    const { target } = e
    if (target) {
      window.location.href = (target as HTMLLinkElement).href
    }
  }

  function isScrolledIntoView(el: HTMLElement) {
    var rect = el.getBoundingClientRect()
    var elemTop = rect.top
    var elemBottom = rect.bottom

    /*    console.log('scrollY', window.scrollY)
    console.log('elemTop', elemTop)
    console.log('elemBottom', elemBottom) */

    // Only completely visible elements return true:
    //var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight

    // Partially visible elements return true:
    var isVisible = elemTop < window.innerHeight && elemBottom >= 0
    return isVisible
  }

  useEffect(() => {
    const indexSessions = document.querySelectorAll(
      '#home, #projects, #github, #contact, #footer'
    )

    const navSessions = document.querySelectorAll(
      '#nav-home, #nav-projects, #nav-github, #nav-contact, #nav-footer'
    )

    const onScroll = () => {
      //declare current as empty string
      var current = ''

      indexSessions.forEach((section) => {
        if (section instanceof HTMLElement) {
          //console.log('section: ', section)
          const sectionTop = section.offsetTop
          //if (scrollY >= sectionTop - 60) {
          if (isScrolledIntoView(section)) {
            if (section) {
              current = section.getAttribute('id') as string
            }
          }
        }
      })
      navSessions.forEach((li) => {
        li.classList.remove(
          'rounded-lg',
          'duration-300',
          'text-blue-600',
          'border-b-4',
          'border-gray-400'
        )

        if (li.classList.contains(current)) {
          li.classList.add(
            'rounded-lg',
            'duration-300',
            'text-blue-600',
            'border-b-4',
            'border-gray-400'
          )
        }
      })
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollDir])

  return (
    <>
      <Head>
        <title>Marcelo Portfolio Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <canvas
        id="nokey"
        className="z-index-10 absolute top-0 w-screen dark:bg-transparent"
      >
        Your Browser Don't Support Canvas, Please Download Brave ^_^``
      </canvas>
      <nav className="fixed top-0 z-50">
        <div className="container flex h-16 w-screen justify-center rounded-lg bg-gray-300 py-3 text-black bg-blend-multiply shadow-xl drop-shadow-xl">
          <div className="flex flex-row justify-items-center">
            <a
              href="#home"
              id="nav-home"
              onClick={handleClick}
              className="home -mb-1 p-2"
            >
              Home
            </a>
            <a
              href="#projects"
              className="projects -mb-1 p-2"
              id="nav-projects"
              onClick={handleClick}
            >
              Projects
            </a>

            <a
              href="#github"
              className="github -mb-1 p-2"
              id="nav-github"
              onClick={handleClick}
            >
              Github
            </a>

            <a
              href="#contact"
              className="contact -mb-1 p-2"
              id="nav-contact"
              onClick={handleClick}
            >
              Contact
            </a>

            <a
              href="#footer"
              className="footer -mb-1 p-2"
              id="nav-footer"
              onClick={handleClick}
            >
              Footer
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export { Header }
