"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Banner from "@/components/Banner";
import Join from "@/components/Join";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import { useState } from "react";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  }

  const handleClose = () => {
    setShowForm(false)
  }

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Banner />
      <Join openForm={handleClick} />
      <Footer />
      {showForm &&
        <div className="overlay">
          <Form closeForm={handleClose} />
        </div>
      }
    </>
  )
}
