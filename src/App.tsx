
import CTA from "./components/CTA";
import Differentials from "./components/Differentials";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Method from "./components/Method";
import Navbar from "./components/Navbar";

import Proof from "./components/Proof";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <div className="bg-background text-on-background font-body">
      <Navbar />
      <Hero />
      <Proof />
      <Method />
      <Services />
      <Differentials />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}