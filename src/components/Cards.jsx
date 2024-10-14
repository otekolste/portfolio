export default function Cards({ examples }) {
    return (
        <div className="mx-auto grid w-full grid-cols-3 gap-8 pt-12 sm:w-3/4 md:gap-10">
            {examples.map((ex) => 
                <figure className="group mx-auto md:mx-0 relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 hover:scale-105" key={ex.id}>
                    <img className="border-2 border-darkest" src={ex.imgPath} alt="image description" />
                <div className="absolute right-0 top-0 hidden text-white bg-darkest group-hover:block">Hi!!!</div>
                <figcaption className="px-4 text-lg bg-darkest text-white">
                    <p>{ex.name}</p>
                </figcaption>
                </figure>
            )}
    </div> 
    )
}