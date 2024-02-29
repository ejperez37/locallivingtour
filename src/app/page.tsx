import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex justify-center items-center w-dvw h-dvh">
      <Image
        src="/comingsoonlogo.png"
        alt="local living tour, coming soon!"
        width={500}
        height={500}
      />
    </div>
  )
}
