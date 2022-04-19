import { useEffect } from 'react'

//array of projects
const projects = [
  {
    name: 'Adaminter.org',
    description: 'Nft Creator on Cardano blockchain',
    site: 'https://www.adaminter.org',
    image: '/adaminterback.png',
    tecDescription: 'Typescript, Nextjs, Tailwindcss',
    tecIcon1: '/reacticon.png',
    tecIcon2: '/djangoicon.png',
    tecIcon3: '/nodejsicon.png',
  },
  {
    name: 'Project 2',
    description: 'This is a project',
    site: 'https://www.google.com',
    image: 'https://source.unsplash.com/random/400x200',
    tecDescription: 'Typescript, Nextjs, Tailwindcss',
    tecIcon1: 'https://source.unsplash.com/random/100x100',
    tecIcon2: 'https://source.unsplash.com/random/100x100',
    tecIcon3: 'https://source.unsplash.com/random/100x100',
  },
  {
    name: 'Project 3',
    description: 'This is a project',
    site: 'https://www.google.com',
    image: 'https://source.unsplash.com/random/400x200',
    tecDescription: 'Typescript, Nextjs, Tailwindcss',
    tecIcon1: 'https://source.unsplash.com/random/100x100',
    tecIcon2: 'https://source.unsplash.com/random/100x100',
    tecIcon3: 'https://source.unsplash.com/random/100x100',
  },
  {
    name: 'Project 4',
    description: 'This is a project',
    site: 'https://www.google.com',
    image: 'https://source.unsplash.com/random/400x200',
    tecDescription: 'Typescript, Nextjs, Tailwindcss',
    tecIcon1: 'https://source.unsplash.com/random/100x100',
    tecIcon2: 'https://source.unsplash.com/random/100x100',
    tecIcon3: 'https://source.unsplash.com/random/100x100',
  },
  {
    name: 'Project 5',
    description: 'This is a project',
    site: 'https://www.google.com',
    image: 'https://source.unsplash.com/random/400x200',
    tecDescription: 'Typescript, Nextjs, Tailwindcss',
    tecIcon1: 'https://source.unsplash.com/random/100x100',
    tecIcon2: 'https://source.unsplash.com/random/100x100',
    tecIcon3: 'https://source.unsplash.com/random/100x100',
  },
  {
    name: 'Project 6',
    description: 'This is a project',
    site: 'https://www.google.com',
    image: 'https://source.unsplash.com/random/400x200',
    tecDescription: 'Typescript, Nextjs, Tailwindcss',
    tecIcon1: 'https://source.unsplash.com/random/100x100',
    tecIcon2: 'https://source.unsplash.com/random/100x100',
    tecIcon3: 'https://source.unsplash.com/random/100x100',
  },
  {
    name: 'Project 7',
    description: 'This is a project',
    site: 'https://www.google.com',
    image: 'https://source.unsplash.com/random/400x200',
    tecDescription: 'Typescript, Nextjs, Tailwindcss',
    tecIcon1: 'https://source.unsplash.com/random/100x100',
    tecIcon2: 'https://source.unsplash.com/random/100x100',
    tecIcon3: 'https://source.unsplash.com/random/100x100',
  },
  {
    name: 'Project 8',
    description: 'This is a project',
    site: 'https://www.google.com',
    image: 'https://source.unsplash.com/random/400x200',
    tecDescription: 'Typescript, Nextjs, Tailwindcss',
    tecIcon1: 'https://source.unsplash.com/random/100x100',
    tecIcon2: 'https://source.unsplash.com/random/100x100',
    tecIcon3: 'https://source.unsplash.com/random/100x100',
  },
  {
    name: 'Project 9',
    description: 'This is a project',
    site: 'https://www.google.com',
    image: 'https://source.unsplash.com/random/400x200',
    tecDescription: 'Typescript, Nextjs, Tailwindcss',
    tecIcon1: 'https://source.unsplash.com/random/100x100',
    tecIcon2: 'https://source.unsplash.com/random/100x100',
    tecIcon3: 'https://source.unsplash.com/random/100x100',
  },
]

function ProjectCards() {
  useEffect(() => {}, [])

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
              <span className="flex-wrap-2 flex items-center bg-transparent bg-white bg-opacity-50 px-5 text-xs font-bold leading-none">
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

    let defaultTransform = 0
    function goNext() {
      defaultTransform = defaultTransform - 398
      var slider = document.getElementById('slider')
      if (Math.abs(defaultTransform) >= slider!.scrollWidth / 1.7)
        defaultTransform = 0
      slider!.style.transform = 'translateX(' + defaultTransform + 'px)'
    }
    next!.addEventListener('click', goNext)
    function goPrev() {
      var slider = document.getElementById('slider')
      if (Math.abs(defaultTransform) === 0) defaultTransform = 0
      else defaultTransform = defaultTransform + 398
      slider!.style.transform = 'translateX(' + defaultTransform + 'px)'
    }
    prev!.addEventListener('click', goPrev)
  }, [])

  return (
    <div className="flex h-full w-full items-center justify-center py-24 px-4 sm:py-8">
      <div className="relative flex w-full items-center justify-center">
        <button
          aria-label="slide backward"
          className="absolute left-0 z-30 h-full w-1/12 cursor-pointer  focus:outline-none  focus:ring-offset-2"
          id="prev"
        >
          <svg
            className="ml-10 dark:text-gray-900"
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
        </button>
        <div className="mx-auto h-full w-full overflow-x-hidden overflow-y-hidden">
          <div
            id="slider"
            className="flex h-full flex-row items-center justify-start space-x-4 transition duration-700 ease-out"
          >
            {/* map projects here */}
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative flex w-full flex-shrink-0  sm:w-auto"
              >
                <img
                  src={project.image}
                  alt="black chair and white table"
                  className="w-full max-w-sm object-cover object-center"
                />
                <a
                  href={project.site}
                  target="_blank"
                  className="absolute z-10 h-full w-full backdrop-blur transition duration-300 ease-in-out hover:opacity-10 hover:backdrop-blur-0"
                >
                  <div className="absolute h-full w-full bg-gray-800 bg-opacity-30 p-6">
                    <h2 className="text-base leading-4 text-white dark:text-gray-900 lg:text-xl lg:leading-5">
                      {project.name}
                    </h2>
                    <div className="flex h-full items-end pb-6">
                      <h3 className="text-xl font-semibold leading-5 text-white dark:text-gray-900 lg:text-2xl lg:leading-6">
                        <span className="flex items-center bg-transparent bg-white bg-opacity-50 px-5 text-xs font-bold leading-none ">
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
                        {project.description}
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
        <button
          aria-label="slide forward"
          className="absolute right-0 z-30 h-full w-1/12  focus:outline-none  focus:ring-offset-2"
          id="next"
        >
          <svg
            className="mr-10 dark:text-gray-900"
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
        </button>
      </div>
    </div>
  )
}

export default CarrouselCards

/*               <div className="relative flex w-full flex-shrink-0 sm:w-auto">
                <img
                  src={project.image}
                  alt="black chair and white table"
                  className="w-full object-cover object-center"
                />
                <div className="absolute h-full w-full bg-gray-800 bg-opacity-30 p-6">
                  <h2 className="text-base leading-4 text-white dark:text-gray-900 lg:text-xl lg:leading-5">
                    {project.name}
                  </h2>
                  <div className="flex h-full items-end pb-6">
                    <h3 className="text-xl font-semibold leading-5 text-white dark:text-gray-900 lg:text-2xl lg:leading-6">
                      {project.description}
                    </h3>
                  </div>
                </div>
              </div> */

/* 
            <div className="relative flex w-full flex-shrink-0 sm:w-auto">
              <img
                src="https://i.ibb.co/fDngH9G/carosel-1.png"
                alt="black chair and white table"
                className="w-full object-cover object-center"
              />
              <div className="absolute h-full w-full bg-gray-800 bg-opacity-30 p-6">
                <h2 className="text-base leading-4 text-white dark:text-gray-900 lg:text-xl lg:leading-5">
                  Catalog 1
                </h2>
                <div className="flex h-full items-end pb-6">
                  <h3 className="text-xl font-semibold leading-5 text-white dark:text-gray-900 lg:text-2xl lg:leading-6">
                    Minimal Interior
                  </h3>
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-shrink-0 sm:w-auto">
              <img
                src="https://i.ibb.co/DWrGxX6/carosel-2.png"
                alt="sitting area"
                className="w-full object-cover object-center"
              />
              <div className="absolute h-full w-full bg-gray-800 bg-opacity-30 p-6">
                <h2 className="text-base leading-4 text-white dark:text-gray-900 lg:text-xl lg:leading-5">
                  Catalog 2
                </h2>
                <div className="flex h-full items-end pb-6">
                  <h3 className="text-xl font-semibold leading-5 text-white dark:text-gray-900 lg:text-2xl lg:leading-6">
                    Minimal Interior
                  </h3>
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-shrink-0 sm:w-auto">
              <img
                src="https://i.ibb.co/tCfVky2/carosel-3.png"
                alt="sitting area"
                className="w-full object-cover object-center"
              />
              <div className="absolute h-full w-full bg-gray-800 bg-opacity-30 p-6">
                <h2 className="text-base leading-4 text-white dark:text-gray-900 lg:text-xl lg:leading-5">
                  Catalog 2
                </h2>
                <div className="flex h-full items-end pb-6">
                  <h3 className="text-xl font-semibold leading-5 text-white dark:text-gray-900 lg:text-2xl lg:leading-6">
                    Minimal Interior
                  </h3>
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-shrink-0 sm:w-auto">
              <img
                src="https://i.ibb.co/rFsGfr5/carosel-4.png"
                alt="sitting area"
                className="w-full object-cover object-center"
              />
              <div className="absolute h-full w-full bg-gray-800 bg-opacity-30 p-6">
                <h2 className="text-base leading-4 text-white dark:text-gray-900 lg:text-xl lg:leading-5">
                  Catalog 2
                </h2>
                <div className="flex h-full items-end pb-6">
                  <h3 className="text-xl font-semibold leading-5 text-white dark:text-gray-900 lg:text-2xl lg:leading-6">
                    Minimal Interior
                  </h3>
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-shrink-0 sm:w-auto">
              <img
                src="https://i.ibb.co/fDngH9G/carosel-1.png"
                alt="black chair and white table"
                className="w-full object-cover object-center"
              />
              <div className="absolute h-full w-full bg-gray-800 bg-opacity-30 p-6">
                <h2 className="text-base leading-4 text-white dark:text-gray-900 lg:text-xl lg:leading-5">
                  Catalog 2
                </h2>
                <div className="flex h-full items-end pb-6">
                  <h3 className="text-xl font-semibold leading-5 text-white dark:text-gray-900 lg:text-2xl lg:leading-6">
                    Minimal Interior
                  </h3>
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-shrink-0 sm:w-auto">
              <img
                src="https://i.ibb.co/DWrGxX6/carosel-2.png"
                alt="sitting area"
                className="w-full object-cover object-center"
              />
              <div className="absolute h-full w-full bg-gray-800 bg-opacity-30 p-6">
                <h2 className="text-base leading-4 text-white dark:text-gray-900 lg:text-xl lg:leading-5">
                  Catalog 2
                </h2>
                <div className="flex h-full items-end pb-6">
                  <h3 className="text-xl font-semibold leading-5 text-white dark:text-gray-900 lg:text-2xl lg:leading-6">
                    Minimal Interior
                  </h3>
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-shrink-0 sm:w-auto">
              <img
                src="https://i.ibb.co/tCfVky2/carosel-3.png"
                alt="sitting area"
                className="w-full object-cover object-center"
              />
              <div className="absolute h-full w-full bg-gray-800 bg-opacity-30 p-6">
                <h2 className="text-base leading-4 text-white dark:text-gray-900 lg:text-xl lg:leading-5">
                  Catalog 2
                </h2>
                <div className="flex h-full items-end pb-6">
                  <h3 className="text-xl font-semibold leading-5 text-white dark:text-gray-900 lg:text-2xl lg:leading-6">
                    Minimal Interior
                  </h3>
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-shrink-0 sm:w-auto">
              <img
                src="https://i.ibb.co/rFsGfr5/carosel-4.png"
                alt="sitting area"
                className="w-full object-cover object-center"
              />
              <div className="absolute h-full w-full bg-gray-800 bg-opacity-30 p-6">
                <h2 className="text-base leading-4 text-white dark:text-gray-900 lg:text-xl lg:leading-5">
                  Catalog 2
                </h2>
                <div className="flex h-full items-end pb-6">
                  <h3 className="text-xl font-semibold leading-5 text-white dark:text-gray-900 lg:text-2xl lg:leading-6">
                    Minimal Interior
                  </h3>
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-shrink-0 sm:w-auto">
              <img
                src="https://i.ibb.co/fDngH9G/carosel-1.png"
                alt="black chair and white table"
                className="w-full object-cover object-center"
              />
              <div className="absolute h-full w-full bg-gray-800 bg-opacity-30 p-6">
                <h2 className="text-base leading-4 text-white dark:text-gray-900 lg:text-xl lg:leading-5">
                  Catalog 2
                </h2>
                <div className="flex h-full items-end pb-6">
                  <h3 className="text-xl font-semibold leading-5 text-white dark:text-gray-900 lg:text-2xl lg:leading-6">
                    Minimal Interior
                  </h3>
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-shrink-0 sm:w-auto">
              <img
                src="https://i.ibb.co/DWrGxX6/carosel-2.png"
                alt="sitting area"
                className="w-full object-cover object-center"
              />
              <div className="absolute h-full w-full bg-gray-800 bg-opacity-30 p-6">
                <h2 className="text-base leading-4 text-white dark:text-gray-900 lg:text-xl lg:leading-5">
                  Catalog 2
                </h2>
                <div className="flex h-full items-end pb-6">
                  <h3 className="text-xl font-semibold leading-5 text-white dark:text-gray-900 lg:text-2xl lg:leading-6">
                    Minimal Interior
                  </h3>
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-shrink-0 sm:w-auto">
              <img
                src="https://i.ibb.co/tCfVky2/carosel-3.png"
                alt="sitting area"
                className="w-full object-cover object-center"
              />
              <div className="absolute h-full w-full bg-gray-800 bg-opacity-30 p-6">
                <h2 className="text-base leading-4 text-white dark:text-gray-900 lg:text-xl lg:leading-5">
                  Catalog 2
                </h2>
                <div className="flex h-full items-end pb-6">
                  <h3 className="text-xl font-semibold leading-5 text-white dark:text-gray-900 lg:text-2xl lg:leading-6">
                    Minimal Interior
                  </h3>
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-shrink-0 sm:w-auto">
              <img
                src="https://i.ibb.co/rFsGfr5/carosel-4.png"
                alt="sitting area"
                className="w-full object-cover object-center"
              />
              <div className="absolute h-full w-full bg-gray-800 bg-opacity-30 p-6">
                <h2 className="text-base leading-4 text-white dark:text-gray-900 lg:text-xl lg:leading-5">
                  Catalog 2
                </h2>
                <div className="flex h-full items-end pb-6">
                  <h3 className="text-xl font-semibold leading-5 text-white dark:text-gray-900 lg:text-2xl lg:leading-6">
                    Minimal Interior
                  </h3>
                </div>
              </div>
            </div> */
