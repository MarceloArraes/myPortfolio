function Title() {
  return (
    <main id="home" className="py-44">
      <div className="flex w-full flex-1 flex-col items-center justify-center text-center">
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
          <a
            href="Curriculo Marcelo Arraes Teixeira.pdf"
            download="Curriculum_Marcelo_Arraes"
          >
            <button
              className="rounded-lg bg-white p-3 text-black"
              type="button"
            >
              Resume pt-br
            </button>
          </a>
          <a
            href="Curriculum - en - Marcelo Arraes Teixeira.pdf"
            download="Curriculum_en_Marcelo_Arraes"
          >
            <button
              className="rounded-lg bg-white p-3 text-black "
              type="button"
            >
              Resume en-us
            </button>
          </a>
        </div>
      </div>
    </main>
  )
}

export default Title
