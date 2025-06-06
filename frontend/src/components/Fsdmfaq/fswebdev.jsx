import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Import icons

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a Full Stack Web Development course?",
      answer:
        "A Full Stack Web Development course teaches front-end, back-end, databases, and deployment skills.",
    },
    {
      question: "Are the classes live or recorded?",
      answer: "The classes are a mix of live sessions and recorded lectures for flexibility.",
    },
    {
      question: "What if I miss a live class?",
      answer: "You will have access to recorded sessions to catch up at your convenience.",
    },
    {
      question: "What if my queries or doubts are not solved during a live class?",
      answer: "You can ask questions in the next session or contact support for help.",
    },
    {
      question: "Will I receive a certificate upon course completion?",
      answer: "Yes, a certificate will be provided upon successfully completing the course.",
    },
    {
      question: "Can I attend a demo class before enrolling?",
      answer: "Yes, a free demo class is available before enrolling in the course.",
    },
    {
      question: "Does this course offer placement assistance?",
      answer: "Yes, placement assistance is provided for eligible students.",
    },
    {
      question: "Can I enroll in this course after 12th grade?",
      answer: "Yes, students who have completed 12th can enroll in the Full Stack Web Development course.",
    },
    {
      question: "What are the benefits of learning Full Stack Web Development?",
      answer: "It opens career opportunities as a developer, freelancer, or entrepreneur, and enhances problem-solving skills.",
    },
  ];

  return (
    <div className="bg-gray py-10 px-6">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold">FAQs About Online Full Stack Web Development Course</h2>
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

export default FAQSection;