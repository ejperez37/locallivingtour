import Image from 'next/image'
import { SiInstagram, SiYoutube, SiGmail } from '@icons-pack/react-simple-icons'

export default function Page() {
  return (
    <div className="flex justify-center items-center">
      <Image
        src="/tallLogo.png"
        width={500}
        height={400}
        alt="tall logo for Local Living Tour"
        className="my-10 md:me-10"
      />
      <div className="flex flex-col my-auto md:space-y-4 text-center">
        <h1 className="text-2xl my-4">I am so excited to hear from you!</h1>
        <span className="flex">
          <SiInstagram /> <p>: @locallivingtourjp</p>
        </span>
        <span className="flex">
          <SiYoutube /> <p>: @locallivingtourjp</p>
        </span>
        <span className="flex">
          <SiGmail /> <p>: locallivingtourjp@gmail.com</p>
        </span>
      </div>
    </div>
  )
}
