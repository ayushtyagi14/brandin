import { recoleta } from '@/app/layout';
import React from 'react';
import { motion } from 'framer-motion';
import { textVariant, planetVariants, fadeIn, slideIn } from '../utils/motion';

const About = () => {
    return (
        <motion.div
            className='md:mt-40 mt-52 mb-16 2xl:mt-56 bg-primary flex flex-col items-center gap-8 text-white md:p-10 p-5 overflow-x-hidden'
        >
            <h1
                className={`${recoleta.className} lg:text-[80px] md:text-[60px] text-[40px]`}
            >
                What is BrandIn?
            </h1>
            <motion.p
                className='md:text-[22px] text-center w-full 2xl:w-[80%] mx-auto'
                variants={fadeIn("up", "tween", 0.8, 1)}
                initial="hidden"
                whileInView="show"
            >
                BrandIn is your ultimate destination — a platform where influencers meet top brands for incredible success. It&apos;s your creative hub, connecting influencers with exciting brands to create amazing content.
            </motion.p>
            <motion.img
                src="/assets/portfolio.png"
                alt="Portfolio"
                width={500}
                height={500}
                variants={planetVariants('right')}
                initial="hidden"
                whileInView="show"
            />
            <motion.p
                className='md:text-[22px] text-center w-full 2xl:w-[80%] mx-auto'
                variants={fadeIn("down", "tween", 0.8, 0.8)}
                initial="hidden"
                whileInView="show"
            >
                At BrandIn, you not only find brands but also build your own portfolio. It&apos;s the place where creativity sparks, connections flourish, and growth knows no bounds. If you&apos;re ready to tell your story, find success, and showcase your best work, BrandIn is the perfect starting point.
            </motion.p>
        </motion.div>
    );
};

export default About;
