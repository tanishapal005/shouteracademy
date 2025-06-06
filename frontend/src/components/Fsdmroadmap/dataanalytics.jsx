import React from "react";
import vector1 from "../../assets/images/Fullstackdigitalmaketerhighlights/vector1.webp";
import vector2 from "../../assets/images/Fullstackdigitalmaketerhighlights/vector2.webp";
import vector3 from "../../assets/images/Fullstackdigitalmaketerhighlights/vector3.webp";
import vector4 from "../../assets/images/Fullstackdigitalmaketerhighlights/vector4.webp";
import vector5 from "../../assets/images/Fullstackdigitalmaketerhighlights/vector5.webp";

const DataAnalyticsRoadmap = () => {
    return (
        <div className="py-10 flex justify-center items-center min-h-screen bg-white px-4 md:px-8">
            <div className="max-w-4xl w-full relative">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-lg md:text-xl font-semibold">
                        How does this Data Analytics course work?
                    </h2>
                    <p className="text-gray text-sm md:text-base">
                        Your Roadmap to Becoming a Professional Data Analyst
                    </p>
                </div>

                {/* Mobile Layout (No Images) */}
                <div className="flex flex-col md:hidden items-center">
                    <div className="w-full max-w-4xl flex flex-col items-center space-y-6">
                        {[
                            { title: "Learn Data Fundamentals", description: "Understand data types, collection methods, and storage." },
                            { title: "Master Excel & SQL", description: "Work with spreadsheets and databases for data manipulation." },
                            { title: "Data Visualization & Python", description: "Use Python and visualization tools to analyze data." },
                            { title: "Capstone Project & Job Readiness", description: "Complete a real-world project and prepare for job opportunities." }
                        ].map((step, index) => (
                            <div key={index} className="p-4 border-2 border-black shadow-lg rounded-lg bg-white w-full max-w-[300px] text-center">
                                <h3 className="font-semibold text-black">{step.title}</h3>
                                <p className="text-sm text-gray">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop Layout (With Images) */}
                <div className="hidden md:flex relative flex-row items-start">
                    {/* Left Side */}
                    <div className="relative w-1/3 flex flex-col items-center">
                        <img
                            src={vector1}
                            alt="Roadmap Path"
                            className="absolute w-24 h-[450px] left-1/2 transform -translate-x-1/2 opacity-90 filter contrast-150 brightness-0 mix-blend-multiply rotate-180"
                        />
                        <div className="relative flex flex-col items-center gap-10">
                            <img src={vector5} alt="Step 1" className="w-6 h-6 absolute -top-2 -left-14" />
                            <img src={vector4} alt="Step 2" className="w-6 h-6" />
                            <button className="w-[114px] bg-red text-white font-semibold px-4 py-2 rounded-lg shadow-md absolute top-36 -left-28">
                                Apply Now
                            </button>
                            <img src={vector3} alt="Step 3" className="w-6 h-6 absolute top-[272px] -left-10" />
                            <img src={vector2} alt="Step 4" className="w-6 h-6 absolute -bottom-[432px] -right-16" />
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="w-2/3 space-y-8">
                        {[
                            { title: "Learn Data Fundamentals", description: "Understand data types, collection methods, and storage." },
                            { title: "Master Excel & SQL", description: "Work with spreadsheets and databases for data manipulation." },
                            { title: "Data Visualization & Python", description: "Use Python and visualization tools to analyze data." },
                            { title: "Capstone Project & Job Readiness", description: "Complete a real-world project and prepare for job opportunities." }
                        ].map((step, index) => (
                            <div key={index} className={`p-4 border-2 border-black shadow-lg rounded-lg bg-white w-[300px] ${index % 2 !== 0 ? 'ml-16' : ''}`}>
                                <h3 className="font-semibold text-black">{step.title}</h3>
                                <p className="text-sm text-gray">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataAnalyticsRoadmap;
