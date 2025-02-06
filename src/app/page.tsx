import About from "@/components/About/About";
import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import Project from "@/components/Project/Projects";
import Skills from "@/components/Skills/Skills";


export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Skills/>
    <About/>
    <Project/>
    </>
  );
}
