
import marca from "/marca.svg"
import SocialLinks from "./SocialLinks"

function Hero() {
    return (
        <section
            className="relative bg-light dark:bg-dark bg-cover bg-center bg-no-repeat"
        >
            <div
                className="relative flex flex-col justify-center items-center mx-auto max-w-screen-xl px-4 py-32 h-screen"
            >
                <div className="flex flex-col gap-6">
                    <img src={marca} alt="Marca" className="h-44 lg:h-96" />
                    <SocialLinks />
                    <div className="absolute inset-x-0 bottom-16 h-16 flex items-center justify-center">
                        <a
                            href="#"
                            className="block rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default Hero;