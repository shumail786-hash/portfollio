import React from "react";
import { Work, About, Skills, Footer, Header, Testimonial } from "./containers";
import { Navbar } from "./components";
import "./app.scss";
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}
