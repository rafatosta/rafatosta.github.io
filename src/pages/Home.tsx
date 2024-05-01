import Hero from "../components/Hero";
import Footer from "../components/Footer"
import AboutMe from "../components/AboutMe"

function Home() {
    return (<>
        <Hero />
        <main>
            <AboutMe />
        </main>
        <Footer />
    </>);
}

export default Home;