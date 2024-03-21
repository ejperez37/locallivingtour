import Image from 'next/image'
import Link from 'next/link'
import { SiInstagram, SiYoutube, SiGmail } from '@icons-pack/react-simple-icons'

const Footer = () => {
  return (
    <>
      <footer className="shadow-xl bg-slate-300 flex flex-row justify-between items-center px-14">
        <Image
          src="/logo.png"
          alt="logo of Local Living Tour"
          width={150}
          height={150}
          className=""
        />
        <div className="flex flex-row items-center space-x-5 md:ps-20">
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
        <Link href="https://sano-kankokk.jp/" className="flex items-center">
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
