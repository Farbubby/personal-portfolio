function Home() {
  let sublime =
    " bg-gradient-to-tl from-rose-400 via-fuchsia-500 to-indigo-500 text-transparent bg-clip-text";

  return (
    <div
      id="home"
      className="flex flex-col h-screen justify-center text-center mb-28 opacity-0 animate">
      <div className={"font-bold px-4" + sublime}>
        <div className="text-4xl md:text-5xl">Welcome to my portfolio!</div>
        <div className="text-xl md:text-2xl mt-4">
          <div>My name is Farhan Mahbub</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
