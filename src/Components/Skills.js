import { MotionConfig, MotionConfigContext, motion } from "framer-motion";
import { CsharpOriginal, UnrealengineOriginal } from "devicons-react"
import React, { useState } from "react";

function Skills() {
    const [csHovered, isCsHovered] = useState(false);
    const [ueHovered, isUEHovered] = useState(false);
    return (
        <div className="relative flex flex-col items-center h-screen px-10 mx-auto top-52">
            <motion.div
                initial={{ opacity: 0, y: -300 }}
                transition={{ duration: 1.3 }}
                whileInView={{ opacity: 1, y: 0 }}
            >
                <h1>Skills</h1>
            </motion.div>
            <div className="flex flex-row">
                <motion.div
                    initial={{ opacity: 0, x: -300 }}
                    transition={{ duration: 0.3 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={csHovered ? { scale: 1.1, transitionDuration: 0.3 } : {scale: 1}}
                >
                    {csHovered ?
                        <motion.div initial={{ opacity:0, x:250 }} transition={{ duration: 0.3 }} whileInView={{ opacity: 1, x: 100 }} className="absolute w-[200px] bg-black rounded right-[350px] p-2">
                            <p>I have so many experiences (2021 - Present) in C#.</p>
                            <p>I learn C# because this is my most favourite Programming Language.</p>
                        </motion.div> :
                        ""
                    }
                    <CsharpOriginal size={150} className="flex flex-col" onMouseOver={() => isCsHovered(true)} onMouseLeave={() => isCsHovered(false)}></CsharpOriginal>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -300 }}
                    transition={{ duration: 0.3 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={ueHovered ? { scale: 1.1, transitionDuration: 0.3 } : {scale: 1}}
>
                    {ueHovered ?
                        <motion.div initial={{ opacity:0, x:-250 }} transition={{ duration: 0.3 }} whileInView={{ opacity: 1, x: -100 }} className="absolute w-[200px] bg-black rounded left-[350px] p-2">
                            <p>Currently i'm using Unreal Engine 5 for my work at PT. Jivaloka Prasanna Sanasi as Game Developer majoring Programming.</p>
                            <p>And i have 2 years experience in this game engine, especially Blueprint Visual Scripting</p>
                        </motion.div> :
                        ""
                    }
                    <UnrealengineOriginal size={150} className="flex flex-col" onMouseOver={() => isUEHovered(true)} onMouseLeave={() => isUEHovered(false)}></UnrealengineOriginal>
                </motion.div>
            </div>
        </div>
    );
}

export default Skills;
