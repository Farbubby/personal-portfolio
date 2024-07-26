function About() {
  return (
    <div id="about" className={"flex flex-col"}>
      <div className="flex flex-col gap-10 w-fit">
        <div
          className={
            "text-3xl md:text-4xl lg:text-5xl font-bold p-1 animate-down opacity-0 text-fuchsia-400 drop-shadow-glow"
          }>
          About me
        </div>
        <div
          className={
            "max-w-3xl lg:text-xl md:text-lg text-md flex flex-col gap-4"
          }>
          <p
            className={
              "animate-up text-fuchsia-400 drop-shadow-glow opacity-0"
            }>
            Hello! I am a student attending the University of Central Florida
            pursuing a major in Computer Science and a minor in Mathematics.
          </p>
          <p
            className={
              "animate-up text-fuchsia-400 drop-shadow-glow opacity-0"
            }>
            I am an aspiring Full-stack Software Engineer passionate about
            problem-solving and building products that impact users and make
            their lives easier. I am also a leader who strives to connect people
            and help others. I am always looking for opportunities to learn and
            grow as a developer and as a person.
          </p>
          <p
            className={
              "animate-up text-fuchsia-400 drop-shadow-glow opacity-0"
            }>
            With the current AI boom and my appreciation for the importance of
            AI in elevating applications and improving everday experiences, I
            have been learning more about AI and taking steps toward becoming a
            Full-stack and AI/ML Software Engineer. I am eager to work or
            collaborate on AI/ML projects and actively seek ideas to incorporate
            AI/ML into my current and future projects.
          </p>
          <p
            className={
              "animate-up text-fuchsia-400 drop-shadow-glow opacity-0"
            }>
            Some of my hobbies include watching anime, listening to music,
            anything related to cars, and traveling. I am always looking to meet
            new friends, so feel free to chat with me about tech, life, or
            anything else!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
