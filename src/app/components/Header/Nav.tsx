import React from 'react';

function Nav() {
    return (
        <nav>
            <ul className="flex items-center gap-[40px] font-medium text-dark-blue-800 text-[16px] tracking-[0px] leading-[170%]">
                <li>
                    <a href="#" className="text-dark-blue-900">
                        Начало
                    </a>
                </li>
                <li>
                    <a href="#">За нас</a>
                </li>
                <li>
                    <a href="#">Услуги</a>
                </li>
                <li>
                    <a href="#">Цени</a>
                </li>
                <li>
                    <a href="#">Как работи</a>
                </li>
                <li>
                    <a href="#">Контакти</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
