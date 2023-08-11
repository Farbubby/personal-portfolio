function Contact() {
  let sublime =
    " bg-gradient-to-tl from-rose-400 via-fuchsia-500 to-indigo-500 text-transparent bg-clip-text";

  let projects =
    " flex flex-col gap-3 border-2 border-blue-400 text-white bg-gradient-to-tl from-rose-400 via-fuchsia-500 to-indigo-500 rounded-xl p-4 ease-in-out hover:scale-105 duration-200 max-w-lg";

  return (
    <div
      id="contact"
      className={
        "flex flex-col h-screen justify-center animate opacity-0" +
        sublime
      }>
      <div className={"text-4xl md:text-5xl font-bold p-1 text-center"}>
        Contact me
      </div>
      <div className="flex flex-col px-8 mt-10 items-center">
        <div className={"max-w-lg text-lg"}>
          <p>
            If you have any questions or would like to get in touch, please
            contact me through email. I will be happy to respond as soon as I am
            available.
          </p>
        </div>
        <a
          href="mailto:farhanmahbub88@gmail.com"
          className={"mt-10 items-center duration-75" + projects}>
          Contact
        </a>
      </div>
    </div>
  );
}

export default Contact;
