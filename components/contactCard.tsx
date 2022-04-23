import { useEffect, useState } from 'react'

function ContactCard() {
  return (
    <div className="w-[90%] max-w-sm cursor-pointer rounded-3xl bg-gray-800 py-8 shadow-md shadow-xl drop-shadow-xl transition duration-300 ease-in-out hover:translate-y-1.5 hover:scale-105 hover:drop-shadow-2xl">
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
        <span className="text-xl">Contatos:</span>
      </div>
      <ul className="mt-5 flex flex-col justify-center space-y-5 text-center text-base">
        <li className="flex flex-col">
          <span className="font-bold ">Marcelo.arraes@gmail.com</span>
        </li>
        <li className="flex flex-col">
          <span className="font-bold">(85)99270-0307</span>
        </li>
        <li className="flex flex-col">
          <span className="font-bold"></span>
        </li>
      </ul>
      <div className="text-center">
        <button className="flex w-full justify-center rounded-xl bg-black px-24 py-2 text-white">
          Select player
          {/* <a href="https://wa.me/5585992700307" className="absolute"></a> */}
        </button>
      </div>
    </div>
  )
}
export default ContactCard
