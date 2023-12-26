import React from "react";
import Navigation from "./Components/Navigation";
import { Container } from "react-bootstrap";
import Home from "./Components/Home";
import Skills from "./Components/Skills";

const Main = () => {
    return (
        <>
            <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
                <Navigation />
                <section id="home" className="snap-start">
                    <Home />
                </section>

                <section id="skills" className="snap-center">
                    <Skills />
                </section>
            </div>
        </>
    );
};

export default Main;
