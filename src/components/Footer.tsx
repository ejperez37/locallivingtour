import Image from 'next/image'
import Link from 'next/link'
import { SiInstagram, SiYoutube, SiGmail } from '@icons-pack/react-simple-icons'

const Footer = () => {
  return (
    <>
      <footer className="bg-slate-300 flex flex-col items-center space-y-8 py-4 md:flex-row md:justify-between md:space-y-0 md:px-20">
        <div className="flex flex-row items-center space-x-5 justify-center">
          <Link href="https://www.instagram.com">
            <SiInstagram color="" />
          </Link>
          <Link href="https://www.youtube.com">
            <SiYoutube className="" />
          </Link>
          <Link href="https://www.gmail.com">
            <SiGmail />
          </Link>
        </div>
        <Image
          src="/updatedLogo.png"
          alt="logo of Local Living Tour"
          width={150}
          height={150}
          className="md:block hidden md:ms-20"
        />
        <Link href="https://sano-kankokk.jp/" className="">
          <Image
            src="/sano-logo.png"
            alt="link for website of official sano tourism"
            width={250}
            height={150}
            className="rounded-md"
          />
        </Link>
      </footer>
    </>
  )
}

export default Footer
