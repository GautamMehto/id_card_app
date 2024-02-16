import React, { useState, useEffect } from 'react';


const ProfileCard = () => {
    // Create useState hook to store value of  user data in state. 
    const [profile, setProfile] = useState(null);

    // using UseEffect hook  to fetch the profile information when component mounts and update it whenever there is a change in the URL    
    // Function that gets the profile information for a specific user using an API call. The username is passed as a parameter.    
    // Use the `useEffect` Hook to get the profile information when the component mounts and update it whenever a change occurs.    
    // Function that gets called when the component mounts and updates the profile state with any changes made to it.    
    // Get the profile information for the current logged-in user and update the state with this data.
    useEffect(() => {
        fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
            .then((response) => response.json())
            .then((data) => setProfile(data.results[0]));
            // Printing Data On  Console For Testing Purpose
        console.log(profile);
    }, []);

    //  If  there is no profile data yet, show loading message; otherwise, display the profile card.
    if (!profile) {
        return <div className='w-full h-screen bg-gradient-to-tr from-gray-500 to-blue-500 flex justify-center items-center'>
            <h1 className='text-3xl text-white font-bold'>Loading...</h1>
        </div>;
    }
    // Destructuring the Profile  object to get individual properties like name, email etc.
    const { name, email, phone, picture, dob, gender } = profile;

    return (
        // Diplay Card  Layout With User Information
        <div className='w-full h-screen bg-gradient-to-tr from-gray-500 to-blue-500 flex justify-center items-center'>
            {/*  Using Tailwind CSS Classes */}
            <div className="ProfileBox bg-blue-950 flex justify-between gap-5 items-center min-w-2/5 h-60 min-w-2/5 rounded-lg hover:shadow-2xl">
                <div className='LeftSide w-1/3 h-full flex justify-center items-center relative overflow-hidden ml-3'>
                    <div className='w-40 h-40 bg-gradient-to-r from-cyan-500 to-blue-500 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full'></div>
                    <img className="w-36 h-36 rounded-full  z-10" src={picture.large} alt="Profile" />
                </div>
                <div className='RightSide pr-6'>
                    <h1 className="text-3xl text-white font-semibold mb-2">{name.title} {name.first} {name.last}</h1>
                    <p className="text-white mb-2 capitalize"><label className='font-semibold'>Gender: </label>{gender}</p>
                    <p className="text-white mb-2"><label className='font-semibold'>Email Address: </label>{email}</p>
                    <p className="text-white mb-2"><label className='font-semibold'>Phone Number: </label>{phone}</p>
                    <p className="text-white">
                        <label className='font-semibold'>Date Of Birth: </label>{dob.date.slice(0, 10)} ({dob.age} years old)
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;