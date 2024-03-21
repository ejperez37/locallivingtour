import Image from 'next/image'

export default function Page() {
  return (
    <div className="w-dvw h-dvh my-auto">
      <Image
        src="/comingsoonlogo.png"
        alt="coming soon"
        width={600}
        height={600}
        className="my-auto mx-auto"
      />
    </div>
  )
}
