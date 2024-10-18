export default function AboutMe() {
  return (
    <div className="container py-16 md:py-20 mx-auto" id="resume">
      <div className="flex flex-col mb-8 justify-center md:divide-x-2 w-3/4 mx-auto sm:flex-row sm:divide-x-0">
        <div className="text-center flex-1 flex flex-col gap-y-2 p-16">
          <i className="bx bx-desktop bx-xl text-5xl bg-mid rounded-full p-4 self-center"></i>
          <h1 className="text-3xl font-semibold uppercase">Frontend</h1>
          <ul className="text-xl">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Tailwind</li>
            <li>React</li>
          </ul>
        </div>
        <div className="text-center flex-1 flex flex-col gap-y-2 p-16">
          <i className="bx bx-terminal bx-xl text-5xl bg-mid rounded-full p-4 self-center"></i>
          <h1 className="text-3xl font-semibold uppercase">Backend</h1>
          <ul className="text-xl">
            <li>APIs</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>PostgreSQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
