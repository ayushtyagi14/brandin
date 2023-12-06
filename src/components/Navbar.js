import { recoleta } from '@/app/layout'
import { useRouter } from 'next/navigation'

import React from 'react'

const Navbar = () => {
    const router = useRouter()

    return (
        <div
            className='glass fixed flex flex-row items-center md:gap-20 gap-10 p-5 mt-5 w-max lg:left-[35%] left-[5%] md:left-[25%] 2xl:left-[40%] z-[999]'
        >
            <h1 className={`text-[28px] ${recoleta.className}`}>BrandIn</h1>
            <button className='py-2 px-4 bg-secondary rounded-lg' onClick={() => router.push('#waitlist')}>
                Join Waitlist
            </button>
        </div>
    )
}

export default Navbar
