import React from 'react';
import Nav from './Nav';
import Actions from './Actions';
import { RxHamburgerMenu } from 'react-icons/rx';

function Header() {
    return (
        <header className="flex items-center justify-between w-[90%] xl:w-[80%] text-dark-blue mt-8 py-4">
            <div className="text-[29.65px] leading-[140%] -tracking-[0.62px] font-bold font-grotesk">Website</div>
            <Nav />
            <RxHamburgerMenu className="text-2xl lg:hidden" />
        </header>
    );
}

export default Header;
