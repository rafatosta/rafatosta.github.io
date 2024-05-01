import { Element } from "react-scroll";

function AboutMe() {
    return (
        <Element name={"About"} id="about">
            <div className="bg-red h-screen flex flex-row justify-center items-center ">
                <h1>About Me</h1>
            </div>
        </Element>);
}

export default AboutMe;