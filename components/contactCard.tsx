import { useEffect, useState } from 'react'

function ContactCard() {
  return (
    <div className="w-full max-w-md cursor-pointer rounded-3xl bg-gray-800 p-8 shadow-md shadow-xl drop-shadow-xl transition duration-300 ease-in-out hover:translate-y-1.5 hover:scale-105 hover:drop-shadow-2xl">
      <div className="-mb-20 min-w-min -translate-y-1/2 transform">
        <img
          src="/MarceloMuseu.png"
          alt="Kobe Bryant"
          title="Kobe Bryant"
          className="mx-auto h-64"
        />
      </div>
      <div className="text-center">
        <h3 className="text-center text-4xl font-bold">
          Marcelo Arraes Teixeira
        </h3>
        <span className="text-lg">Contatos:</span>
      </div>
      <ul className="mt-16 mb-20 flex justify-center text-center text-2xl">
        <li className="flex flex-col">
          <span className="font-bold"></span>
        </li>
        <li className="mx-6 flex flex-col">
          <span className="font-bold"></span>
        </li>
        <li className="flex flex-col">
          <span className="font-bold"></span>
        </li>
      </ul>
      <div className="text-center">
        {/*         <button className="rounded-xl bg-black px-24 py-2 text-white">
          Select player
        </button> */}
      </div>
    </div>
  )
}
export default ContactCard
