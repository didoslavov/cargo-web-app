"use client";

import { useState } from "react";
import Nav from "./Nav";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobile = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex w-[90%] items-center justify-between py-4 text-dark-blue lg:mt-8 xl:w-[85%]">
      <div className="font-grotesk text-[29.65px] font-bold leading-[140%] -tracking-[0.62px]">
        Website
      </div>
      <Nav isMobileMenuOpen={isMobileMenuOpen} toggleMobile={toggleMobile} />
      <RxHamburgerMenu
        onClick={toggleMobile}
        className="cursor-pointer text-4xl lg:hidden"
      />
    </header>
  );
}

export default Header;
