function ContactCard() {
  return (
    <div className="w-96 cursor-pointer rounded-3xl bg-gray-100 p-8 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
      <div className="-mb-20 -translate-y-1/2 transform">
        <img
          src="https://i.ibb.co/JWTX98g/Seek-Png-com-kobe-bryant-png-109287.png"
          alt="Kobe Bryant"
          title="Kobe Bryant"
          className="mx-auto h-64"
        />
      </div>
      <div className="text-center">
        <h3 className="text-center text-4xl font-bold">Kobe Bryant</h3>
        <span className="text-sm">Shooting Guard</span>
      </div>
      <ul className="mt-16 mb-20 flex justify-center text-center text-2xl">
        <li className="flex flex-col">
          <span className="font-bold">PTS</span> 25.00
        </li>
        <li className="mx-6 flex flex-col">
          <span className="font-bold">AST</span> 4.7
        </li>
        <li className="flex flex-col">
          <span className="font-bold">FG%</span> 44.7
        </li>
      </ul>
      <div className="text-center">
        <button className="rounded-xl bg-black px-24 py-2 text-white">
          Select player
        </button>
      </div>
    </div>
  )
}
export default ContactCard
