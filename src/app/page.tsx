import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Approach from "@/components/sections/Approach";
import CTA from "@/components/sections/CTA";
import Hero from "@/components/sections/Hero";
import Impact from "@/components/sections/Impact";
import Products from "@/components/sections/Products";
import Vision from "@/components/sections/Vision";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {/* Temporary sections */}
        <Vision />

        <Products />
        <Approach />
        <Impact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
