import { recoleta } from '@/app/layout';
import React from 'react';
import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';

const Join = ({ openForm }) => {
    return (
        <div className='bg-primary text-white md:p-10 py-5 px-2 overflow-x-hidden'>
            <h1 className={`${recoleta.className} lg:text-[80px] md:text-[60px] text-[38px] text-center leading-none`}>
                Be Among the First! <br /> Join the Revolution.
            </h1>

            <div className='grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 items-stretch text-primary 2xl:w-[80%] mx-auto mt-8 pb-5 md:pb-0 px-2 md:px-0'>
                <motion.div
                    className='rounded-[25px] shadow-2xl p-5 mt-8 bg-[#acacf7] flex flex-col items-center gap-40 relative'
                    variants={slideIn("left", "tween", 0.8, 0.5)}
                    initial="hidden"
                    whileInView="show"
                >
                    <h1 className={`md:text-[34px] text-[22px] ${recoleta.className} z-[10]`}>100 FREE Credits Await You!</h1>
                    <img src="/assets/reward.png" alt="Rewards" width={300} className='absolute -mt-10' />
                    <p>
                        Excitement is building, and you can be part of it! Secure your spot on BrandIn&apos;s early access waitlist and receive a special gift: <strong> 100 FREE </strong>credits to kickstart your influencer journey.
                    </p>
                </motion.div>

                <motion.div
                    className='rounded-[25px] shadow-2xl p-5 mt-8 bg-[#d6faa6] flex flex-col items-center gap-40 relative'
                    variants={slideIn("right", "tween", 0.8, 0.5)}
                    initial="hidden"
                    whileInView="show"
                    id='waitlist'
                >
                    <h1 className={`md:text-[34px] text-[22px] ${recoleta.className} z-[10]`}>Get Ahead In Line! Join Now!</h1>
                    <img src="/assets/ahead.png" alt="ahead" width={160} className='absolute mt-7' />
                    <p className='z-[10]'>
                        Don&apos;t just follow the trend; <strong>set it!</strong> Join now and be at the forefront of the next-gen influencer community.
                    </p>
                    <button className='-mt-36 bg-primary text-white py-2 px-4 rounded-lg shadow-lg' onClick={openForm}>
                        Request for early access
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default Join;
