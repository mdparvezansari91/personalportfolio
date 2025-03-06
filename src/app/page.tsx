import ContactUs from "@/components/ContactUs/ContactUs";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import Project from "@/components/Project/Projects";
import Skills from "@/components/Skills/Skills";


export default function Home() {
  
  return (
    <>
    <Navbar />
    {/* <BottomNav/> */}
    <HeroSection/>
    <Skills/>
    <Project/>
    <ContactUs/>
    <Footer/>
    </>
  );
}
