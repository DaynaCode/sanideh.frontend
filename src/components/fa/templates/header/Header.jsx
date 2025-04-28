import { CaretDown, List, Phone } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import NavLink from "../../modules/header/navLink/NavLink";
import ChangeLanguage from "../../modules/header/changeLanguage/ChangeLanguage";

function Header() {
  return (
    <div className="w-full h-16 sm:h-20 bg-primary px-4 flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-fit flex items-center gap-x-5">
          <List size={32} color="#f0f0f0" className="sm:hidden" />
          <div className="w-fit flex items-center gap-x-6">
            <NavLink href={"/fa/home"}>صفحه اصلی</NavLink>
            <NavLink href={"/fa/products"}>محصولات</NavLink>
            <NavLink href={"/fa/blogs"}>مقالات</NavLink>
            <NavLink href={"/fa/contact-us"}>تماس با ما </NavLink>
            <NavLink href={"/fa/home/#about-us"}>درباره ما</NavLink>
          </div>
        </div>
        <img
          className="scale-75 sm:scale-100"
          src="/images/logo/kps-logo.svg"
          alt="logo"
        />
        <div className="hidden sm:flex items-center gap-x-2.5">
          <div className="flex items-center gap-x-10">
            <div className=" flex items-center gap-x-2 relative cursor-pointer">
              <CaretDown size={"1rem"} color="#D0A767" weight="fill" />
              <p className="font-Pinar font-medium text-18 text-BW-14 ">
                فارسی
              </p>
              <img
                src="/images/header/language/language.svg"
                alt="language logo"
              />
              <ChangeLanguage />
            </div>
            <div className="flex items-center gap-x-2">
              <p className="font-Pinar font-semibold text-14 text-BW-14 ">
                021-562568
              </p>
              <Phone size={"1rem"} color="#D0A767" weight="fill" />
            </div>
          </div>
          <div className="w-0.5 h-9 bg-BW-13"></div>
          <div className="w-29 h-9 bg-Secondary hover:bg-Secondary-2 rounded-lg flex justify-center items-center  ">
            <p className="font-Pinar font-semibold text-14 text-BW-3 ">
              درخواست مشاوره
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
