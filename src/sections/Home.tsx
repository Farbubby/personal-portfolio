function Home() {
  return (
    <div
      id="home"
      className="flex flex-col h-screen justify-center items-center">
      <div
        className={
          "flex flex-col md:flex-row font-bold items-center justify-between gap-8 text-center w-3/4"
        }>
        <div
          className={"flex flex-col gap-8 text-fuchsia-400 drop-shadow-glow"}>
          <p
            className={
              "py-2 animate-left opacity-0 text-4xl md:text-5xl lg:text-6xl"
            }>
            Welcome!
          </p>
          <div className="animate-left opacity-0 lg:text-2xl md:text-xl text-lg">
            <p>My name is</p>
            <p>Farhan Mahbub</p>
          </div>
        </div>
        <img
          src="/bubby.png"
          className={
            "lg:w-72 lg:h-96 md:w-48 md:h-64 w-36 h-48 rounded-full animate-right opacity-0"
          }
        />
      </div>
    </div>
  );
}

export default Home;
