import { recoleta } from '@/app/layout';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Form = ({ closeForm }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        instagram: '',
        youtube: '',
        facebook: '',
        twitter: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const socialMediaHandles = ['instagram', 'youtube', 'facebook', 'twitter'];

    return (
        <div className='modal bg-white flex flex-col gap-5 items-center w-max p-10'>
            <FontAwesomeIcon
                icon={faTimes}
                className='absolute top-3 right-3 text-gray-500 cursor-pointer'
                onClick={closeForm}
            />
            <div className='leading-none'>
                <h1 className={`${recoleta.className} text-[40px] text-center`}>BrandIn</h1>
                <h1 className={`${recoleta.className} text-[30px] text-center`}>Early Access Form</h1>
            </div>
            <form onSubmit={closeForm} className='flex flex-col gap-5'>
                <div className='flex flex-row items-center gap-10'>
                    <input
                        type="text"
                        name="firstName"
                        placeholder='Enter your first name'
                        className='border-b rounded-b focus:outline-none p-2'
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder='Enter your last name'
                        className='border-b rounded-b focus:outline-none p-2'
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <input
                    type="email"
                    name="email"
                    placeholder='Enter your email'
                    className='border-b rounded-b focus:outline-none p-2'
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <h1 className={`${recoleta.className} text-[22px] text-center`}>Social Media Handles:</h1>
                <div className='grid grid-cols-2 items-center gap-3'>
                    {socialMediaHandles.map(handle => (
                        <div key={handle} className='flex flex-row items-center gap-10'>
                            <input
                                type="text"
                                name={handle}
                                placeholder={handle.charAt(0).toUpperCase() + handle.slice(1)}
                                className='border-b rounded-b focus:outline-none p-2'
                                value={formData[handle]}
                                onChange={handleChange}
                            />
                        </div>
                    ))}
                </div>
                <button className='py-2 px-8 mx-auto bg-secondary rounded-lg mt-8' type='submit'>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;
