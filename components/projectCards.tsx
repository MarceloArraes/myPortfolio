import { useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel"; // Import carousel component


//array of projects
const projects = [
  {
    name: 'Nasa Project',
    description: 'Space mission scheduler',
    site: 'https://gold-expensive-bream.cyclic.app/',
    image: '/nasaProjectBack.png',
    darkimage: true,
    siteIcon: '/adamintericon.svg',

    active: false,
    tecDescription: 'Nodejs, Reactjs, MongoDb',
    tecIcon1: '/nodejsicon.png',
    tecIcon2: '/reacticon.png',
    tecIcon3: '/nodejsicon.png',
  },
  {
    name: 'Adaminter.org',
    description: 'Nft Creator on Cardano blockchain',
    site: 'https://www.adaminter.org',
    image: '/adaminterback.png',
    darkimage: false,
    siteIcon: '/adamintericon.svg',

    active: false,
    tecDescription: 'Blockchain, Nextjs, Django, Nodejs',
    tecIcon1: '/reacticon.png',
    tecIcon2: '/djangoicon.png',
    tecIcon3: '/nodejsicon.png',
  },
  {
    name: 'Event Platform',
    description: 'A platform to display a online event',
    site: 'https://event-platform-etdp6plb8-marceloarraes.vercel.app/',
    image: '/eventplatform.png',
    darkimage: false,
    siteIcon: '/adamintericon.svg',

    active: false,
    tecDescription: 'Reactjs, Vite, Graphql, vime, tailwindcss',
    tecIcon1: '/reacticon.png',
    tecIcon2: '/typescripticon.png',
    tecIcon3: '/tailwindcssLogo.png',
  },
  {
    name: 'GeoCapital stock Tracker',
    description: 'A stock tracker for GeoCapital',
    site: 'https://geo-capital-online-portfolio.vercel.app/',
    image: '/GeoCapitalTest.png',
    darkimage: true,
    siteIcon: '/nutriNotes.png',

    active: false,
    tecDescription: 'Typescript, Nextjs, Tailwindcss',
    tecIcon1: '/typescripticon.png',
    tecIcon2: '/nextjsicon.png',
    tecIcon3: '/tailwindcssLogo.png',
  },
  {
    name: 'Nutri Notes',
    description: 'Nutritional information for health professionals',
    site: 'https://nutri-notes.vercel.app/',
    image: '/nutrinotesbg.png',
    darkimage: false,

    active: false,siteIcon: '/nutriNotes.png',
    tecDescription: 'Nextjs, Supabase, MaterialUi',
    tecIcon1: '/nextjsicon.png',
    tecIcon2: '/supabaseicon.png',
    tecIcon3: '/muiicon.png',
  },
  {
    name: 'Web Widget',
    description: 'A web widget for the web',
    site: 'https://vercel.com/marceloarraes/web-widget',
    image: '/webwidgetbg.png',
    darkimage: true,
    siteIcon: '/webwidgetIcon.png',

    active: false,
    tecDescription: 'Vite, Typescript, Tailwindcss',
    tecIcon1: '/vitelogo.svg',
    tecIcon2: '/typescripticon.png',
    tecIcon3: '/tailwindcssLogo.png',
  },
  {
    name: 'Bem Paggo Form',
    description: 'A front-end test for Bem Paggo company',
    site: 'https://bem-pago-form.vercel.app/',
    image: '/bempagobg.png',
    darkimage: false,
    siteIcon: '/bempaggoicon2.png',

    active: false,
    tecDescription: 'Typescript, MaterialUI, Styled Components',
    tecIcon1: '/typescripticon.png',
    tecIcon2: '/muiicon.png',
    tecIcon3: '/styledcomponentsicon3.png',
  },

  {
    name: 'My Portfolio',
    description: 'My portfolio with some projects.',
    site: 'https://marcelosportfolio.vercel.app/',
    image: '/marcelosPortfolioImage.png',
    darkimage: true,

    active: false,siteIcon: '/nutriNotes.png',
    tecDescription: 'Typescript, Nextjs, Tailwindcss',
    tecIcon1: '/typescripticon.png',
    tecIcon2: '/nextjsicon.png',
    tecIcon3: '/tailwindcssLogo.png',
  },
]

function ProjectCards() {
  return (
    <>
      <a href="https://Adaminter.org" target="_blank">
        <div
          id="image-vessel"
          className="relative mx-2 mb-6 h-40 w-56 max-w-xs flex-shrink-0 overflow-hidden rounded-lg bg-[url('/adaminterback.png')] bg-cover bg-center shadow-xl drop-shadow-xl"
        >
          <div className="backdrop-blur-[3px] duration-300 hover:opacity-10 hover:backdrop-blur-0">
            <div className="relative flex flex-wrap items-center justify-center px-10 pt-3 dark:text-black">
              <img
                className="relative w-12"
                src="/adamintericon.svg"
                alt="Adaminter.org"
              />
              <div>Adaminter.org</div>
              <span className="flex-wrap-2 flex items-center bg-transparent bg-white bg-opacity-50 px-5 text-xs font-bold leading-none ">
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
      <a href="https://nutri-notes.vercel.app/" target="_blank">
        <div className="relative mx-2 mb-6 h-40 w-56 max-w-xs flex-shrink-0 overflow-hidden rounded-lg bg-[url('/nutrinotesbg.png')] bg-cover bg-center shadow-xl drop-shadow-xl">
          <div className="backdrop-blur-[3px] duration-300 hover:opacity-10 hover:backdrop-blur-0">
            <div className="relative flex flex-col flex-wrap items-center justify-center px-10 pt-3 dark:text-black">
              <img
                className="relative w-10"
                src="/nutriNotes.png"
                alt="Nutri Notes icon"
              />
              <div> Nutri Notes </div>
              <span className="flex-wrap-2 flex items-center space-x-4 bg-transparent bg-white bg-opacity-50 px-5 text-xs font-bold leading-none">
                <img
                  className="relative w-8 animate-spin-slow"
                  src="/nextjsicon.png"
                  alt="nextjs"
                />
                <img
                  className="relative w-9 animate-spin-slow"
                  src="supabaseicon.png"
                  alt="supabase"
                />
                <img
                  className="relative w-6 animate-spin-slow"
                  src="/muiicon.png"
                  alt="material UI"
                />
              </span>
            </div>
            <div className="relative px-2 pb-2 text-black">
              <span className="-mb-1 block opacity-75">
                Nutritional Stats Project
              </span>
              <div className="flex justify-between">
                <span className="block break-normal text-lg font-semibold">
                  Nextjs+Supabase+MUI
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a href="https://bem-pago-form.vercel.app/" target="_blank">
        <div className="relative mx-2 mb-6 h-40 w-56 max-w-xs flex-shrink-0 overflow-hidden rounded-lg bg-[url('/bempagobg.png')] bg-cover bg-center shadow-xl drop-shadow-xl">
          <div className="backdrop-blur-[3px] duration-300 hover:opacity-10 hover:backdrop-blur-0">
            <div className="relative flex flex-wrap items-center justify-center px-10 pt-3 dark:text-black">
              <img
                className="relative w-12"
                src="/bempaggoicon2.png"
                alt="BemPaggo icon"
              />
              <div>bem-pago-form</div>
              <span className="flex-wrap-2 flex items-center gap-3 rounded-lg bg-transparent bg-black bg-opacity-20 py-1 px-5 text-xs font-bold leading-none">
                <img
                  className="relative w-6 animate-spin-slow"
                  src="/typescripticon.png"
                  alt="typescript"
                />
                <img
                  className="relative w-6 animate-spin-slow"
                  src="/muiicon.png"
                  alt="material UI"
                />
                <img
                  className="relative w-7 animate-spin-slow"
                  src="/styledcomponentsicon3.png"
                  alt="Styled Components"
                />
              </span>
            </div>
            <div className="relative px-2 pb-2 text-black">
              <span className="-mb-1 block opacity-75">
                Technical Test Project
              </span>
              <div className="flex justify-between">
                <span className="block break-normal text-lg font-semibold">
                  Typescript+MUI+StyledC
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a
        href="https://geo-capital-online-portfolio.vercel.app/"
        target="_blank"
      >
        <div className="relative mx-2 mb-6 h-40 w-56 max-w-xs flex-shrink-0 overflow-hidden rounded-lg bg-[url('/GeoCapitalTest.png')] bg-cover bg-center shadow-xl drop-shadow-xl">
          <div className="backdrop-blur-[3px] duration-300 hover:opacity-10 hover:backdrop-blur-0">
            <div className="relative flex flex-wrap items-center justify-center px-10 pt-1 dark:text-black">
              <img
                className="w-25 relative h-12 rounded-lg bg-gray-300 bg-opacity-30"
                src="/geocapitalIcon.png"
                alt="GeoCapital icon"
              />

              <div>GeoCapital Stock </div>
              <span className="flex-wrap-2 flex items-center gap-3 rounded-lg bg-transparent bg-gray-300 bg-opacity-20 py-1 px-5 text-xs font-bold leading-none">
                <img
                  className="relative w-7 animate-spin-slow"
                  src="/nextjsicon.png"
                  alt="Nextjs"
                />
                <img
                  className="relative w-6 animate-spin-slow"
                  src="/typescripticon.png"
                  alt="typescript"
                />
                <img
                  className="relative w-7 animate-spin-slow"
                  src="/tailwindcssLogo.png"
                  alt="TailwindCss"
                />
              </span>
            </div>
            <div className="relative px-2 pb-2 text-black">
              <span className="-mb-1 block opacity-75">
                Technical Test Project
              </span>
              <div className="flex justify-between">
                <span className="text-md block break-normal font-semibold">
                  Nextjs+Tailwind+Typescript
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  )
}

function CarrouselCards() {
  useEffect(() => {
    var next = document.getElementById('next')
    var prev = document.getElementById('prev')
    var projectCard = document.getElementById('projectCard')
    var slider = document.getElementById('slider')

    var isDragging = false
    var currentIndex = 0
    var startPos = 0
    var currentTranslate = 0
    var prevTranslate = 0
    var animationID = 0

    var allCards = Array.from(document.querySelectorAll('#projectCard'))

    allCards.forEach((card, index) => {
      card.addEventListener('dragstart', (e) => {
        e.preventDefault()
      })
      //touch events
      card.addEventListener('touchstart', touchStart(index))
      card.addEventListener('touchend', touchEnd(card))
      card.addEventListener('touchmove', touchMove())

      //mouse events
      card.addEventListener('mousedown', touchStart(index))
      card.addEventListener('mouseup', touchEnd(card))
      card.addEventListener('mouseleave', touchEnd(card))
      card.addEventListener('mousemove', touchMove())
    })
    window.oncontextmenu = function (e) {
      e.preventDefault()
      e.stopPropagation()
      return false
    }

    function touchStart(index: number) {
      return function (event: any) {
        currentIndex = index
        console.log('touchstart index: ', index)

        console.log('touchstart')

        startPos = event.type.includes('mouse')
          ? event.clientX
          : event.touches[0].clientX

        isDragging = true

        animationID = requestAnimationFrame(animation)
        //slider?.classList.add('cursor-grabbing')
      }
    }

    function touchEnd(card: Element) {
      return function (event: any) {
        if (isDragging) {
          console.log('touchend')
          isDragging = false
          cancelAnimationFrame(animationID)
          const movedBy = currentTranslate - prevTranslate

          if (movedBy < -100 && currentIndex < allCards.length - 1) {
            console.log('Entered moveby to right currentIndex', currentIndex)
            currentIndex += 1
          }
          if (movedBy > 100 && currentIndex > 0) {
            console.log('Entered moveby to left currentIndex', currentIndex)
            currentIndex = currentIndex - 1
          }
          setPositionByIndex(card, movedBy)
          //slider?.classList.remove('cursor-grabbing')
        }
      }
    }

    function touchMove() {
      return function (event: any) {
        const currentPosition = event.type.includes('mouse')
          ? event.clientX
          : event.touches[0].clientX
        if (isDragging) {
          currentTranslate = prevTranslate + currentPosition - startPos
        }
      }
    }
    function animation() {
      if (isDragging) {
        slider!.style.transform = `translateX(${currentTranslate}px)`
        requestAnimationFrame(animation)
      }
    }

    function setPositionByIndex(card: Element, movedBy: number) {
      if (movedBy < 0) {
        currentTranslate = prevTranslate - card.clientWidth - 16
      } else if (movedBy > 0 && currentIndex === 0) {
        currentTranslate = 0
      } else {
        currentTranslate = prevTranslate + card.clientWidth + 16
      }

      prevTranslate = currentTranslate
      if (Math.abs(prevTranslate) >= slider!.scrollWidth / 1.2) {
        currentTranslate = 0
        prevTranslate = 0
      }
      slider!.style.transform = `translateX(${currentTranslate}px)`
      //test if the card last card its on the left of the center of the screen
    }

    function goNext() {
      prevTranslate = prevTranslate - projectCard!.clientWidth - 16 //1Rem = 16px im using as space between cards.
      var slider = document.getElementById('slider')
      if (Math.abs(prevTranslate) >= slider!.scrollWidth / 1.2)
        prevTranslate = 0
      slider!.style.transform = 'translateX(' + prevTranslate + 'px)'
    }
    next!.addEventListener('click', goNext)
    function goPrev() {
      var slider = document.getElementById('slider')
      if (Math.abs(prevTranslate) === 0) prevTranslate = 0
      else prevTranslate = prevTranslate + projectCard!.clientWidth + 16
      slider!.style.transform = 'translateX(' + prevTranslate + 'px)'
    }
    prev!.addEventListener('click', goPrev)
  }, [])

  return (
    <div className="flex h-full w-full items-center justify-center py-24 px-4 sm:py-8">
      <div className="relative flex w-full items-center justify-center">
        {/* <span className="absolute left-1 z-20 h-20 w-20 rounded-full bg-gray-600 opacity-40"></span> */}
        <svg
          className="absolute left-0 z-20 ml-9 cursor-pointer dark:text-red-600"
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 1L1 7L7 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <button
          aria-label="slide backward"
          className="absolute left-0 z-30 h-20 w-20  cursor-pointer rounded-full hover:bg-gray-400 hover:opacity-60 focus:outline-none sm:bg-gray-600 sm:opacity-40 "
          id="prev"
        ></button>
        <div className="h-full w-full overflow-hidden rounded-lg">
          <div
            id="slider"
            className="flex h-full max-w-xs flex-row items-center justify-start space-x-4 transition duration-700 ease-out"
          >
            {/* map projects here */}
            {projects.map((project, index) => (
              <div
                key={index}
                id="projectCard"
                className="relative flex h-48 w-64 sm:w-72 max-w-xs flex-shrink-0 duration-300 ease-in-out hover:scale-105  "
              >
                <img
                  src={project.image}
                  alt="Project print"
                  className="w-full rounded-lg object-cover object-center"
                />
                <a
                  href={project.site}
                  target="_blank"
                  className="absolute z-10 h-full w-full rounded-lg backdrop-blur transition duration-300 ease-in-out hover:opacity-10 hover:backdrop-blur-0"
                >
                  <div className="absolute h-full w-full rounded-lg bg-gray-800 bg-opacity-30 p-6 sm:p-4">
                    <h2
                      className={`text-base leading-4 text-gray-900 lg:text-xl lg:leading-5 ${
                        project.darkimage ? 'text-gray-200' : 'text-gray-900'
                      }`}
                    >
                      {project.name}
                    </h2>
                    <div className="flex h-full items-end pb-3">
                      <h3
                        className={`text-lg font-semibold leading-5 text-gray-900 lg:text-2xl lg:leading-6 ${
                          project.darkimage ? 'text-gray-200' : 'text-gray-900'
                        }`}
                      >
                        <span className="font-light italic">
                          {project.tecDescription}
                        </span>
                        <span className="flex items-center bg-transparent bg-white bg-opacity-50 px-5 text-xs font-bold leading-none ">
                          <img
                            className="relative w-9 animate-spin-slow"
                            src={project.tecIcon1}
                            alt={project.tecIcon1}
                          />
                          <img
                            className="relative w-9 animate-spin-slow"
                            src={project.tecIcon2}
                            alt={project.tecIcon2}
                          />
                          <img
                            className="relative w-9 animate-spin-slow"
                            src={project.tecIcon3}
                            alt={project.tecIcon3}
                          />
                        </span>
                        {project.description}
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
        <svg
          className="absolute right-0 z-20 mr-9 cursor-pointer dark:text-red-600"
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L7 7L1 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <button
          aria-label="slide forward"
          className="absolute right-0 z-30 h-20 w-20 cursor-pointer rounded-full  hover:bg-gray-400 hover:opacity-60 focus:outline-none sm:bg-gray-600 sm:opacity-40"
          id="next"
        ></button>
      </div>
    </div>
  )
}

const MyCarousel = () => {
  return (
    <div className='w-1/2' >
    <Carousel autoPlay infiniteLoop>
      {projects.map((project, index) => (
          <div className='' key={`index${index}`}>
              <img
                  src={project.image}
                  alt={`Image ${index}`}
                  // className='h-80'
            />
            <p className='legend absolute overflow-hidden text-ellipsis w-full text-center'>Caption {index}</p>
          </div>
        ))}
      </Carousel>
      </div>
  );
};


export {CarrouselCards, ProjectCards, MyCarousel}
