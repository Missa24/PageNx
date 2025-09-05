import OurService from "@/components/Contact/OurService";
import OurClients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Metadata } from "next";
import AboutSection from "@/components/About";
import ContactSection from "@/components/Contact/ContactSection";
import WebsiteViewer  from "@/components/webSites/webSites";


 


export const metadata: Metadata = {
  title: "Noxun S.R.L.",
  description: "",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <OurClients />
      <Features />
      <AboutSection />
      <OurService />
      <WebsiteViewer />
      <ContactSection />
    </>
  );
}
