// tutorial for form validation: https://dev.to/deyemiobaa/adding-custom-validation-to-a-form-with-tailwindcss-1e7d
// tutorial for email.js setup: https://medium.com/@thomasaugot/create-a-react-contact-form-with-email-js-cad2c8606f33

import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Countact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };
  return (
    <div className="container py-16 md:py-20" id="contact">
      <h2 className="text-center text-lightest font-header text-4xl font-semibold uppercase">
        Let's get in touch!
      </h2>
      <form
        onSubmit={sendEmail}
        className="group mx-auto w-full pt-10 sm:w-3/4"
      >
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
        <input
          type="submit"
          value="Send"
          disabled={isSubmitting}
          className="mt-6 flex items-center cursor-pointer justify-center rounded bg-dark px-8 py-3 font-header text-lg font-bold uppercase text-lightest hover:bg-darkest group-invalid:pointer-events-none group-invalid:opacity-30"
        />
        {stateMessage && <p className="text-lightest">{stateMessage}</p>}
      </form>
      <h2 className="text-center text-lightest font-header text-2xl font-semibold uppercase">
        Or, send me an email directly:{" "}
        <span className="lowercase text-light">oliviatekolste@gmail.com</span>
      </h2>
    </div>
  );
}
