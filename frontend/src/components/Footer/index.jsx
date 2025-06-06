import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import companylogo from "../../assets/images/Footer/companylogo.webp";
import Footerbottompart from "../../components/Footerbottompart/index";
import { Toaster, toast } from "react-hot-toast";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/newsletter/subscribe", {
        email,
      });

      console.log("Response:", response);

      if (response.data?.success) {
        toast.success(response.data.message || "🎉 Subscription successful! Welcome to the Shouters Academy community — exciting updates are coming your way!");
        setEmail("");
      } else {
        toast.error(response.data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <footer className="bg-black text-white pt-12">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & Info */}
        <div>
          <img src={companylogo} alt="Shouters Academy Logo" className="w-36" />
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            Transform your digital presence with us, a leading force in education and training. Join us to unlock your potential and achieve excellence.
          </p>
          <div className="flex gap-3 mt-6">
            {[FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaFacebook].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="text-white hover:text-red-500 border border-gray-600 p-2 rounded-full transition"
              >
                <Icon />
              </a>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-400">
            <Link to="/termsandconditionpage" className="hover:text-white transition">T&C</Link>
            <Link to="/privacypolicy" className="hover:text-white transition">Privacy</Link>
            <Link to="/contactpage" className="hover:text-white transition">Support</Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            {[
              { name: "Digital Marketing", path: "/digitalmpage" },
              { name: "Web Development", path: "/webdevpage" },
              { name: "CMS Based", path: "/cmsbasedpage" },
              { name: "Design", path: "/designingpage" },
              { name: "App Development", path: "/appdevpage" },
              { name: "Data Science", path: "/datasciencepage" },
              { name: "Cloud Computing", path: "/cloudpage" },
              { name: "Cyber Security", path: "/cyberpage" },
              { name: "Event", path: "/eventpage" },
            ].map((item, index) => (
              <li key={index}>
                <Link to={item.path} className="hover:text-white transition">
                  ▸ {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Official Info</h3>
          <ul className="text-gray-400 text-sm space-y-4">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-red-500 mt-1" />
              <span>
                3rd Floor, Keshav Tower, Sitaram Ji Ki Bawri Road, Bhilwara, Rajasthan 311001
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-red-500" />
              <a href="tel:+918094554455" className="hover:text-white transition">
                +91 80945-54455
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-red-500" />
              <a href="mailto:info@7shouters.com" className="hover:text-white transition">
                info@7shouters.com
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Get the latest updates, offers, and news from Shouters Academy delivered to your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="mt-4">
            <div className="flex rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white text-black outline-none text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 px-5 flex items-center justify-center text-white"
              >
                <FaPaperPlane />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4">
        <Footerbottompart />
      </div>
    </footer>
  );
};

export default Footer;
