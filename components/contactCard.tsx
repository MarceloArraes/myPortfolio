import { useEffect, useState } from 'react'

function ContactCard() {
  return (
    <div className="w-[90%] max-w-sm cursor-pointer rounded-3xl bg-gray-800 py-8 shadow-md shadow-xl drop-shadow-xl transition duration-300 ease-in-out hover:scale-105  hover:drop-shadow-2xl">
      <div className="-mb-20 min-w-min -translate-y-1/2 transform">
        <img
          src="/MarceloMuseu.png"
          alt="Kobe Bryant"
          title="Kobe Bryant"
          className="mx-auto h-64 grayscale"
        />
      </div>
      <div className="text-center">
        <h3 className="text-center text-4xl font-bold">
          Marcelo Arraes Teixeira
        </h3>
        {/* <span className="text-xl">Contatos:</span> */}
      </div>
      <ul className="mt-5 flex flex-col justify-center space-y-2 text-center text-base">
        <li className="flex flex-col">
          <span className="font-bold ">Marcelo.arraes@gmail.com</span>
        </li>
        <li className="flex flex-col">
          <span className="font-bold">(85)99270-0307</span>
        </li>
        <li className="flex flex-col">
          <span className="font-bold"></span>
        </li>
        <li className="flex flex-col items-center">
          <span className="flex flex-row space-x-1">
            <a target="_blank" href="https://wa.me/5585992700307" className="">
              <img
                src="/whatsapp-svgrepo-com.svg"
                className="w-7 grayscale duration-200 ease-in-out hover:scale-125 hover:grayscale-0"
                alt="whatsapp icon"
              />
            </a>
            <a href="https://www.linkedin.com/in/marcelo-arraes" className="">
              <img
                src="/linkedin-svgrepo-com.svg"
                className="w-7 grayscale duration-200 ease-in-out hover:scale-125 hover:grayscale-0"
                alt="linkedin icon"
              />
            </a>
            <a href="https://www.instagram.com/marcelo.arraess/" className="">
              <img
                src="/instagram-svgrepo-com.svg"
                className="w-7 grayscale duration-200 ease-in-out hover:scale-125 hover:grayscale-0"
                alt="linkedin icon"
              />
            </a>
          </span>
        </li>
      </ul>
      {/* <button className="z-10 flex w-full justify-center rounded-xl bg-black px-24 py-2 text-white hover:bg-red-800"></button> */}
    </div>
  )
}
export default ContactCard
