import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Publications from "../components/Publications";

function Home() {
    return (
        <>
            <Hero />
            <main>
                <AboutMe />
                <Publications />
            </main>
        </>);
}

export default Home;