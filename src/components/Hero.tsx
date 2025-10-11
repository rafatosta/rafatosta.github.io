import profileImage from "@/assets/profile.jpg";
/* import { Button } from "flowbite-react"; */
import { /* ArrowDown, */ Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.avif";

function Hero() {

    /* const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }; */

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >

            {/* Overlay */}
            <div className="absolute inset-0 bg-white/85 backdrop-blur-sm"></div>

            {/* Content */}
            <div className="mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <div>
                        {/* Profile Image */}
                        <div className="container mb-8 flex justify-center ">
                            <img
                                src={profileImage}
                                alt="Prof Rafael Tosta"
                                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-1 border-amber-50/20 shadow-xl/20"
                            />
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-700 via-secondary to-blue-900 bg-clip-text text-transparent">
                            Prof. Rafael Tosta
                        </h1>
                        {/* Subtitle */}
                        <p className="text-xl md:text-2xl lg:text-3xl mb-4 font-light">
                            Informática & Educação
                        </p>

                        {/* Description */}
                        <p className="text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                            Trabalho na área de programação, educação e inovação tecnológica, desenvolvendo pesquisas e projetos que aproximam a teoria da prática.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center justify-center gap-4 mb-10">
                            <a
                                href="https://github.com/rafatosta"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-800 transition-colors"
                                aria-label="GitHub"
                            >
                                <Github className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/rafael-tosta-2006874a/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-800 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a
                                href="mailto:rafa.ecomp@gmail.com"
                                className="hover:text-blue-800 transition-colors"
                                aria-label="Email"
                            >
                                <Mail className="w-6 h-6" />
                            </a>
                        </div>

                        {/* CTA Buttons */}
                        {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button
                                size="lg"
                                onClick={() => scrollToSection("projetos")}
                            >
                                Conheça meus projetos
                            </Button>
                            <Button
                                color="alternative"
                                size="lg"
                                onClick={() => scrollToSection("pesquisa")}
                            >
                                Ver publicações
                            </Button>
                        </div> */}
                    </div>
                </div>
            </div>

        </section >
    );
}

export default Hero;