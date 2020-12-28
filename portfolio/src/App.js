import "./App.css";
import SliderPage from "react-slider-page";
import Navbar from "./Navbar";
import About from "./About";
import AlternateTimeline from "./Timeline";
function App() {
    return (
        <div style={{ display: "flex" }}>
            <SliderPage>
                {/* Introduction */}
                <section
                    id="Welcome"
                    style={{
                        backgroundColor: "orange",
                        textAlign: "center",
                    }}
                >
                    <div>Welcome to Aditya's Website</div>
                </section>

                {/* About */}
                <section
                    id="about"
                    style={{
                        backgroundColor: "teal",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <About />
                </section>

                {/* Projects */}
                <section
                    id="projects"
                    style={{
                        backgroundColor: "red",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <section
                        style={{
                            width: "100%",

                            border: "solid 2px cyan",
                            padding: "10%",
                        }}
                    >
                        <h1
                            style={{
                                textAlign: "center",
                                border: "solid 1px black",
                            }}
                        >
                            Projects
                        </h1>
                        <AlternateTimeline />
                    </section>
                </section>
                <section id="timeline" style={{ backgroundColor: "blue" }}>
                    <div>Timeline</div>
                </section>

                <section id="vue" style={{ backgroundColor: "cyan" }}>
                    <div>Vue</div>
                </section>
            </SliderPage>
        </div>
    );
}

export default App;
