import Image from 'next/image'

export default function Page() {
  return (
    <>
      <main className="flex flex-row items-center justify-evenly my-14">
        <Image
          src="/riverexample.jpeg"
          width={500}
          height={400}
          alt="placeholder discover page"
          className="rounded-2xl"
        />
        <div className="w-1/2 text-left space-y-4">
          <h1 className="text-2xl">
            Come and visit me, your Japanese aunt / guide to an authentic local
            living experience, <em>just</em> outside of Tokyo.
          </h1>
          <p>
            With 47 prefectures and around 700 cities, the tapestry of
            Japan&#39;s landscapes and cultures is vast and diverse. However,
            more than 80% of tourists only visit the popular destinations,
            leaving the rest unexplored.
          </p>
          <p>
            I would like to share my charming hometown and it&#39;s unique
            treasures with you! Click the pictures below to learn more!
          </p>
        </div>
      </main>
      <section className="p-20">
        <div className="flex flex-row justify-between items-stretch">
          <a className="hover:scale-125 transition duration-500 ease-in-out">
            <Image
              src="/foodexample.png"
              width={400}
              height={400}
              alt="placeholder food"
              className="rounded-2xl"
            />
            <p className="text-center">more food</p>
          </a>
          <a
            href="/discover/clickables/sake"
            className="hover:scale-125 transition duration-500 ease-in-out hover:opacity-85"
          >
            <Image
              src="/sakeexample.png"
              width={400}
              height={400}
              alt="placeholder sake"
              className="rounded-2xl"
            />
            <p className="text-center">sake brewery tour</p>
          </a>
          <a
            href="/discover/clickables/ramen"
            className="hover:scale-125 transition duration-500 ease-in-out hover:opacity-85"
          >
            <Image
              src="/ramenexample.png"
              width={400}
              height={400}
              alt="placeholder ramen"
              className="rounded-2xl"
            />
            <p className="text-center">ramen masterclass</p>
          </a>
        </div>
        <div className="flex flex-row items-center justify-around">
          <a className="hover:scale-125 transition duration-500 ease-in-out">
            <Image
              src="/natureexample.png"
              width={400}
              height={400}
              alt="placeholder nature"
              className="rounded-2xl"
            />
            <p className="text-center">hiking</p>
          </a>
          <Image
            src="/comingsoonlogo.png"
            width={400}
            height={400}
            alt="placeholder coming soon"
            className="rounded-2xl hover:scale-125 transition duration-500 ease-in-out"
          />
        </div>
      </section>
    </>
  )
}
