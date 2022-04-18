import { useEffect } from 'react'

function ProjectCards() {
  useEffect(() => {}, [])

  return (
    <>
      <a href="https://Adaminter.org" target="_blank">
        <div
          id="image-vessel"
          className="relative mx-2 mb-6 h-40 w-56 max-w-xs flex-shrink-0 overflow-hidden rounded-lg bg-[url('/adaminterback.png')]  bg-cover bg-center shadow-xl drop-shadow-xl"
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
export default ProjectCards
