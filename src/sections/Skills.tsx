function Skills() {
  return (
    <div id="skills" className={"flex flex-col"}>
      <div className="flex flex-col gap-10 w-fit text-fuchsia-400">
        <div
          className={
            "text-3xl md:text-4xl lg:text-5xl font-bold p-1 animate-down opacity-0 drop-shadow-glow"
          }>
          Skills
        </div>
        <div
          className={
            "max-w-3xl lg:text-xl md:text-lg text-md flex flex-col gap-4"
          }>
          <p className={"animate-up drop-shadow-glow opacity-0"}>
            Here are some of the technologies I have worked with.
          </p>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-1 animate-up opacity-0">
            <div className="text-2xl font-bold text-red-400 drop-shadow-glow">
              Languages
            </div>
            <div className="flex flex-wrap">
              <img src="https://skillicons.dev/icons?i=html,css,c,cpp,python,java,go,javascript,typescript,php,graphql" />
            </div>
          </div>
          <div className="flex flex-col gap-1 animate-up opacity-0">
            <div className="text-2xl font-bold text-red-400 drop-shadow-glow">
              Frameworks / Libraries
            </div>
            <div className="flex flex-row">
              <img src="https://skillicons.dev/icons?i=tailwind,nodejs,react,vite,nextjs,astro,expressjs,prisma,tensorflow" />
            </div>
          </div>
          <div className="flex flex-col gap-1 animate-up opacity-0">
            <div className="text-2xl font-bold text-red-400 drop-shadow-glow">
              Databases
            </div>
            <div className="flex flex-row">
              <img src="https://skillicons.dev/icons?i=mysql,sqlite,postgres,mongodb" />
            </div>
          </div>
          <div className="flex flex-col gap-1 animate-up opacity-0">
            <div className="text-2xl font-bold text-red-400 drop-shadow-glow">
              Tools
            </div>
            <div className="flex flex-row">
              <img src="https://skillicons.dev/icons?i=git,github,figma,ubuntu,aws,azure,docker,vercel,vscode,supabase" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
