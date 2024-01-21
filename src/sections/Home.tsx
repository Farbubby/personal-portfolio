function Home() {
  let sublime =
    " bg-gradient-to-t from-rose-400 via-fuchsia-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-glow";

  return (
    <div
      id="home"
      className="flex flex-col h-screen justify-center text-center mb-28">
      <div className={"font-bold px-4"}>
        <div className={"text-4xl md:text-5xl animate-down" + sublime}>
          Welcome to my portfolio!
        </div>
        <div className={"text-xl md:text-2xl mt-4 animate-up" + sublime}>
          My name is Farhan Mahbub
        </div>
      </div>
    </div>
  );
}

export default Home;
