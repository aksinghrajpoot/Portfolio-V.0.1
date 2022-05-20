import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="container py-10 md:py-28">
          <div className="absolute top-0 left-0 -z-10 flex h-full w-full overflow-clip pt-20">
            <div className="blob absolute top-10 -left-4 h-72 w-72 rounded-full bg-teal-100 opacity-30 mix-blend-multiply blur-xl filter md:left-24"></div>
            <div className="blob animation-delay-2000 absolute left-72 top-52 h-72 w-72 rounded-full bg-blue-200 opacity-30 mix-blend-multiply blur-xl filter md:left-[500px]"></div>
            <div className="blob animation-delay-4000 absolute top-80 left-20 h-72 w-72 rounded-full bg-rose-300 opacity-30 mix-blend-multiply blur-xl filter"></div>
          </div>

          <div className="flex shrink-0 flex-col md:flex-row">
            <div className="mx-auto md:order-2">
              <Image
                src="/singh.webp"
                alt="singh"
                width={160}
                height={160}
                layout="fixed"
              />
            </div>

            <div className="md:order-1">
              <h1 className="text-center text-3xl font-bold leading-snug tracking-wide	 md:pr-8 md:text-left md:text-5xl md:leading-tight">
                I am <span className="text-primary">Ashok.</span> Software
                Developer, Tech Blogger and founder of xnetking.
                <span className="pl-3">
                  <div className="wave ">👋</div>
                </span>
              </h1>
              <div className="relative mt-4 flex flex-col justify-center gap-4 md:mt-10 md:flex-row md:justify-start">
                <button className="mx-auto rounded-full bg-primary py-2 px-6 text-white transition-all  hover:scale-105 md:mx-0 ">
                  More About me
                </button>
                <button className="mx-auto rounded-full border-2 border-primary py-2 px-6   transition-all hover:scale-105 hover:bg-primary  hover:text-white  md:mx-0 ">
                  Get Connected
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
