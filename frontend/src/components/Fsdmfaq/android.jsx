import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Import icons


const FAQSectionKotlin = () => {
    const [openIndex, setOpenIndex] = useState(null);
  
    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    const faqs = [
      {
        question: "What is the Android Development with Kotlin course?",
        answer:
          "The Android Development with Kotlin course teaches you how to build modern Android applications using Kotlin and Jetpack components.",
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
        question: "Do I need prior coding experience to learn Kotlin?",
        answer: "No, Kotlin is beginner-friendly, but having basic programming knowledge will be beneficial.",
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
        answer: "Yes, students who have completed 12th grade can join the Android Development with Kotlin course.",
      },
      {
        question: "What are the benefits of learning Kotlin?",
        answer: "Kotlin is the official language for Android development and enables developers to build efficient, modern applications.",
      },
    ];
  
    return (
      <div className="bg-gray py-10 px-6">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold">FAQs About Online Android Development with Kotlin Course</h2>
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
  
export default FAQSectionKotlin;
