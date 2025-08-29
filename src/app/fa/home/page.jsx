import AboutUsSection from "@/components/templates/home/aboutUsSection/AboutUsSection";
import FaqSection from "@/components/templates/home/faqSection/FaqSection";
import Header from "@/components/templates/header/Header";
import HeroSection from "@/components/templates/home/heroSection/HeroSection";
import { language } from "@/utils/dataContainer/language/language";
import React from "react";
import RequestConsultationSection from "@/components/templates/home/requestConsultationSection/RequestConsultationSection";
function page() {
  return (
    <>
      <Header lang={language.fa} />
      <HeroSection lang={language.fa} />
      <AboutUsSection lang={language.fa} />
      <RequestConsultationSection lang={language.fa} />
      <FaqSection lang={language.fa} />
    </>
  );
}

export default page;
