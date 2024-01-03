import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Foto_Diri from "../Assets/Foto-Diri.jpeg";
import useDocumentTitle from "../Public Functions/useDocumentTitle";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Navigation from "./Navigation";

function Home() {
    const [salam] = useTypewriter({
        words: [
            "Assalamualaikum",
            "Good Morning!",
            "Good Afternoon!",
            "Good Evening!",
            "Hello World!",
        ],
        loop: true,
        typeSpeed: 30,
        delaySpeed: 2000,
        deleteSpeed: 10,
    });
    const [seorang] = useTypewriter({
        words: [
            "Programmer",
            "Web Developer (Back-end)",
            "Game Developer",
            "Gamer",
        ],
        loop: true,
        typeSpeed: 30,
        delaySpeed: 2000,
        deleteSpeed: 10,
    });
    useDocumentTitle("🤖 Portofolio");
    const ref = useRef(null);

    return (
        <>
            <div className="flex items-center justify-center h-screen space-y-8 overflow-hidden">
                <motion.img
                    ref={ref}
                    initial={{ opacity: 0, x: -300 }}
                    transition={{ duration: 1.3, damping: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="bg-warning max-w-[20%] z-20 object-cover rounded-full w-64 h-64"
                    src={Foto_Diri}
                    alt=""
                />
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, x: 300 }}
                    transition={{ duration: 1.3, damping: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="ml-[15%] subpixel-antialiased justify-start"
                >
                    <h1 className="text-[48px] font-monospace font-medium min-w-[500px]">
                        <span>
                            {salam}
                            <Cursor cursorColor="#F7AB0A" />
                        </span>
                    </h1>
                    <div className="text-[20px] font-mono max-w-[500px]">
                        <p>Perkenalkan nama saya Reza Arfana Rafi</p>
                        <p>
                            Saya adalah seorang{" "}
                            <span>
                                {seorang}
                                <Cursor cursorColor="#F7AB0A" />
                            </span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </>
    );
}

export default Home;
