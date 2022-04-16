import { Fragment } from 'react'

function Title() {
  return (
    <main id="home" className="py-44">
      <div className="flex w-full flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a
            className="text-blue-600"
            href="https://www.linkedin.com/in/marcelo-arraes"
          >
            Marcelo's Portfolio
          </a>
        </h1>
        <p className="mt-3 text-2xl">
          Feel free to contact me at{' '}
          <code className="rounded-md bg-gray-200 p-3 font-mono text-lg dark:bg-gray-700">
            marcelo.arraes@gmail.com
          </code>
        </p>

        <div className="z-10 m-10 flex-row space-x-4">
          <p className="mt-3 mb-5 text-2xl">download my resume here:</p>
          <div className="flex space-x-5">
            <a
              href="Curriculo Marcelo Arraes Teixeira.pdf"
              download="Curriculum_Marcelo_Arraes"
            >
              <button
                className="
                flex
                h-12 
                w-36
                items-center
                justify-center 
                rounded-lg
                bg-white
                p-3 
                leading-tight
                text-black
                transition
                duration-150
                ease-in-out 
                hover:shadow-lg
                focus:shadow-lg
                focus:outline-none
                focus:ring-0
                active:shadow-lg"
                type="button"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="download"
                  className="mt-1 mr-2 w-3 "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                  ></path>
                </svg>
                Resume pt-br
                <span className="absolute h-12 w-36 rounded-lg"></span>
              </button>
            </a>
            <a
              href="Curriculo Marcelo Arraes Teixeira.pdf"
              download="Curriculum_Marcelo_Arraes"
            >
              <button
                className="
              flex
              items-center
              justify-center 
              rounded-full
              border-2 
              border-gray-500
              px-6
              py-2
              uppercase
              transition
              duration-200
              ease-in
              hover:bg-gray-700
              hover:text-white 
              hover:shadow-lg
              focus:outline-none"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="download"
                  className="mt-1 mr-2 w-3 "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                  ></path>
                </svg>
                CV pt-br
                <span className="absolute h-12 w-36 rounded-lg"></span>
              </button>
            </a>

            <a
              href="Curriculum - en - Marcelo Arraes Teixeira.pdf"
              download="Resume_en_Marcelo_Arraes"
            >
              <button
                className="
              flex 
              items-center
              justify-center
              rounded-full
              border-2 
              border-gray-500
              px-6 
              py-2
              uppercase 
              transition
              duration-200
              ease-in
              hover:bg-gray-800
              hover:text-white
              focus:outline-none"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="download"
                  className=" mr-2 w-3"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                  ></path>
                </svg>
                CV en-us
              </button>
            </a>

            <a
              href="Curriculum - en - Marcelo Arraes Teixeira.pdf"
              download="Curriculum_en_Marcelo_Arraes"
            >
              <button
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="flex h-12 w-36 items-center justify-center rounded-lg bg-white p-3 leading-tight text-black transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                type="button"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="download"
                  className="mt-1 mr-2 w-3"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                  ></path>
                </svg>
                Resume en-us
              </button>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Title
