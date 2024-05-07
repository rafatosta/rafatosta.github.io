import SocialMedia from "./SocialMedia";
import { motion } from "framer-motion";

function Hero() {
    return (
        <div className="relative bg-[url('assets/photo.avif')] bg-cover bg-center bg-no-repeat text-white ">
            <div
                className="absolute inset-0 bg-black/25 backdrop-blur-sm"
            ></div>
            <div className="relative h-screen mx-auto flex flex-col justify-center items-center gap-4 sm:gap-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 0.1,
                        x: { duration: 1 },
                        default: { ease: "linear" },
                    }}
                >
                    <h1 className="text-3xl font-extrabold sm:text-7xl">
                        I'm
                        <p className="font-extrabold text-red-700 text-6xl sm:text-9xl drop-shadow-2xl"> Rafael Tosta </p>
                    </h1>
                    <p className="text-xl sm:text-4xl drop-shadow-2xl">
                        Teacher and software developer
                    </p>
                </motion.div>

                <SocialMedia />

            </div>
        </div>
    );
}

export default Hero;