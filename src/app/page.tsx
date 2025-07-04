import Featured2 from "@/components/Featured2";
import FeaturedSection from "@/components/FeaturedSection";
import FeedbackPopup from "@/components/feedbackPopup";
import Footer from "@/components/Footer";

import HeroSection from "@/components/HeroSection";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedSection />
      <Featured2 /> 
      <Footer/>
      
    </div>
    
  )
}
