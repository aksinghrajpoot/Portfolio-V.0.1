export default function contact() {
  return (
    <>
      <section>
        <div className="container py-10">
          <h2 className="text-center text-xl font-semibold py-3">Enter your details, </h2>
          <div className="flex items-center justify-center">
            <form className="w-96">
              <div>
                <input
                  placeholder="Full Name"
                  type="text"
                  className="w-full border py-2 px-5 text-sm outline-none"
                />
              </div>
              <div>
                <input
                  placeholder="Email"
                  type="email"
                  className="mt-2 w-full border py-2 px-5 text-sm outline-none"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  type="text"
                  className="mt-2 w-full border py-2 px-5 text-sm outline-none"
                />
              </div>
              <button className="mx-auto justify-center rounded-md bg-primary py-2 px-8 text-white">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
