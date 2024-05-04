import { moreInfo } from "../data";
import avatar from "../assets/avatar.jpg"

function AboutMe() {
    return (
        <div className="relative h-screen flex flex-col justify-center items-center gap-12">
            <p className="font-bold text-2xl">About Me</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-20 px-6">
                <img src={avatar} className="rounded-full border-2 border-gray-600 h-52 w-52 sm:h-80 sm:w-80 flex items-center justify-center" alt="Avatar" />
                <div className="flex flex-col justify-center items-center sm:items-start gap-12 sm:w-1/4"> <p className="text-justify">{moreInfo}</p>

                    <div className="bottom-16 flex items-center justify-center">
                        <a
                            className="block w-auto rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500"
                            href="#"
                        >
                            My CV
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AboutMe;