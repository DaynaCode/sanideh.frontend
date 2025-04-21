"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`min-w-fit font-Pinar font-semibold text-18 ${
        isActive
          ? "text-BW-14 sm:text-Secondary"
          : "hidden sm:inline-block text-BW-14"
      }`}
    >
      {children}
    </Link>
  );
}

export default NavLink;
