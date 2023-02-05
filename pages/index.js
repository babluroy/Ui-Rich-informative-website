import Hero from "@/Components/Hero";
import Innovate from "@/Components/Innovate";
import LoopSlider from "@/Components/LoopSlider";
import OurTeam from "@/Components/OurTeam";
import Our_Clients from "@/Components/Our_Clients";
import Our_Service from "@/Components/Our_Service";
import Quote from "@/Components/Quote";
import Testimonials from "@/Components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <LoopSlider />
      <Innovate />
      <OurTeam />
      <Our_Service />
      <Our_Clients />
      <Testimonials />
      <Quote />
    </>
  );
}
