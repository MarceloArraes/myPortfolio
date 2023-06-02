function Title() {
  return (
    <main id="home" className="py-30">
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
          <div className="flex space-x-5 justify-center">
            <a
              href="Resume Marcelo.pdf"
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
              px-3
              py-2
              transition
              duration-200
              ease-in
              hover:bg-gray-700
              hover:text-white
              hover:shadow-lg
              focus:outline-none
              sm:px-6"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="download"
                  className="mt-1 mr-2 w-5 "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                  ></path>
                </svg>
                Resume
                <span className="absolute h-12 w-36 rounded-lg"></span>
              </button>
            </a>
          </div>
        </div>
        <p className="text-start max-w-lg p-10 font-serif text-xl font-normal sm:w-3/4">
          Hi, I'm Marcelo, a passionate web developer based in Australia.
          I specialize in utilizing technologies such as React-Native,
          ReactJS, NextJS, TypeScript, TailwindCSS, and Node.js to create
          engaging and dynamic web applications.<br/>
          My journey as a web developer has taught me the value of clean and
          efficient code, and I take pride in writing maintainable and scalable
          solutions.<br/>
          Throughout my career, I have collaborated with diverse teams, working
          in Agile/Scrum environments, and utilizing collaboration tools like
          GitHub, Bitbucket, Jira, Monday, and Slack. This experience has honed
          my ability to communicate effectively and work harmoniously.<br/>
          I am driven by a genuine passion for technology and a dedication to
          continuous learning. I am excited about the prospect of contributing
          my skills and expertise to new projects. If you have
          an exciting opportunity or a project in mind, I would love to connect
          and explore how we can work together to bring your ideas to life.<br/>
          Thank you for visiting my portfolio website. Feel free to browse
          through my projects and reach out to me for any inquiries or
          collaborations. Let's create amazing web experiences together!
        </p>
      </div>
    </main>
  )
}

export default Title
