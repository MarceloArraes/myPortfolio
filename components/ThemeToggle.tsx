import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { Backgroundgraph } from './graphback'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
    const [toggleText, setToggleText] = useState('Light')
    useEffect(() => {
    setTheme('light')
    }, [])
    useEffect(() => {
    setToggleText(theme === 'light' ? 'Dark' : 'Light')
    Backgroundgraph(theme)
  }, [theme])
  return (
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
            {toggleText}
          </div>
        </label>
  )
}

export {ThemeToggle}