import resume from "../assets/files/resume.pdf";
export default function AboutMe() {
  return (
    <div className="container py-16 md:py-20" id="resume">
      <div className="flex flex-col">
        <a
          href={resume}
          download="otekolste_resume"
          target="_blank"
          className="self-center"
        >
          <h1 className="text-center mb-8 text-3xl text-lightest hover:text-light uppercase bg-dark p-4 rounded-full">
            Download my resume
          </h1>
        </a>
        <div className="flex flex-col mb-8 justify-center md:divide-x-2 w-3/4 mx-auto sm:flex-row sm:divide-x-0">
          <div className="text-center text-lightest flex-1 flex flex-col gap-y-2 p-16">
            <i className="bx bx-desktop bx-xl text-5xl bg-dark rounded-full p-4 self-center"></i>
            <h1 className="text-3xl font-semibold uppercase">Frontend</h1>
            <ul className="text-xl">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Tailwind</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className="text-center text-lightest flex-1 flex flex-col gap-y-2 p-16">
            <i className="bx bx-terminal bx-xl text-5xl bg-dark rounded-full p-4 self-center"></i>
            <h1 className="text-3xl font-semibold uppercase">Backend</h1>
            <ul className="text-xl">
              <li>APIs</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Handlebars</li>
              <li>Webpack</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
