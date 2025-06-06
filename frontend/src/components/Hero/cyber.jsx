import Digitalmpageimg from "../../assets/images/Hero/cyberimg.webp"; // Import Image

const FSDigitalMarketer = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center p-6 space-y-6 lg:space-y-0 lg:space-x-6">
            {/* Left Section */}
            <div className="max-w-2xl text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl font-bold mb-6">Get Job-ready for Cyber Security Roles</h1>
                <p className="text-base sm:text-lg text-gray mb-4">
                    Top Mentorship Programs in Tech, Marketing, & Data—Designed and Delivered by industry maestros.
                </p>

                {/* Statistics */}
                <div className="flex flex-wrap justify-center lg:justify-start space-x-4 sm:space-x-6">
                    <div className="text-center">
                        <span className="text-2xl sm:text-3xl font-bold">4.9 ⭐</span>
                        <p className="text-xs sm:text-sm text-gray">(19,476 Reviews)</p>
                    </div>
                    <div className="text-center">
                        <span className="text-2xl sm:text-3xl font-bold">20,000+</span>
                        <p className="text-xs sm:text-sm text-gray">Aspirants Mentored</p>
                    </div>
                    <div className="text-center">
                        <span className="text-2xl sm:text-3xl font-bold">11+</span>
                        <p className="text-xs sm:text-sm text-gray">Industry Mentors</p>
                    </div>
                </div>

     
            </div>

            {/* Right Image Section */}
            <div className="w-full sm:w-[400px] md:w-[500px] lg:w-[566px] h-auto  rounded-xl  overflow-hidden">
                <img
                    src={Digitalmpageimg}
                    alt="Full Stack Digital Marketer"
                    className="w-full h-full rounded-xl object-cover mix-blend-multiply"
                />
            </div>
        </div>
    );
};

export default FSDigitalMarketer;