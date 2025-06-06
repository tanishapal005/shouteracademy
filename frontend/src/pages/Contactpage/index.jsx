import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/index";
import Breadcrumb from "../../components/Breadcrumb/contact";
import Contactdetail from "../../components/Contactdetail/index"
import ContactMap from "../../components/Contactmap/index";
import Footer from "../../components/Footer";

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <Breadcrumb />
      <Contactdetail />
      <ContactMap />
      <Footer />
    </div>
  );
}
