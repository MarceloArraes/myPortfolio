import Image from 'next/image'

function Footer() {
  return (
    <footer
      id="footer"
      className="flex h-24 w-full items-center justify-between border-t p-2 sm:p-16"
    >
      <span className="flex flex-row items-center">
        <span className="">Fortaleza - Ceará - Brasil</span>
        <img
          src="/brazil-svgrepo-com.svg"
          alt="Brazil Flag"
          className="ml-2 w-8"
        />
      </span>
      <p className="flex items-center justify-center gap-2">
        <Image
          src="/doomguygif.gif"
          alt="Doom Guy Face"
          width={56}
          height={56}
        />
      </p>
    </footer>
  )
}

export default Footer
