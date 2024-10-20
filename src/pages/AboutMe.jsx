import "boxicons";
export default function AboutMe() {
  return (
    <div className="container mx-auto relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
      <div className="flex flex-col items-center justify-center md:flex-row lg:flex-row">
        <div className="rounded-full size-80 flex-shrink-0 border-8 border-lightest shadow-xl">
          <img
            src="./images/headshot.jpg"
            className="flex-shrink-0h-48 rounded-full"
            alt="Olivia's headshot"
          />
        </div>
        <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
          <h1 className="text-center font-header text-4xl text-lightest sm:text-left sm:text-5xl md:text-6xl">
            Hello world!
          </h1>
          <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
            <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
              <p className="font-body text-lg mx-2 text-lightest">
                I'm an aspiring full-stack developer based in North Carolina!
                After discovering a passion for coding in high school, I
                obtained a Bachelor of Arts in computer science from Emory
                University, which has given me experience in a breadth of coding
                languages and a solid foundation for computing skills. I am
                currently completing edX's full stack developer course in order
                to hone my skills with regards to developing web applications
                with hands-on experience. Throughout my coding journey, I have
                gained experience in JavaScript, HTML, CSS, PostgreSQL, as well
                as Java and Python. Recently, I have been creating projects
                using Node.js, MongoDB, React, and TailwindCSS. I love tackling
                challenging problems and learning about new technologies, and I
                am passionate about accessibility and creating user-friendly
                experiences!{" "}
              </p>
              <div className="hidden sm:block"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
