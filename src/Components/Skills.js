import { MotionConfig, MotionConfigContext, motion } from "framer-motion";
import React from "react";

function Skills() {
    return (
        <div className="h-screen relative flex flex-col px-10 justify-evenly mx-auto items-center">
            <motion.div
                initial={{ opacity: 0, y: -300 }}
                transition={{ duration: 1.3 }}
                whileInView={{ opacity: 1, y: 0 }}
            >
                <h1>Skills</h1>
            </motion.div>
        </div>
    );
}

export default Skills;
