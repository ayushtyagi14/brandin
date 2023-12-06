import { recoleta } from '@/app/layout';
import React from 'react';
import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';

const FeatureCard = ({ icon, title, description, direction }) => (
    <motion.div
        className='glass p-3 flex flex-col items-center w-[400px] gap-2'
        variants={slideIn(direction, "tween", 0.8, 0.5)}
        initial="hidden"
        whileInView="show"
    >
        <div className='flex flex-row items-center w-full justify-between'>
            <img src={`/assets/${icon}.png`} alt={icon} width={100} height={100} />
            <h1 className={`${recoleta.className} text-[26px] text-center leading-none`}>{title}</h1>
        </div>
        <p className='text-[14px]'>{description}</p>
    </motion.div>
);

const FeatureCard2 = ({ icon, title, description, direction }) => (
    <motion.div
        className='glass p-3 flex flex-col items-center w-[370px] md:w-[80%] mx-auto gap-2'
        variants={slideIn(direction, "tween", 0.8, 0.5)}
        initial="hidden"
        whileInView="show"
    >
        <div className='flex flex-row items-center w-full justify-between'>
            <img src={`/assets/${icon}.png`} alt={icon} width={100} height={100} />
            <h1 className={`${recoleta.className} text-[26px] text-center leading-none`}>{title}</h1>
        </div>
        <p className='text-[14px]'>{description}</p>
    </motion.div>
);

const Banner = () => {
    const featureCards = [
        {
            icon: 'coins',
            title: 'Credit System for Recognition',
            description: 'Earn credits through various engagement metrics, showcasing your influence and impact on the platform. A modern approach to recognition.',
        },
        {
            icon: 'showcase',
            title: 'Interactive Portfolio Showcase',
            description: 'Craft a dynamic portfolio that goes beyond static content, presenting your growth rates, audience impact, and more. It\'s your interactive profile to stand out.',
        },
        {
            icon: 'search',
            title: 'Personalized Search for Opportunities',
            description: 'Leverage a tailored search experience to connect with brands that align with your style and values. Find opportunities that resonate with your unique influence.',
        },
        {
            icon: 'analytics',
            title: 'Dashboard Analytics for Insights',
            description: 'Empower yourself with a personalized dashboard, offering insights into your campaign performance, audience engagement, and overall impact on brands.',
        },
        {
            icon: 'community',
            title: 'Community Collaboration Hub',
            description: 'Be part of a vibrant community where Gen Z influencers and brands converge. Collaborate, share ideas, and amplify your reach within a dynamic social space.',
        },
        {
            icon: 'management',
            title: 'Next-Gen Campaign Management',
            description: 'Manage your campaigns effortlessly with BrandIn\'s intuitive dashboard, providing brands with real-time insights and influencers with a centralized platform for efficient campaign management.',
        },
    ];

    return (
        <div className='px-6 flex flex-col items-center mb-20 overflow-x-hidden pb-4'>
            <h1
                className={`${recoleta.className} lg:text-[80px] md:text-[60px] text-[40px]`}
            >
                LinkedIn for GenZ
            </h1>
            <div className='flex lg:flex-row flex-col items-center justify-center 2xl:gap-10 w-full 2xl:w-[80%] mx-auto mt-10'>
                <div className='lg:flex flex-col gap-10 hidden'>
                    {featureCards.slice(0, 3).map((card, index) => (
                        <FeatureCard key={index} {...card} direction={"right"} />
                    ))}
                </div>
                <div className='flex flex-col gap-10 lg:hidden'>
                    {featureCards.slice(0, 3).map((card, index) => (
                        <FeatureCard2 key={index} {...card} direction={"right"} />
                    ))}
                </div>
                <img src='/assets/growth.png' alt='Growth' className='rounded-3xl' />
                <div className='lg:flex flex-col gap-10 hidden'>
                    {featureCards.slice(3, 6).map((card, index) => (
                        <FeatureCard key={index} {...card} direction={"left"} />
                    ))}
                </div>
                <div className='flex flex-col gap-10 lg:hidden'>
                    {featureCards.slice(3, 6).map((card, index) => (
                        <FeatureCard2 key={index} {...card} direction={"left"} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;
