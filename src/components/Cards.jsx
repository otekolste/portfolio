export default function Card({ examples }) {
    return (
        <div className="mx-auto grid w-full grid-cols-3 gap-8 pt-12 sm:w-3/4 md:gap-10">
            {examples.map((ex) => 
                        <div className="mx-auto shadow-lg transform transition-all relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full p-4" key={ex.id}>
                            <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                            {ex.name}
                            </h6>
                            <ul className="list-disc ml-4">
                                <li>{ex.pointOne}</li>
                                <li>{ex.pointTwo}</li>
                                <li><a href={ex.gitLink}>GitHub</a></li>
                                <li><a href={ex.appLink}>Deployed application</a></li>
                            </ul>
                            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                                <img src={ex.imgPath} alt={ex.imgAlt} />
                            </div>
                    </div> 
            )}
    </div> 
    )
}