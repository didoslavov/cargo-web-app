import React from 'react';
import Nav from './Nav';
import Actions from './Actions';

function Header() {
    return (
        <header className="flex items-center justify-between w-[80%] text-dark-blue mt-8 m-auto py-4">
            <div className="text-[29.65px] leading-[140%] -tracking-[0.62px] font-bold font-grotesk">Website</div>
            <Nav />
            <Actions />
        </header>
    );
}

export default Header;
