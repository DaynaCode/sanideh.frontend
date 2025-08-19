import FaqSection from "@/components/templates/faqSection/FaqSection";
import Header from "@/components/templates/header/Header";
import HeroSection from "@/components/templates/heroSection/HeroSection";
import { language } from "@/utils/dataContainer/language/language";
import React from "react";
function page() {
  return (
    <>
      <Header lang={language.en} />
      <HeroSection lang={language.en} />
      <FaqSection lang={language.en}/>
    </>
  );
}

export default page;
