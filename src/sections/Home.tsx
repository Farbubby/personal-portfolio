function Home() {
  let sublime =
    " bg-gradient-to-t from-rose-400 via-fuchsia-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-glow";

  return (
    <div
      id="home"
      className="flex flex-col h-screen justify-center items-center">
      <div
        className={
          "flex flex-col md:flex-row font-bold items-center justify-between gap-8 text-center md:text-left w-3/4"
        }>
        <div className={"flex flex-col text-4xl md:text-5xl lg:text-6xl gap-8"}>
          <p className={"py-2 animate-down" + sublime}>Welcome!</p>
          <div className="animate-up">
            <p className={"lg:text-2xl md:text-xl text-lg" + sublime}>
              My name is
            </p>
            <p className={"lg:text-2xl md:text-xl text-lg" + sublime}>
              Farhan Mahbub
            </p>
          </div>
        </div>
        <img
          src="/Bubby.png"
          className={
            "lg:w-72 lg:h-96 md:w-48 md:h-64 w-36 h-48 rounded-full animate-up"
          }
        />
      </div>
    </div>
  );
}

export default Home;
