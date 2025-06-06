import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import mentor1 from "../../assets/images/Mentors/mentor1.webp";
import mentor2 from "../../assets/images/Mentors/mentor2.webp";
import mentor3 from "../../assets/images/Mentors/mentor3.webp";
import mentor4 from "../../assets/images/Mentors/mentor4.webp";
import mentor5 from "../../assets/images/Mentors/mentor5.webp";

const mentors = [
    { name: "Abhishek", role: "Fullstack Developer", image: mentor1 },
    { name: "Sophia", role: "UI/UX Designer", image: mentor2 },
    { name: "Daniel", role: "Backend Engineer", image: mentor3 },
    { name: "Olivia", role: "Project Manager", image: mentor4 },
    { name: "Emma", role: "Frontend Developer", image: mentor5 },
];

const MentorSection = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const navigate = useNavigate();

    const prevMentor = () => {
        setSelectedIndex((prev) => (prev === 0 ? mentors.length - 1 : prev - 1));
    };

    const nextMentor = () => {
        setSelectedIndex((prev) => (prev === mentors.length - 1 ? 0 : prev + 1));
    };

    const handleJoinTeam = () => {
        navigate('/carriers'); // This will navigate to the careers page
    };

    return (
        <div className="bg-red p-12 m-7 text-center rounded-md flex flex-col items-center">
            {/* Title */}
            <h2 className="text-3xl font-bold mb-8 text-white">Meet the Mentors</h2>

            {/* Mentor Layout */}
            <div className="relative w-full max-w-3xl flex justify-center items-center">
                {/* Mentor Images */}
                <div className="relative flex justify-center items-center w-full">
                    {/* MOBILE VIEW: Only show main mentor */}
                    <div className="z-10 block md:hidden">
                        <img
                            src={mentors[selectedIndex].image}
                            alt="Main Mentor"
                            className="w-40 h-40 rounded-full border-b-4 border-white shadow-lg object-cover aspect-square"
                        />
                    </div>

                    {/* DESKTOP VIEW: Show 5 mentors */}
                    <div className="hidden md:flex relative justify-center items-center w-full">
                        <div className="absolute left-20 top-35">
                            <img
                                src={mentors[(selectedIndex + 1) % mentors.length].image}
                                alt="Left Mentor"
                                className="w-30 h-30 rounded-full border border-white shadow-lg object-cover aspect-square"
                            />
                        </div>

                        <div className="absolute left-[-82px] top-80 ">
                            <img
                                src={mentors[(selectedIndex + 2) % mentors.length].image}
                                alt="Left Bottom Mentor"
                                className="w-30 h-30 rounded-full border border-white shadow-lg object-cover aspect-square"
                            />
                        </div>

                        {/* Center Mentor */}
                        <div className="z-10">
                            <img
                                src={mentors[selectedIndex].image}
                                alt="Main Mentor"
                                className="w-40 h-40 rounded-full border border-white shadow-lg object-cover aspect-square"
                            />
                        </div>

                        <div className="absolute right-20 top-35">
                            <img
                                src={mentors[(selectedIndex + 3) % mentors.length].image}
                                alt="Right Bottom Mentor"
                                className="w-30 h-30 rounded-full border border-white shadow-lg object-cover aspect-square"
                            />
                        </div>

                        <div className="absolute right-[-82px] top-80">
                            <img
                                src={mentors[(selectedIndex + 4) % mentors.length].image}
                                alt="Right Mentor"
                                className="w-30 h-30 rounded-full border border-white shadow-lg object-cover aspect-square"
                            />
                        </div>
                    </div>
                </div>

                {/* Left Arrow */}
                <button
                    className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-buttongray transition z-20 md:left-60"
                    onClick={prevMentor}
                >
                    <FaChevronLeft className="text-black text-xl" />
                </button>

                {/* Right Arrow */}
                <button
                    className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-buttongray transition z-20 md:right-60"
                    onClick={nextMentor}
                >
                    <FaChevronRight className="text-black text-xl" />
                </button>
            </div>

            {/* Selected Mentor Details */}
            <div className="text-center mt-6">
                <h3 className="text-2xl font-semibold text-white">
                    {mentors[selectedIndex].name}
                </h3>
                <p className="text-white text-lg">{mentors[selectedIndex].role}</p>
                <p className="text-base text-white mt-4 max-w-md mx-auto">
                    Welcome to Shouters Academy! Our mission is to equip you with the
                    skills and confidence to excel in your journey. We believe in the
                    transformative power of education and are dedicated to helping you
                    unlock your full potential. Together, let's shape a brighter, more
                    successful future.
                </p>
                <button 
                    onClick={handleJoinTeam}
                    className="mt-6 bg-black text-white text-lg py-3 px-6 rounded-lg shadow-md border-b-4 border-r-4 border-white hover:bg-gray-800 transition"
                >
                    Join the team
                </button>
            </div>
        </div>
    );
};

export default MentorSection;