import React from 'react';
import NavItem from './NavItem';

function Nav() {
    const navItems = ['Начало', 'За нас', 'Услуги', 'Цени', 'Как работи', 'Контакти'];

    return (
        <nav>
            <ul className="flex items-center gap-[40px] font-medium text-dark-blue-800 text-[16px] tracking-[0px] leading-[170%]">
                {navItems.map((item, i) => (
                    <NavItem key={i}>{item}</NavItem>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;
