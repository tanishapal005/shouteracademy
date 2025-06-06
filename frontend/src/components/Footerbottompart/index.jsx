




import React from "react";
import { Link } from "react-router-dom";

const FooterCoursesSection = () => {
  const sections = [
    {
      title: "Digital Marketing Courses",
      links: [
        "Digital Marketing Course",
        "SEO Course",
        "Social Media Marketing Course",
        "Content Writing Course",
        "YouTube Course",
        "Instagram Marketing Course",
        "Google Ads Course",
        "Copywriting Course",
        "Performance Marketing Course",
      ],
    },
    {
      title: "Web Development Courses",
      links: [
        "Full Stack Developer Course",
        "WordPress Course",
        "MERN Stack Course",
        "Laravel Course",
        "Web Development Course",
        "HTML Course",
        "ReactJS Course",
        "JavaScript Course",
        "PHP Course",
        "NodeJS Course",
        "Front-End Development Course",
        "Web Designing Course",
        "CSS Course",
      ],
    },
    {
      title: "More Professional Courses",
      links: [
        "Cyber Security Course",
        "Tableau Course",
        "Android App Development Course",
        "Mobile App Development Course",
        "Power BI Course",
      ],
    },
    {
      title: "Free Courses",
      links: [
        "Semrush Course",
        "Google Tag Manager Course",
        "Blogging Course",
        "Photoshop Course",
        "Video Editing Course",
        "AngularJS Course",
        "Shopify Course",
        "Django Course",
        "Email Marketing Course",
        "Affiliate Marketing Course",
      ],
    },
    {
      title: "Interview Questions",
      links: [
        "HTML Interview Questions",
        "CSS Interview Questions",
        "PHP Interview Questions",
        "JavaScript Interview Questions",
        "Flutter Interview Questions",
        "Data Structure Interview Questions",
        "Java Interview Questions",
        "MySQL Interview Questions",
        "Python Interview Questions",
        "DBMS Interview Questions",
        "Power BI Interview Questions",
        "Angular Interview Questions",
        "ReactJS Interview Questions",
        "C Interview Questions",
        "Django Interview Questions",
        "Email Marketing Interview Questions",
        "Content Writing Interview Questions",
        "NodeJS Interview Questions",
        "SEO Interview Questions",
        "OOPS Interview Questions",
        "SQL Interview Questions",
        "Digital Marketing Interview Questions",
      ],
    },
  ];

  return (
    <>
      <hr className="border-gray-600" />
      <section className="bg-black text-white py-10 px-4 sm:px-6 md:px-8 lg:px-20">
        <div className="container mx-auto max-w-screen-xl">
          {sections.map((section, index) => (
            <div key={index} className="mb-6">
              {/* Section Title (Now Bigger & Bolder) */}
              <h3 className="text-xl font-bold text-white mb-5">{section.title}</h3>
              {/* Separator Line Under Title */}
              <hr className="border-gray-600 mb-5" />

              {/* Links */}
              <div className="flex flex-wrap text-gray-300 mt-5 text-sm">
                {section.links.map((link, idx) => (
                  <React.Fragment key={idx}>
                    <Link
                      to="/"
                      title={link}
                      className="hover:text-red-500 transition-all duration-300 whitespace-nowrap"
                    >
                      {link}
                    </Link>
                    {idx < section.links.length - 1 && (
                      <span className="text-gray-500 mx-2">|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
          <hr className="border-gray-600 my-5" />
          <p className="text-center text-gray-400 text-sm">
            &copy; 2025. All Rights Reserved by{" "}
            <span className="text-red-500">Shouters Academy</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default FooterCoursesSection;