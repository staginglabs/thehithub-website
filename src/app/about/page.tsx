import { Metadata } from "next";
import AboutSection from "./components/AboutSection";

export const metadata: Metadata = {
  title: "About The Hit Hub | Sports Turf in Shajapur Near Indore",
  description: "The Hit Hub is a leading sports turf based in Shajapur, welcoming players from Indore & nearby areas. Learn about our vision & facilities.",
};


export default function About() {
  return (
    <div className="">
      
        <AboutSection />
    </div>
  );
}