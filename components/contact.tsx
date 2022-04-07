function Contact(): JSX.Element {
  return (
    <form
      action="https://api.web3forms.com/submit"
      className="flex flex-col flex-wrap items-center px-10 pt-3 dark:text-black"
      method="POST"
    >
      <div className="mb-6">
        <input type="hidden" name="access_key" value={process.env.EMAIL_KEY} />

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
          bg-white bg-clip-padding
          px-3 py-1.5 text-base
          font-normal
          text-gray-300
          placeholder-gray-500
          transition
          ease-in-out
          focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
          name="name"
          placeholder="Enter Name"
          required
        />
        <input
          type="email"
          name="email"
          required
          className="
          form-control
          m-0
          block
          w-full
          rounded
          border
          border-solid
          border-gray-300
          bg-white
          bg-clip-padding
          px-3 py-1.5
          text-base font-normal text-gray-700
          placeholder-gray-500
          transition
          ease-in-out
          focus:border-blue-600
          focus:bg-white focus:text-gray-700 focus:outline-none"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <textarea
          name="message"
          className="form-control
          m-0
          block
          w-full
          rounded
          border
          border-solid
          border-gray-300
          bg-white
          bg-clip-padding px-3
          py-1.5 text-base font-normal
          text-gray-700
          placeholder-gray-500
          transition
          ease-in-out
          focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
          required
          placeholder="Enter Message"
        ></textarea>
        <input
          type="hidden"
          name="redirect"
          value="https://web3forms.com/success"
        />
        <button
          type="submit"
          className="
            rounded
            bg-blue-600
            px-6
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
        </button>
      </div>
    </form>
  )
}
export default Contact
