import Image from 'next/image'

const Header = () => {
  return (
    <>
      <nav className="flex flex-row justify-between max-w-full shadow-xl mb-8 px-6">
        <a href="/">
          <Image
            src="/logo.png"
            alt="local living tour, coming soon!"
            width={125}
            height={125}
            className="mx-5"
          />
        </a>
        <div className="flex flex-row justify-between items-center mx-10 space-x-5">
          <a href="/discover">discover</a>
          <a href="/plan" className="me-5">
            plan
          </a>
          <a href="/contact">contact</a>
        </div>
      </nav>
    </>
  )
}

export default Header
