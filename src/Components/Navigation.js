import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import brand from "../Assets/brand.jpg";
import { Card, Image, Navbar, Nav, Container, Form } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";

function Navigation() {
    return (
        <div className="sticky top-0 z-10 flex flex-col pt-2 backdrop-blur">
            <Navbar className="flex flex-row items-center justify-center w-full gap-10 font-mono text-3xl" draggable={false}>
                <motion.div
                    initial={{ opacity: 0, x: -500 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 1.4,
                        type: "spring",
                        damping: 10.3,
                    }}
                    className="ml-[50px] flex flex-row items-center sm:gap-x-3 "
                >
                    <SocialIcon
                        url="https://github.com/GorudenTaiga"
                        target="blank"
                        fgColor="gray"
                        bgColor="transparent"
                        className="transition-all duration-300 ease-out rounded-full hover:bg-yellow-400"
                        style={{ width: 50, height: 50 }}
                    />
                    <SocialIcon
                        url="https://discord.com/users/609741436715532301"
                        target="blank"
                        fgColor="gray"
                        bgColor="transparent"
                        className="transition-all duration-300 ease-out rounded-full hover:bg-yellow-400"
                        style={{ width: 50, height: 50 }}
                    />
                    <SocialIcon
                        url="https://api.whatsapp.com/send/?phone=6287743160171"
                        target="blank"
                        fgColor="gray"
                        bgColor="transparent"
                        className="transition-all duration-300 ease-out rounded-full hover:bg-yellow-400"
                        style={{ width: 50, height: 50 }}
                    />
                    <SocialIcon
                        url="mailto:goruden.taiga27@gmail.com"
                        target="blank"
                        fgColor="gray"
                        bgColor="transparent"
                        className="transition-all duration-300 ease-out rounded-full hover:bg-yellow-400"
                        style={{ width: 50, height: 50 }}
                    />
                </motion.div>

                <div className="flex justify-end w-full mr-10">
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.4,
                            type: "spring",
                            bounce: 0.6,
                        }}
                       
                    >
                        <Nav >
                            <Nav.Link href="#home" className="text-white">
                                <motion.h2
                                    whileHover={{
                                        scale: 1.05,
                                        color: "rgb(250, 204, 21)",
                                    }}
                                    transition={{ duration: 0.2 }}
                                    whileTap={{
                                        scale: 1,
                                        color: "rgba(250, 204, 21,0.6)",
                                    }}
                                >
                                    Home
                                </motion.h2>
                            </Nav.Link>
                            <Nav.Link href="#skills" className="text-white">
                                <motion.h2
                                    whileHover={{
                                        scale: 1.05,
                                        color: "rgb(250, 204, 21)",
                                    }}
                                    transition={{ duration: 0.2 }}
                                    whileTap={{
                                        scale: 1,
                                        color: "rgba(250, 204, 21,0.6)",
                                    }}
                                >
                                    Skills
                                </motion.h2>
                            </Nav.Link>
                            <Nav.Link href="#projects" className="text-white">
                                <motion.h2
                                    whileHover={{
                                        scale: 1.05,
                                        color: "rgb(250, 204, 21)",
                                    }}
                                    transition={{ duration: 0.2 }}
                                    whileTap={{
                                        scale: 1,
                                        color: "rgba(250, 204, 21,0.6)",
                                    }}
                                >
                                    Projects
                                </motion.h2>
                            </Nav.Link>
                        </Nav>
                    </motion.div>
                </div>
            </Navbar>
        </div>
    );
}

export default Navigation;
