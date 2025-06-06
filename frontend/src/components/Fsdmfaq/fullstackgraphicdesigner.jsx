import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Import icons

const FAQSectionGraphicDesign = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the Full Stack Graphic Designer course?",
      answer:
        "The Full Stack Graphic Designer course covers design principles, software tools, branding, UI/UX, and digital marketing graphics.",
    },
    {
      question: "Are the classes live or recorded?",
      answer: "The course includes both live sessions and recorded lectures for flexible learning.",
    },
    {
      question: "What if I miss a live class?",
      answer: "Recorded sessions will be available so you can catch up on missed content.",
    },
    {
      question: "What if I have doubts that are not solved during a live class?",
      answer: "You can ask questions in the next session or contact the support team for assistance.",
    },
    {
      question: "Will I receive a certificate upon course completion?",
      answer: "Yes, a certificate will be awarded upon successfully completing the Full Stack Graphic Designer course.",
    },
    {
      question: "Can I attend a demo class before enrolling?",
      answer: "Yes, a free demo class is available before enrollment.",
    },
    {
      question: "Does this course provide job placement assistance?",
      answer: "Yes, placement assistance is offered for eligible students.",
    },
    {
      question: "Can I enroll in this course after 12th grade?",
      answer: "Yes, students who have completed 12th grade can join the Full Stack Graphic Designer course.",
    },
    {
      question: "What are the benefits of learning Full Stack Graphic Design?",
      answer: "It enhances your creativity, helps you master industry-standard tools, and prepares you for diverse design careers in branding, UI/UX, and marketing.",
    },
  ];

  return (
    <div className="bg-gray py-10 px-6">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold">FAQs About Online Full Stack Graphic Designer Course</h2>
        <p className="text-black text-sm">Here’s everything you may ask.</p>
      </div>

      {/* FAQs List */}
      <div className="bg-gray p-4 rounded-lg shadow-md">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-black last:border-0">
            <button
              className="w-full text-left py-3 font-medium flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-black" />
              ) : (
                <ChevronDown className="w-5 h-5 text-black" />
              )}
            </button>
            {openIndex === index && <p className="text-sm text-black pb-3">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSectionGraphicDesign;
