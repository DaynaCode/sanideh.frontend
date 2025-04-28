"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { lang } from "@/utils/dataContainer";
import { selectEnLang, selectFaLang } from "@/app/redux/slices/showLangMenu";
import { useRouter } from "next/navigation";

function SetLanguage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const faPath = `/${lang.fa}`;
  const enPath = `/${lang.en}`;

  useEffect(() => {
    const language = localStorage.getItem("lang");

    if (language) {
      if (language === lang.fa) {
        dispatch(selectFaLang());
        router.push(faPath);
      } else if (language === lang.en) {
        dispatch(selectEnLang());
        router.push(enPath);
      } else {
        localStorage.setItem("lang", lang.fa);
        dispatch(selectFaLang());
        router.push(faPath);
      }
    } else {
      localStorage.setItem("lang", lang.fa);
      dispatch(selectFaLang());
      router.push(faPath);
    }
  }, [dispatch, faPath, enPath, router]);

  return null;
}

export default SetLanguage;
