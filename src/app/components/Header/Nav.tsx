import { IoMdClose } from 'react-icons/io';
import React, { useState } from 'react';
import NavItem from './NavItem';
import Actions from './Actions';

function Nav({ isMobileMenuOpen, toggleMobile }: { isMobileMenuOpen: boolean; toggleMobile: () => void }) {
    const navItems = ['Начало', 'За нас', 'Услуги', 'Цени', 'Как работи', 'Контакти'];

    return (
        <>
            {!isMobileMenuOpen ? (
                <nav className="flex gap-14 xl:gap-44">
                    <ul className="hidden lg:flex items-center lg:gap-[40px] font-medium text-dark-blue-800 text-[16px] tracking-[0px] leading-[170%]">
                        {navItems.map((item, i) => (
                            <NavItem key={i}>{item}</NavItem>
                        ))}
                    </ul>
                    <Actions className="hidden lg:flex lg:gap-9 lg:items-center" />
                </nav>
            ) : (
                <div className="flex flex-col gap-16 lg:hidden justify-center items-center w-screen h-screen bg-main-white  fixed top-0 right-0 z-50">
                    <IoMdClose className="text-4xl absolute top-14 right-8 cursor-pointer" onClick={toggleMobile} />
                    <ul className="flex flex-col gap-6 font-bold">
                        {navItems.map((item, i) => (
                            <NavItem key={i}>{item}</NavItem>
                        ))}
                    </ul>
                    <Actions className="flex flex-col w-[30%] items-center gap-3" />
                </div>
            )}
        </>
    );
}

export default Nav;
