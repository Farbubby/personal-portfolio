import Project from "./Project";

function Projects() {
  let sublime =
    " bg-gradient-to-t from-rose-400 via-fuchsia-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-glow";

  return (
    <div id="projects" className={"flex flex-col mb-48"}>
      <div
        className={
          "text-4xl md:text-5xl font-bold p-1 text-center animate-down opacity-0" +
          sublime
        }>
        Projects
      </div>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-8 px-8 md:px-14 lg:px-20">
          <Project
            name="Find My Professor"
            description="An app that provides a list of professors with average ratings, reviews, and adjective radar charts given a university name and a course code."
            tools={["Go", "GraphQL", "SQL", "PostgreSQL"]}
            url="https://github.com/FindMyProfessors"
          />
          <Project
            name="Stocks Prediction"
            description="An LSTM model that predicts the closing price of a stock in one minute time intervals."
            tools={["Python", "TensorFlow", "Pandas", "NumPy", "yfinance"]}
            url="https://github.com/kylekaracadag/Stocks-Prediction"
          />
          <Project
            name="Grocery App"
            description="An app that displays a selection of food items of different types and the user has to login to manage and checkout their cart."
            tools={["TypeScript", "React", "TailwindCSS", "Express", "Vite"]}
            url="https://github.com/Farbubby/grocery-app"
          />
          <Project
            name="Build A Forest"
            description="A program that processes a text file containing a list of CRUD operations and queries using binary search trees and outputs each query result of the forest."
            tools={["C"]}
            url="https://github.com/Farbubby/build-a-forest"
          />
          <Project
            name="Personnel Managment System"
            description="A menu program that processes user inputs that allows the user to add and remove students/faculty, search for any person by ID, and print a list of students/faculty."
            tools={["Java"]}
            url="https://github.com/Farbubby/personnel-management-system"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
