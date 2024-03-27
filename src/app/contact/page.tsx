import Image from 'next/image'
import { SiInstagram, SiYoutube, SiGmail } from '@icons-pack/react-simple-icons'

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      <Image
        src="/updatedTallLogo.png"
        width={500}
        height={400}
        alt="tall logo for Local Living Tour"
        className="md:mb-10 md:me-10"
      />
      <div className="flex flex-col space-y-4 text-center mb-10">
        <h1 className="text-2xl my-4">I am so excited to connect with you!</h1>
        <a href="" className="flex justify-center">
          <SiInstagram /> <p>: @locallivingtourjp</p>
        </a>
        <a href="" className="flex justify-center">
          <SiYoutube /> <p>: @locallivingtourjp</p>
        </a>
        <a href="mailto:" className="flex justify-center">
          <SiGmail /> <p>: locallivingtourjp@gmail.com</p>
        </a>
      </div>
    </div>
  )
}
