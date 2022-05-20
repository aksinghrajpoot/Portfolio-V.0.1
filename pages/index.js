import Head from "next/head";
import Hero from "../components/Hero";

export default function Index() {
  return (
    <>
      <Head>
        <title>Home- Portfolio</title>
      </Head>
      <Hero />

      <div className="flex justify-center text-xl tracking-wider shadow-orange-500 drop-shadow-lg py-5">
        <span className="text-black/50">⏕⏕⏕</span>
      </div>

      <section>
        <div className="container py-10">
          <h3 className="text-3xl font-semibold text-black">
            I love sharing articles.
          </h3>
          <p className="my-2 font-medium text-black/60">
            Check out my new articles <a className="border-b-2 border-blue-700 border-dotted text-blue-500" href='https://aksinghrajpoot.com' target="_">Blog</a>
          </p>
        </div>
      </section>
    </>
  );
}
