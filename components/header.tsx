import React from 'react'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

function Header() {
  const [scrollDir, setScrollDir] = useState('scrolling down')
  const { theme, setTheme } = useTheme()

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    console.log(e)
    e.currentTarget.classList.add('active:bg-blue-800')

    const { target } = e
    if (target) {
      window.location.href = (target as HTMLLinkElement).href
    }
  }

  useEffect(() => {
    const home = document.getElementById('home')
    const projects = document.getElementById('projects')
    const github = document.getElementById('github')
    const contact = document.getElementById('contact')
    const footer = document.getElementById('footer')

    const threshold = 0
    let lastScrollY = window.pageYOffset
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }
      setScrollDir(scrollY > lastScrollY ? 'scrolling down' : 'scrolling up')
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        if (
          home &&
          projects &&
          window.pageYOffset > home?.offsetTop - 60 &&
          window.pageYOffset < projects?.offsetTop
        ) {
          console.log('home')
        } else if (
          projects &&
          github &&
          window.pageYOffset > projects?.offsetTop - 60 &&
          window.pageYOffset < github?.offsetTop
        ) {
          console.log('projects')
        } else if (
          contact &&
          github &&
          window.pageYOffset > github?.offsetTop - 60 &&
          window.pageYOffset < contact?.offsetTop
        ) {
          console.log('github')
        } else if (
          contact &&
          footer &&
          window.pageYOffset > contact?.offsetTop - 60 &&
          window.pageYOffset < footer?.offsetTop
        ) {
          console.log('contact')
        } else if (footer && window.pageYOffset > footer?.offsetTop - 150) {
          console.log('footer')
        } else {
          console.log('last else on header')
        }

        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)
    console.log(scrollDir)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollDir])

  //position: sticky;
  //top: 0;
  return (
    <nav className="fixed top-0 z-10">
      <div className="container mx-10 flex w-screen justify-center bg-white px-10 text-black">
        <div className="flex flex-row justify-items-center space-x-4">
          <a
            href="#home"
            onClick={handleClick}
            className="::selection:bg-black"
          >
            Home
          </a>

          <a href="#projects" onClick={handleClick}>
            Projects
          </a>

          <a href="#github" onClick={handleClick}>
            Github
          </a>

          <a href="#contact" onClick={handleClick}>
            Contact
          </a>

          <a href="#footer" onClick={handleClick}>
            Footer
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header
