import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Import icons

const FAQSectionCloudComputing = () => {
    const [openIndex, setOpenIndex] = useState(null);
  
    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    const faqs = [
      {
        question: "What is Cloud Computing?",
        answer:
          "Cloud computing is the delivery of computing services like storage, databases, networking, and software over the internet (the cloud) to offer faster innovation and flexible resources.",
      },
      {
        question: "What are the different types of cloud computing services?",
        answer: "The main types include Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS).",
      },
      {
        question: "What are the benefits of Cloud Computing?",
        answer: "Cloud computing offers cost savings, scalability, flexibility, enhanced security, and access to powerful computing resources.",
      },
      {
        question: "What are the top cloud service providers?",
        answer: "The leading cloud providers are Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP).",
      },
      {
        question: "Is cloud computing secure?",
        answer: "Yes, cloud providers implement high-level security measures, but users should also follow best security practices such as encryption and access control.",
      },
      {
        question: "What is serverless computing?",
        answer: "Serverless computing allows developers to build and run applications without managing infrastructure. Examples include AWS Lambda and Azure Functions.",
      },
      {
        question: "How does virtualization work in cloud computing?",
        answer: "Virtualization enables multiple virtual machines (VMs) to run on a single physical server, improving resource utilization and efficiency.",
      },
      {
        question: "What is a hybrid cloud?",
        answer: "A hybrid cloud is a combination of private and public clouds, allowing businesses to balance workloads between on-premise and cloud environments.",
      },
      {
        question: "How can I start a career in cloud computing?",
        answer: "You can start by learning cloud fundamentals, earning certifications (AWS, Azure, Google Cloud), and gaining hands-on experience through projects.",
      },
    ];
  
    return (
      <div className="bg-gray py-10 px-6">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold">FAQs About Cloud Computing</h2>
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
  
export default FAQSectionCloudComputing;