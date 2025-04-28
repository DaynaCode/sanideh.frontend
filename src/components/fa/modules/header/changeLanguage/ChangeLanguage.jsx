"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { lang } from "@/utils/dataContainer";
import { usePathname, useRouter } from "next/navigation";
function ChangeLanguage() {
  const router = useRouter();
  const currentPath = usePathname();
  const purePath = currentPath.slice(3);
  const faPath = `/${lang.fa}${purePath}`;
  const enPath = `/${lang.en}${purePath}`;

  const selectFaLanguage = () => {
    console.log("🚀 ~ FA ChangeLanguage ~ currentPath:", currentPath);
    if (currentPath === enPath) {
      router.push(faPath);
    }
  };
  const selectEnLanguage = () => {
    console.log("🚀 ~ EN ChangeLanguage ~ currentPath:", currentPath);
    if (currentPath === faPath) {
      router.push(enPath);
    }
  };

  return (
    <>
      <div className="absolute top-full left-1/2 translate-y-2 -translate-x-1/2 rounded-sm overflow-hidden">
        <button
          onClick={selectFaLanguage}
          className="w-34.5 h-11 bg-BW-white hover:bg-BW-14 border border-BW-13 flex justify-between items-center gap-x-5 px-5 cursor-pointer"
        >
          <p className="font-Pinar text-16 text-BW-2">فارسی</p>
          <img
            className="rounded-full overflow-hidden"
            src="/images/header/language/ir.svg"
            alt="ir"
          />
        </button>
        <button
          onClick={selectEnLanguage}
          className="w-34.5 h-11 bg-BW-white hover:bg-BW-14 border border-BW-13 flex justify-between items-center gap-x-5 -mt-0.25 px-5 cursor-pointer"
        >
          <p className="font-Pinar text-16 text-BW-2">English</p>
          <img
            className="rounded-full overflow-hidden"
            src="/images/header/language/us.svg"
            alt="us"
          />
        </button>
      </div>
    </>
  );
}

export default ChangeLanguage;
