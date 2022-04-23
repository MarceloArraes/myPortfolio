import ContactCard from '../components/contactCard'

function Contact(): JSX.Element {
  return (
    <div className="items-top flex w-full flex-row flex-wrap items-start justify-center space-y-20">
      <form
        action="https://api.web3forms.com/submit"
        className="my-2 flex w-full max-w-md flex-col flex-wrap items-center justify-center px-5 dark:text-black"
        method="POST"
      >
        <div className="mb-10 text-2xl dark:text-gray-100">
          Email me with this:
        </div>
        <div className="z-40 mb-6 w-full shadow-xl drop-shadow-xl ">
          <input
            type="hidden"
            name="access_key"
            value={process.env.NEXT_PUBLIC_EMAIL_KEY}
          />
          <input
            type="text"
            className="form-control
            m-0
          block
          w-full
          rounded
          border
          border-solid
          border-gray-300
          bg-gray-200
          bg-clip-padding
          px-3
          py-1.5 text-base
          font-normal leading-10 text-gray-300
          placeholder-gray-500
          transition
          ease-in-out
          focus:border-blue-600
          focus:bg-white
          focus:text-gray-700 focus:outline-none dark:bg-gray-500 dark:text-gray-100 dark:placeholder-gray-200"
            name="name"
            placeholder="Enter Name"
            required
          />
          <input
            type="email"
            name="email"
            required
            className="
            form-control m-0 block
            w-full
            rounded
          border
          border-solid
          border-gray-300
          bg-gray-200
          bg-gray-200
          bg-clip-padding
          px-3
          py-1.5
          text-base
          font-normal
          leading-10 text-gray-700
          placeholder-gray-500 transition ease-in-out
          focus:border-blue-600
          focus:bg-white
          focus:text-gray-700
          focus:outline-none
          dark:bg-gray-500 dark:text-gray-100 dark:placeholder-gray-200"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <textarea
            name="message"
            className="form-control
          box-border block 
          h-32
          w-full
          rounded
          border
          border-solid
          border-gray-300
          bg-gray-200
          bg-clip-padding
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700 placeholder-gray-500 transition
          ease-in-out
          focus:border-blue-600
          focus:bg-white
          focus:text-gray-700
          focus:outline-none dark:bg-gray-500 dark:text-gray-100 
          dark:placeholder-gray-200 sm:h-80
          "
            required
            placeholder="Enter Message"
          ></textarea>
          <input
            type="hidden"
            name="redirect"
            value="https://web3forms.com/success"
          />
          {/*           <button
            type="submit"
            className="
            w-full
            rounded
            bg-blue-600
            py-2.5
            text-xs
            font-medium
            uppercase 
            leading-tight
            text-white
            shadow-md
            transition duration-150
            ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700
            focus:shadow-lg focus:outline-none
            focus:ring-0
            active:bg-blue-800
            active:shadow-lg"
          >
            Submit Contact
          </button> */}
          <button
            type="submit"
            className="
              flex
              w-full
              justify-center
              rounded-lg
              border-2 
              border-gray-500
              px-3 
              py-2
              text-black
              transition
              duration-200
              ease-in
              hover:bg-gray-700
              hover:text-white
              hover:shadow-lg
              focus:outline-none
              dark:items-center
              dark:text-white 
              dark:hover:text-black
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
            Submit Contact
            <span className="absolute h-12 w-36 rounded-lg"></span>
          </button>
        </div>
      </form>
      {/*       <div className="relative flex  border-2 border-gray-600 px-10 dark:border-gray-200">
        Contact me card on building.
      </div> */}
      <ContactCard />
    </div>
  )
}
export default Contact
