function Home() {
  return (
    <div
      id="home"
      className="flex flex-col h-screen justify-center items-center">
      <div
        className={
          "flex flex-col md:flex-row font-bold items-center justify-between gap-8 text-center md:text-left w-3/4"
        }>
        <div
          className={
            "flex flex-col text-5xl md:text-6xl gap-8 text-fuchsia-400 drop-shadow-glow"
          }>
          <p className={"py-2 animate-down opacity-0"}>Welcome!</p>
          <div className="animate-up opacity-0">
            <p className={"md:text-2xl text-xl"}>My name is</p>
            <p className={"md:text-2xl text-xl"}>Farhan Mahbub</p>
          </div>
        </div>
        <img
          src="/bubby.png"
          className={
            "lg:w-72 lg:h-96 md:w-48 md:h-64 w-36 h-48 rounded-full animate-up opacity-0"
          }
        />
      </div>
    </div>
  );
}

export default Home;
