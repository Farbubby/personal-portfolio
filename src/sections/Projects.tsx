import Project from "../components/Project";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Projects() {
  const projectList = [
    <Project
      name="Find My Professors"
      description="A web application that aims to help college students find their professors by searching for the course they plan to take and provides in-depth analysis and relevant data for each professor teaching it."
      tools={["Go", "GraphQL", "SQL", "PostgreSQL", "Nextjs", "TailwindCSS"]}
      url="https://github.com/FindMyProfessors"
    />,
    <Project
      name="Handy Dollar"
      description="A financial planning tool application that aims to help users understand and break down their transactions and expenses in order to better manage their finances."
      tools={[
        "TypeScript",
        "Nextjs",
        "TailwindCSS",
        "PostgreSQL",
        "OpenAI",
        "Azure",
        "Supabase",
        "Plaid",
      ]}
      url="https://github.com/the-bigbrains/HandyDollar"
    />,
    <Project
      name="Review Summarizer"
      description="A web application that grabs top positive and negative reviews for a product and generates a pros and cons and a general consensus summary for that product."
      tools={[
        "TypeScript",
        "Nextjs",
        "TailwindCSS",
        "Expressjs",
        "Puppeteer",
        "OpenAI",
      ]}
      url="https://github.com/the-bigbrains/review-summarizer"
    />,
    <Project
      name="Code Clash"
      description="A leetcode style battle game where players get matched against each other to find the fastest solutions to coding problems in the shortest amount of time."
      tools={[
        "TypeScript",
        "Mithril",
        "TailwindCSS",
        "Expressjs",
        "Socketio",
        "MongoDB",
      ]}
      url="https://github.com/Shi-morrison/CodeClash"
    />,
    <Project
      name="Overtone"
      description="A small AI chat application which is similar to the ChatGPT but with an extra feature of text-to-speech to bring accessibility and add a more interactive experience."
      tools={["TypeScript", "Nextjs", "TailwindCSS", "AWS", "Go", "OpenAI"]}
      url="https://github.com/Bombachicky/TTS-AI"
    />,
    <Project
      name="Yap App | (In progress...)"
      description="A twitter-inspired social media application that allows users to create posts, comment on posts, and chat with others in real-time."
      tools={[
        "TypeScript",
        "Nextjs",
        "TailwindCSS",
        "PostgreSQL",
        "Lucia",
        "Socketio",
        "Prisma",
      ]}
      url="https://github.com/Farbubby/yap-app"
    />,
  ];

  return (
    <div id="projects" className={"flex flex-col"}>
      <div className="flex flex-col w-full gap-10">
        <div
          className={
            "text-4xl md:text-5xl font-bold p-1 animate-down opacity-0 text-left py-2 text-fuchsia-400 drop-shadow-glow"
          }>
          Projects
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          orientation={"horizontal"}
          className="w-full animate-up opacity-0">
          <CarouselContent>
            {projectList.map((project, index) => {
              return (
                <CarouselItem
                  key={index}
                  className="lg:basis-1/3 md:basis-1/2 basis-full">
                  {project}
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="flex flex-row justify-between mt-10">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
