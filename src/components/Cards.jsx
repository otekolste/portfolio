export default function Cards({ examples }) {
    return (
        <div className="mx-auto grid w-full grid-cols-3 gap-8 pt-12 sm:w-3/4 md:gap-10">
            {examples.map((ex) => 
                <figure className="group mx-auto md:mx-0 rounded-lg bg-darkest relative transition-all duration-300 cursor-pointer hover:scale-105" key={ex.id}>
                    <img className="group-hover:opacity-0 rounded-lg" src={ex.imgPath} alt={ex.imgAlt} />
                <figcaption className="hidden group-hover:block px-4 absolute inset-0 text-center top-1/3 text-lg text-white">
                    <h1 className="font-semibold uppercase">{ex.name}</h1>
                    <a href={ex.gitLink}><i className="bx bxl-github text-4xl text-white hover:text-gray-200"></i></a>
                </figcaption>
                </figure>
            )}
    </div> 
    )
}