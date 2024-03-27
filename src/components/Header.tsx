import Image from 'next/image'

const Header = () => {
  return (
    <>
      <nav className="flex flex-col items-center pb-4 md:pb-0 md:flex-row md:justify-between max-w-full shadow-xl mb-8 px-6">
        <a href="/" className="">
          <Image
            src="/updatedLogo.png"
            alt="local living tour logo"
            width={125}
            height={125}
            className="mx-5"
          />
        </a>
        <div className="flex flex-row justify-between items-center md:mx-10 space-x-14 md:space-x-10">
          <a href="/discover">discover</a>
          <a href="/plan">plan</a>
          <a href="/contact">contact</a>
        </div>
      </nav>
    </>
  )
}

export default Header
