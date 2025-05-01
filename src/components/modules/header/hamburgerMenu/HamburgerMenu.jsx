import { List } from "@phosphor-icons/react/dist/ssr";
import React from "react";

function HamburgerMenu({ children }) {
  return (
    <div className="w-fit sm:hidden flex items-center gap-x-5">
      <List size={32} color="#f0f0f0" className="sm:hidden" />
      {children}
    </div>
  );
}

export default HamburgerMenu;
