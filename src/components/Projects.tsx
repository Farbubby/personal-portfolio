function Projects() {
  let sublime =
    " bg-gradient-to-tl from-rose-400 via-fuchsia-500 to-indigo-500 text-transparent bg-clip-text";

  let projects =
    " flex flex-col gap-3 border-2 border-blue-400 text-white bg-gradient-to-tl from-rose-400 via-fuchsia-500 to-indigo-500 rounded-xl p-4 ease-in-out hover:scale-105 duration-200 max-w-lg animate opacity-0";

  let list = " flex flex-wrap font-bold text-sm italic gap-x-4 max-w-sm";

  return (
    <div id="projects" className={"flex flex-col mb-48 animate opacity-0"}>
      <div
        className={
          "text-4xl md:text-5xl font-bold p-1 text-center" +
          sublime
        }>
        Projects
      </div>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-12 px-8">
          <div className={projects}>
            <a
              href="https://github.com/FindMyProfessors"
              className="flex flex-row-reverse">
              <svg
                className="fill-white w-9 h-9"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </a>
            <div className="font-bold text-xl">Find My Professor</div>
            <p>
              An app that provides a list of professors with average ratings,
              reviews, and adjective radar charts given a university name and a
              course code.
            </p>
            <div className={list}>
              <div>Go</div>
              <div>GraphQL</div>
              <div>SQL</div>
              <div>PostgreSQL</div>
            </div>
          </div>

          <div className={projects}>
            <a
              href="https://github.com/kylekaracadag/Stocks-Prediction"
              className="flex flex-row-reverse">
              <svg
                className="fill-white w-9 h-9"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </a>
            <div className="font-bold text-xl">Stocks Prediction</div>
            <p>
              An LSTM model that predicts the closing price of a stock in one
              minute time intervals.
            </p>
            <div className={list}>
              <div>Python</div>
              <div>TensorFlow</div>
              <div>Pandas</div>
              <div>NumPy</div>
              <div>yfinance</div>
            </div>
          </div>

          <div className={projects}>
            <a
              href="https://github.com/Farbubby/grocery-app"
              className="flex flex-row-reverse">
              <svg
                className="fill-white w-9 h-9"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </a>
            <div className="font-bold text-xl">Grocery App</div>
            <p>
              An app that displays a selection of food items of different types
              and the user has to login to manage and checkout their cart.
            </p>
            <div className={list}>
              <div>TypeScript</div>
              <div>React</div>
              <div>TailwindCSS</div>
              <div>Express</div>
              <div>Vite</div>
            </div>
          </div>

          <div className={projects}>
            <a
              href="https://github.com/Farbubby/build-a-forest"
              className="flex flex-row-reverse">
              <svg
                className="fill-white w-9 h-9"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </a>
            <div className="font-bold text-xl">Build A Forest</div>
            <p>
              A program that processes a text file containing a list of CRUD
              operations and queries using binary search trees and outputs each
              query result of the forest.
            </p>
            <div className={list}>
              <div>C</div>
            </div>
          </div>

          <div className={projects}>
            <a
              href="https://github.com/Farbubby/personnel-management-system"
              className="flex flex-row-reverse">
              <svg
                className="fill-white w-9 h-9"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </a>
            <div className="font-bold text-xl">Personnel Managment System</div>
            <p>
              A menu program that processes user inputs that allows the user to
              add and remove students/faculty, search for any person by ID, and
              print a list of students/faculty.
            </p>
            <div className={list}>
              <div>Java</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
