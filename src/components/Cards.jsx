export default function Cards({ examples }) {
  return (
    <div className="mx-auto grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 sm:w-3/4 md:gap-10">
      {examples.map((ex) => (
        <div
          className="group md:mx-0 rounded-lg bg-dark relative transition-all duration-300 cursor-pointer hover:scale-105"
          key={ex.id}
        >
          <img
            className="group-hover:opacity-0 duration-500 h-full max-w-full rounded-lg"
            src={ex.imgPath}
            alt={ex.imgAlt}
          />
          <div className="hidden absolute inset-0 group-hover:flex flex-col items-center justify-center text-center px-4 text-m text-lightest">
            <a href={ex.appLink}>
              <h1 className="font-semibold uppercase hover:text-mid">
                {ex.name}
              </h1>
            </a>
            <h2 className="text-xs">{ex.pointTwo}</h2>
            <a href={ex.gitLink}>
              <i className="bx bxl-github text-4xl text-white hover:text-mid"></i>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
