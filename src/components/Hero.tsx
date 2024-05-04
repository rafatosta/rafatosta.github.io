import SocialLinks from "./SocialLinks";

function Hero() {
    return (
        <div className="relative bg-[url('assets/hero_background.jpg')] bg-cover bg-center bg-no-repeat">
            <div
                className="absolute inset-0 bg-white/90"
            ></div>

            <div className="relative h-screen mx-auto sm:max-w-7xl flex flex-col justify-center md:items-start items-center gap-4 sm:gap-6">
                <p className="text-sm sm:text-lg font-bold">Welcome!</p>
                <h1 className="text-5xl font-extrabold sm:text-7xl">
                    I'm
                    <strong className="font-extrabold text-red-700"> Rafael Tosta </strong>
                </h1>
                <p className="sm:text-xl/relaxed">
                    Software teacher and developer
                </p>
                <SocialLinks />
                {/* <div className="absolute inset-x-0 bottom-16 flex items-center justify-center">
                    <a
                        className="block w-auto rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500"
                        href="#"
                    >
                        Learn More
                    </a>
                </div> */}
            </div>
        </div>
    );
}

export default Hero;