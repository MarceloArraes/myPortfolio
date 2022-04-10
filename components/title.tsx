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
      </div>
    </main>
  )
}

export default Title
