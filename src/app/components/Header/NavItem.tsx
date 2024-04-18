import React, { ReactNode } from 'react';

function NavItem({ children }: { children: ReactNode }) {
    return (
        <li>
            <a href="#" className="text-dark-blue-900 hover:text-dark-blue-400 hover:underline transition-all">
                {children}
            </a>
        </li>
    );
}

export default NavItem;
