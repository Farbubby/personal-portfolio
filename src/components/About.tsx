function About() {
  let sublime =
    " bg-gradient-to-tl from-rose-400 via-fuchsia-500 to-indigo-500 text-transparent bg-clip-text";

  return (
    <div
      id="about"
      className={"flex flex-col mb-48 animate opacity-0" + sublime}>
      <div className={"text-4xl md:text-5xl font-bold p-1 text-center"}>
        About me
      </div>
      <div className="flex flex-col px-8 mt-10 items-center">
        <div className={"max-w-2xl text-lg"}>
          <p className="mb-4">
            Hello! I am a student attending the University of Central Florida
            currently pursuing a major in Computer Science and a minor in
            Mathematics.
          </p>
          <p className="mb-4">
            My programming voyage started when I learned Java from one of my
            favorite teacher back in highschool, I then realized that I enjoyed
            programming and its endless problem-solving and creativity. Fast
            forward, I am passionate about learning new technologies and
            building projects.
          </p>
          <p>
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
