import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Import icons

const FAQSectionFramer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the Framer Development course?",
      answer:
        "The Framer Development course teaches you how to design and build interactive websites and prototypes using Framer.",
    },
    {
      question: "Are the classes live or recorded?",
      answer: "The course includes both live sessions and recorded lectures for flexible learning.",
    },
    {
      question: "What if I miss a live class?",
      answer: "You will have access to recorded sessions so you can catch up at your convenience.",
    },
    {
      question: "Do I need coding knowledge to use Framer?",
      answer: "No, Framer allows you to create interactive designs without coding, but learning JavaScript and React can help with advanced customizations.",
    },
    {
      question: "Will I receive a certificate upon course completion?",
      answer: "Yes, you will receive a certificate after successfully completing the course.",
    },
    {
      question: "Can I attend a demo class before enrolling?",
      answer: "Yes, a free demo class is available before enrollment.",
    },
    {
      question: "Does this course provide job placement assistance?",
      answer: "Yes, placement assistance is provided for eligible students.",
    },
    {
      question: "Can I enroll in this course after 12th grade?",
      answer: "Yes, students who have completed 12th grade can join the Framer Development course.",
    },
    {
      question: "What are the benefits of learning Framer?",
      answer: "Framer is a powerful design tool that enables you to create high-fidelity prototypes and interactive websites with ease.",
    },
  ];

  return (
    <div className="bg-gray py-10 px-6">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold">FAQs About Online Framer Development Course</h2>
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

export default FAQSectionFramer;
