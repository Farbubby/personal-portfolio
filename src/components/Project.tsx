interface Props {
  name: string;
  description: string;
  tools: string[];
  url: string;
  image: string;
  devPost?: string;
}

function Project({ name, description, tools, url, image, devPost }: Props) {
  let toolsList = tools.map((tool) => <div>{tool}</div>);

  return (
    <>
      <div
        className={
          "animate-left opacity-0 flex flex-col justify-between gap-5 border-2 border-blue-400 text-white bg-gradient-to-tl from-rose-400 via-fuchsia-500 to-indigo-500 rounded-xl p-4 ease-in-out hover:drop-shadow-glow h-full"
        }>
        <div className="font-bold text-xl flex flex-row justify-between items-center">
          <div>{name}</div>
          <div className="flex flex-row gap-2">
            <a href={url}>
              <svg
                className="fill-white w-9 h-9"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </a>
            {devPost && (
              <a href={devPost}>
                <svg
                  className="fill-white w-9 h-9 text-center"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24">
                  <path d="M16.839 4l4.857 8.5-4.857 8.5h-9.678l-4.857-8.5 4.857-8.5h9.678zm1.161-2h-12l-6 10.5 6 10.5h12l6-10.5-6-10.5z" />
                </svg>
              </a>
            )}
          </div>
        </div>
        <img
          src={image}
          alt={name}
          className="rounded-lg w-full h-48 object-cover"
        />
        <p>{description}</p>
        <div
          className={
            "flex flex-wrap font-bold text-sm italic gap-x-4 max-w-sm gap-y-2"
          }>
          {toolsList}
        </div>
      </div>
    </>
  );
}

export default Project;
