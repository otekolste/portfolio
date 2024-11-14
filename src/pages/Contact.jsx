// https://dev.to/deyemiobaa/adding-custom-validation-to-a-form-with-tailwindcss-1e7d
export default function Contact() {
  return (
    <div className="container py-16 md:py-20" id="contact">
      <h2 className="text-center text-lightest font-header text-4xl font-semibold uppercase">
        Let's get in touch!
      </h2>
      <form className="group mx-auto w-full pt-10 sm:w-3/4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:mt-0 md:w-1/2">
            <input
              aria-label="name"
              className="peer/name mr-3 w-full rounded border border-grey-50 px-4 py-3 font-body text-black required:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
              placeholder="Name"
              type="text"
              id="name"
              required
            />
            <span className="mt-2 ml-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):required]/name:block">
              Please enter a name
            </span>
          </div>
          <div className="w-full md:w-1/2 md:mt-0 md:ml-3 md:w-1/2 lg:ml-5">
            <input
              aria-label="email"
              className="peer/email w-full rounded border border-grey-50 px-4 py-3 font-body text-black  invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
              placeholder="Email"
              type="text"
              id="email"
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
              required
            />
            <span className="mt-2 ml-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]/email:block">
              Please enter a valid email address
            </span>
          </div>
        </div>
        <textarea
          aria-label="message"
          className="mt-6 w-full rounded border border-grey-50 px-4 py-3 font-body text-black md:mt-8"
          placeholder="Message"
          id="message"
          cols="30"
          rows="10"
          required
        ></textarea>
        <button className="mt-6 flex items-center justify-center rounded bg-dark px-8 py-3 font-header text-lg font-bold uppercase text-lightest hover:bg-darkest group-invalid:pointer-events-none group-invalid:opacity-30">
          Send
          <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
        </button>
      </form>
      <h2 className="text-center text-lightest font-header text-2xl font-semibold uppercase">
        Or, send me an email:{" "}
        <span className="lowercase text-light">oliviatekolste@gmail.com</span>
      </h2>
    </div>
  );
}
