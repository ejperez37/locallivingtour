import Image from 'next/image'

export default function Page() {
  return (
    <>
      <Image
        src="/ramenexample.png"
        width={400}
        height={400}
        alt="placeholder ramen"
        className="rounded-2xl"
      />
    </>
  )
}
