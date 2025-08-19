import Header from "@/components/templates/header/Header";
import HeroSection from "@/components/templates/heroSection/HeroSection";
import { language } from "@/utils/dataContainer/language/language";
import React from "react";
function page() {
  return (
    <>
      <Header lang={language.fa} />
      <HeroSection lang={language.fa} />
    </>
  );
}

export default page;
