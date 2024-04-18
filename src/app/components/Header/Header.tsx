'use client';

import React, { useState } from 'react';
import Nav from './Nav';
import { RxHamburgerMenu } from 'react-icons/rx';

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobile = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="flex items-center justify-between w-[90%] xl:w-[80%] text-dark-blue mt-8 py-4">
            <div className="text-[29.65px] leading-[140%] -tracking-[0.62px] font-bold font-grotesk">Website</div>
            <Nav isMobileMenuOpen={isMobileMenuOpen} toggleMobile={toggleMobile} />
            <RxHamburgerMenu onClick={toggleMobile} className="text-4xl lg:hidden cursor-pointer" />
        </header>
    );
}

export default Header;
