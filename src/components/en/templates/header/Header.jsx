import { CaretDown, List, Phone } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import NavLink from "../../modules/header/navLink/NavLink";

function Header() {
  return (
    <div className="w-full h-16 sm:h-20 bg-primary px-4 flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-fit flex items-center gap-x-5">
          <List size={32} color="#f0f0f0" className="sm:hidden" />
          <div className="w-fit flex items-center gap-x-6">
            <NavLink href={"/en/home"}>صفحه اصلی</NavLink>
            <NavLink href={"/en/products"}>محصولات</NavLink>
            <NavLink href={"/en/blogs"}>مقالات</NavLink>
            <NavLink href={"/en/contact-us"}>تماس با ما </NavLink>
            <NavLink href={"/en/home/#about-us"}>درباره ما</NavLink>
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

              <div className="absolute top-full left-1/2 translate-y-2 -translate-x-1/2 rounded-sm overflow-hidden">
                <div className="w-34.5 h-11 bg-BW-white hover:bg-BW-14 border border-BW-13 flex justify-between items-center gap-x-5 px-5 cursor-pointer">
                  <p className="font-Pinar text-16 text-BW-2">فارسی</p>
                  <img
                    className="rounded-full overflow-hidden"
                    src="/images/header/language/ir.svg"
                    alt="ir"
                  />
                </div>
                <div className="w-34.5 h-11 bg-BW-white hover:bg-BW-14 border border-BW-13 flex justify-between items-center gap-x-5 -mt-0.25 px-5 cursor-pointer">
                  <p className="font-Pinar text-16 text-BW-2">English</p>
                  <img
                    className="rounded-full overflow-hidden"
                    src="/images/header/language/us.svg"
                    alt="us"
                  />
                </div>
              </div>
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
