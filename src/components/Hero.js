import { recoleta } from '@/app/layout';
import React from 'react';
import { motion } from 'framer-motion';
import { slideIn } from '@/utils/motion';

const Hero = () => {

    return (
        <div className='relative flex flex-col items-center md:pt-24 pt-32'>
            <h1 className={`${recoleta.className} lg:text-[200px] md:text-[120px] text-[60px] 2xl:text-[280px] text-center leading-tight text-primary cursor-default`}>
                Unleash Your Influence
            </h1>
            <motion.video
                autoPlay
                muted
                loop
                playsInline
                className="h-full absolute mt-16 md:rounded-[40px]"
                variants={slideIn("up", "tween", 0, 0.8)}
                initial="hidden"
                animate="show"
                exit="hidden"
            >
                <source src="/assets/video1.mp4" type="video/mp4" />
            </motion.video>
        </div>
    );
};

export default Hero;
