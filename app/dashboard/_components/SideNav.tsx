'use client';

import { FileClock, Home, Settings, WalletCards } from 'lucide-react'; 
import { usePathname } from 'next/navigation';
import Link from 'next/link'; // Import Link from Next.js
import React, { useEffect } from 'react';

function SideNav() {
    const MenuList = [
        { name: 'Home', icon: Home, path: '/dashboard' },
        { name: 'Setting', icon: Settings, path: '/dashboard/settings' },
    ];

    const path = usePathname();

    useEffect(() => {
        console.log(path);
    }, [path]);

    return (
        <div className='h-screen p-5 shadow-sm border'>
            <div className='flex justify-center'>
                <img src='/logo.svg' alt='logo' width={100} height={100} />
            </div>
            <hr className='my-6 border' />
            <div className='mt-5'>
                {MenuList.map((menu, index) => (
                    <Link key={index} href={menu.path} passHref>
                        <div
                            className={`flex gap-2 mb-2 p-2 cursor-pointer items-center rounded-lg
                                hover:bg-primary hover:text-white
                                ${path === menu.path ? 'bg-primary text-white' : ''}`}
                        >
                            {React.createElement(menu.icon, { className: 'h-6 w-6' })}
                            <h2 className='text-lg'>{menu.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default SideNav;
