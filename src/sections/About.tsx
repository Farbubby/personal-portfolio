function About() {
  let sublime =
    " bg-gradient-to-t from-rose-400 via-fuchsia-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-glow";

  return (
    <div id="about" className={"flex flex-col"}>
      <div className="flex flex-col gap-10 w-fit">
        <div
          className={
            "text-4xl md:text-5xl font-bold p-1 animate-down" + sublime
          }>
          About me
        </div>
        <div className={"max-w-2xl text-lg"}>
          <p className={"mb-4 animate-up text-fuchsia-400 drop-shadow-glow"}>
            Hello! I am a student attending the University of Central Florida
            currently pursuing a major in Computer Science and a minor in
            Mathematics.
          </p>
          <p className={"mb-4 animate-up text-fuchsia-400 drop-shadow-glow"}>
            My programming voyage started when I learned Java from one of my
            favorite teachers back in highschool, I then realized that I enjoyed
            programming and its endless problem-solving and creativity. Fast
            forward, I am passionate about learning new technologies and
            building projects.
          </p>
          <p className={"mb-4 animate-up text-fuchsia-400 drop-shadow-glow"}>
            I am interested to get into software engineering. More specifically,
            I am interested in full-stack web development and machine learning
            as I also enjoy mathematics and statistics. I am currently learning
            React and Tailwind CSS which is what I used to create this website.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
