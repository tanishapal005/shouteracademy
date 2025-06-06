import React, { useEffect, useState } from "react";
import storyimage1 from "../../assets/images/Aboutpage/building-img.webp"
import storyimage2 from "../../assets/images/Aboutpage/book-img.webp"

const OurStory = () => {
  const [story, setStory] = useState(null);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/about");
        const data = await res.json();
        console.log("API response:", data);
        setStory(data);
      } catch (error) {
        console.error("Failed to load story:", error); 
      }
    };

    fetchStory();
  }, []);

  if (!story) return <div className="text-center p-10">Loading...</div>;

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between p-6 lg:p-16 bg-gray-1">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 space-y-4 p-5 flex flex-col items-center lg:items-start text-center lg:text-left">
        <div className="w-20 h-20 mb-4">
          <img src={storyimage2} alt="Book Icon" className="w-full h-full object-contain" />
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-red">{story.journeyTitle}</h2>
        <p className="text-gray text-sm lg:text-base leading-relaxed whitespace-pre-line">
          {story.journeyContent}
        </p>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0">
        <img
          src={storyimage1}
          alt="Our Journey"
          className="rounded-lg shadow-lg w-full h-[650px] max-w-sm lg:max-w-md"
        />
      </div>
    </section>
  );
};

export default OurStory;
















































// import React, { useEffect, useState } from "react";
// import bookimg from "../../assets/images/Aboutpage/book-img.webp"; // Book icon

// const OurStory = () => {
//   const [aboutData, setAboutData] = useState(null);

//   useEffect(() => {
//     const fetchAboutData = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/about-us");
//         const data = await response.json();
//         setAboutData(data);
//       } catch (error) {
//         console.error("Error fetching About Us data:", error);
//       }
//     };

//     fetchAboutData();
//   }, []);

//   if (!aboutData) {
//     return <div className="text-center p-10">Loading...</div>;
//   }

//   return (
//     <section className="flex flex-col lg:flex-row items-center justify-between p-6 lg:p-16 bg-gray-1">
//       {/* Left Side - Content */}
//       <div className="w-full lg:w-1/2 space-y-4 p-5 flex flex-col items-center lg:items-start text-center lg:text-left">
//         <div className="w-20 h-20 mb-4">
//           <img src={bookimg} alt="Book Icon" className="w-full h-full object-contain" />
//         </div>

//         <h2 className="text-3xl lg:text-4xl font-bold text-red">
//           {aboutData.journeyTitle}
//         </h2>

//         <p className="text-gray text-sm lg:text-base leading-relaxed whitespace-pre-line">
//           {aboutData.journeyContent}
//         </p>
//       </div>

//       {/* Right Side - Image */}
//       <div className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0">
//         <img
//           src={aboutData.imageUrl}
//           alt="Journey"
//           className="rounded-lg shadow-lg w-full h-[650px] max-w-sm lg:max-w-md"
//         />
//       </div>
//     </section>
//   );
// };

// export default OurStory;