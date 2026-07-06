import Header from "../components/Header";
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import WhyUs from "../components/WhyUs";
import RecentProjects from "../components/RecentProjects";
import Process from "../components/Process";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export const metadata = {
  title: "EffettoWeb | Web Agency Roma - Siti Web, E-commerce, Marketing",
  description:
    "Web agency a Roma. Realizziamo siti web professionali, e-commerce e strategie di marketing digitale per farti trovare nuovi clienti e far crescere il tuo business.",
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhatWeDo />
      <WhyUs />
      <RecentProjects />
      <Process />
      <FAQ />
      <Footer />
    </>
  );
}
