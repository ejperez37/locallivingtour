import Image from 'next/image'

export default function Page() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center p-10">
        <div className="text-center space-y-4 md:pe-4">
          <h1 className="font-bold text-2xl">
            Sano is a mere 90 minutes from Tokyo!
          </h1>
          <p>Take the train or the bus!</p>
          <p className="text-left">
            "From my lifelong experience, I believe that creating memories with
            warm-hearted locals is what truly stays in your heart for a long
            time." <i>- Aunt Yuko</i>
          </p>
        </div>
        <Image
          src="/trainMap.png"
          alt="map of the tobu railway, including from tokyo to sano"
          width={600}
          height={600}
          className="mb-8 md:mb-0"
        />
      </div>
    </>
  )
}
