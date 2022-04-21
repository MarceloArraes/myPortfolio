function GitHubSession() {
  return (
    <div
      id="github"
      className="flex w-full flex-wrap items-center justify-center border-t-2 border-gray-800 py-10 dark:border-gray-400"
    >
      <div className="mb-10 w-full text-center text-3xl font-bold">
        <h1>GITHUB</h1>
      </div>
      <a
        className="z-40 w-72 overflow-hidden rounded bg-white shadow-lg shadow-xl drop-shadow-xl dark:bg-gray-800 dark:text-white"
        href="https://github.com/MarceloArraes"
        target="_blank"
      >
        <img
          className="w-full"
          src="https://avatars.githubusercontent.com/u/6797670?v=4"
          alt="Marcelo_profile"
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-lg font-bold">GitHub</div>
          <p className="text-md text-base text-gray-700 dark:text-gray-200">
            This is my github profile. Here I have been updating my portfolio
            and my studies. I try to make a commit everyday. And even as I've
            failed some times this exercise still has worked for me as a
            motivator.
          </p>
        </div>
        <div className="px-6 pt-2 pb-2">
          <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            #nulla dies sine linea.
          </span>
        </div>
      </a>
    </div>
  )
}
export default GitHubSession
