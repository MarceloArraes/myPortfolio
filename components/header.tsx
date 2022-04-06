import React from 'react'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

function Header() {
  const [scrollDir, setScrollDir] = useState('scrolling down')
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    //print offset
    /*     const home = document.getElementById('home')
    const projects = document.getElementById('projects')
    const github = document.getElementById('github')
    const contact = document.getElementById('contact')
    const footer = document.getElementById('footer')

    console.log(window.pageYOffset)
    console.log('home.offsetTop', home?.offsetTop)
    console.log('projects.offsetTo', projects?.offsetTop)
    console.log('github.offsetTo', github?.offsetTop)
    console.log('contact.offsetTop', contact?.offsetTop)
    console.log('footer.offsetTop)', footer?.offsetTop) */

    return () => {
      //
    }
  }, [])

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
        //test if window.pageYOffset is inside the range of the home, projects, github, contact, footer
        //if it is, set the theme to dark
        //if it is not, set the theme to light
        if (
          window.pageYOffset > home?.offsetTop - 60 &&
          window.pageYOffset < projects?.offsetTop
        ) {
          console.log('home')
        } else if (
          window.pageYOffset > projects?.offsetTop - 60 &&
          window.pageYOffset < github?.offsetTop
        ) {
          console.log('projects')
        } else if (
          window.pageYOffset > github?.offsetTop - 60 &&
          window.pageYOffset < contact?.offsetTop
        ) {
          console.log('github')
        } else if (
          window.pageYOffset > contact?.offsetTop - 60 &&
          window.pageYOffset < footer?.offsetTop
        ) {
          console.log('contact')
        } else if (window.pageYOffset > footer?.offsetTop - 60) {
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
          <a href="#home">Home</a>

          <a href="#projects">Projects</a>

          <a href="#github">Github</a>

          <a href="#contact">Contact</a>

          <a href="#footer">Footer</a>
        </div>
      </div>
    </nav>
  )
}

export default Header
