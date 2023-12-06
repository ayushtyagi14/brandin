import { useRouter } from 'next/navigation';
import React from 'react';

const Footer = () => {
    const router = useRouter()

    return (
        <footer className="text-primary p-6 text-center mt-20">
            <div className="flex justify-center mb-4">
                <a href="#" className="mx-2 hover:text-gray-400">
                    <img src="/assets/instagram.png" alt="Instagram" width={40} height={40} />
                </a>
                <a href="#" className="mx-2 hover:text-gray-400">
                    <img src="/assets/facebook.png" alt="Facebook" width={40} height={40} />
                </a>
                <a href="#" className="mx-2 hover:text-gray-400">
                    <img src="/assets/twitter.png" alt="Twitter" width={40} height={40} />
                </a>
                <a href="#" className="mx-2 hover:text-gray-400">
                    <img src="/assets/linkedin.png" alt="LinkedIn" width={40} height={40} />
                </a>
            </div>
            <button className="bg-secondary py-2 px-6 rounded-lg" onClick={() => router.push('#waitlist')}>
                Join the Waitlist
            </button>
            <p className="mt-4">&copy;2023 BrandIn. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
