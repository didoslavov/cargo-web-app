import React, { ReactNode } from 'react';

function NavItem({ children }: { children: ReactNode }) {
    return (
        <li>
            <a href="#" className="text-dark-blue-900">
                {children}
            </a>
        </li>
    );
}

export default NavItem;
