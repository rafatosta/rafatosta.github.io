import { publications } from "../data";

function Publications() {
    return (
        <div className="h-screen flex flex-col justify-center items-center gap-12">
            <p className="font-bold text-2xl">Publications</p>
            <div className="w-3/1 sm:w-1/2 flex flex-col justify-center items-start gap-20 px-6">
                {
                    publications.map((p) => (
                        <p className="text-justify">
                            <span className="font-bold">{p.title}</span>. {p.author}. {p.journal}, {p.year}.
                            <a className="text-blue-950 hover:text-blue-500" href={p.link}> [PDF]</a>
                        </p>
                    ))
                }

            </div>

        </div>
    );
}

export default Publications;