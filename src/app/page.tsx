import Image from 'next/image'

export default function Home() {
  return (
    <>
      <main className="md:mb-24 md:ms-3">
        <div className="flex flex-col md:flex-row-reverse max-w-full">
          <Image
            src="/tallLogo.png"
            alt="Local Living Tour Aunt Yuko logo"
            width={500}
            height={400}
            className="me-4"
          />
          <div className="mx-4 md:ms-16 text-center my-auto">
            <h1 className="text-4xl mb-5 mainTitle">
              Welcome to a journey beyond the ordinary Japan!
            </h1>
            <h2 className="mb-5 text-xl">
              Are you ready to uncover the hidden gems of this beautiful
              country? Whether it&#39;s your first time planning a trip or
              you&#39;re a returning traveler seeking a deeper exploration,
              Japan has so much more to offer beyond the top 10 cities.
            </h2>
          </div>
        </div>
      </main>
      <section className="grid md:grid-cols-3 md:grid-rows-2 p-4 md:p-20 gap-3 items-stretch">
        <Image
          src="/natureexample.png"
          alt="example of nature"
          width={200}
          height={200}
          className="showcaseImage rounded-2xl"
        />
        <Image
          src="/foodexample.png"
          alt="example of food"
          width={200}
          height={200}
          className="showcaseImage rounded-2xl"
        />
        <Image
          src="/sakeexample.png"
          alt="example of sake"
          width={200}
          height={200}
          className="showcaseImage rounded-2xl"
        />
        <Image
          src="/natureexample.png"
          alt="example of nature"
          width={200}
          height={200}
          className="showcaseImage rounded-2xl"
        />
        <Image
          src="/foodexample.png"
          alt="example of food"
          width={200}
          height={200}
          className="showcaseImage rounded-2xl"
        />
        <Image
          src="/ramenexample.png"
          alt="example of ramen"
          width={200}
          height={200}
          className="showcaseImage rounded-2xl"
        />
      </section>
      <section className="text-center md:p-20 md:mb-10 flex flex-row">
        <Image
          src="/riverexample.jpeg"
          alt="collage of Indigo tye-die experience"
          width={200}
          height={200}
          className="showcaseImage rounded-2xl basis-2/3 hidden md:inline"
        />
        <div className="flex flex-col justify-center">
          <p className="p-4">
            The genuine and friendly people of Sano are eager to share their way
            of life, craftsmanship, culture, and history, treating you like one
            of their own.{' '}
          </p>
          <p className="p-4">
            From my lifelong experience, I believe that creating memories with
            warm-hearted locals is what truly stays in your heart for a long
            time.{' '}
          </p>
          <p className="p-4">
            Let me create a special plan for your visit to my hometown based on
            your interests and the time of your visit.{' '}
          </p>{' '}
          <h3 className="p-4 font-bold">
            Aunt Yuko is thrilled to be a part of your unforgettable Japanese
            adventure! Your dream journey to Japan can start today, just send me
            an email!
          </h3>
        </div>
      </section>
    </>
  )
}
