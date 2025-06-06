import React from "react"; 
import img6 from "../../assets/images/Whyjoinfsdm/img6.webp";
import img2 from "../../assets/images/Whyjoinfsdm/img2.webp";
import img3 from "../../assets/images/Whyjoinfsdm/img3.webp";
import img4 from "../../assets/images/Whyjoinfsdm/img4.webp";
import img5 from "../../assets/images/Whyjoinfsdm/img5.webp";
import img1 from "../../assets/images/Whyjoinfsdm/img1.webp"; 

const WhoShouldJoinWordPress = () => {
    return (
        <div className="bg-white  py-2">

        <div className="flex flex-col lg:flex-row justify-between  mb-11 items-center bg-white p-6 md:p-10 mt-12 mx-4 md:mx-7 border-b-4 rounded-xl shadow-lg border border-red">
            {/* Left Section */}
            <div className="max-w-2xl text-center lg:text-left">
                <h1 className="text-2xl md:text-3xl font-bold mb-4">
                    Who Should Join WordPress Development Course by
                    ShouterAcademy?
                </h1>

                {/* Image Categories */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-6 mt-6">
                    {[{ img: img6, text: "Aspiring WordPress Developers" }, { img: img2, text: "Freelancers & Bloggers" }, { img: img3, text: "Web Designers" }, { img: img4, text: "Small Business Owners" }, { img: img5, text: "Digital Marketers" }]
                        .map((item, index) => (
                            <div key={index} className="text-center border-b-4 border-red rounded-lg shadow-md p-2 bg-gray-2">
                                <img src={item.img} alt={item.text} className="w-16 sm:w-20 h-16 sm:h-20 mx-auto rounded-md" />
                                <p className="font-semibold mt-2 text-sm sm:text-base">{item.text}</p>
                            </div>
                        ))}
                </div>

                <p className="text-sm text-black">
                    WordPress powers over 40% of the web, making it the most popular content management system. 
                    Learning WordPress development allows you to create custom websites, themes, and plugins, helping businesses and individuals establish a strong online presence.
                </p>
            </div>

            {/* Right Image Section */}
            <div className="w-full md:w-96 h-auto p-4 border-2 border-gray rounded-xl shadow-lg relative mt-6 lg:mt-0">
                <img
                    src={img1}
                    alt="WordPress Development Team"
                    className="w-full md:w-[400px] h-auto rounded-xl shadow-md"
                />
                <div className="absolute inset-0 border-2 border-black border-r-4 border-b-4 rounded-xl -z-10 translate-x-2 translate-y-2"></div>
            </div>
        </div>
        </div>
    );
};

export default WhoShouldJoinWordPress;
