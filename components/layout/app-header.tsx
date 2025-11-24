'use client';
import React, { useEffect, useState } from 'react';
import { HeartIcon, SearchIcon, ShoppingCartIcon, UserIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const HEADER_LINKS: { title: string; href: string }[] = [
  { title: 'Home', href: '/' },
  { title: 'Shop', href: '/shop' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
];

const AppHeader = () => {
  const pathname = usePathname();
  const [activeHeader, setActiveHeader] = useState<string>('/');

  useEffect(() => {
    setActiveHeader(pathname === '/' ? '/' : pathname.split('/')[1]);
  }, [pathname]);

  return (
    <header className="bg-background sticky top-0 z-50 shadow-xs">
      <div className="app-container flex items-center justify-between h-16">
        <div className="uppercase text-foreground font-extrabold text-2xl">T-Furniture</div>
        <ul className="flex items-center gap-10 font-semibold">
          {HEADER_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${
                  link.href === activeHeader ? 'text-primary' : ''
                } hover:text-primary text-transition`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-10">
          <button aria-label="Account Information">
            <UserIcon className="header-icon" />
          </button>
          <button aria-label="Search product">
            <SearchIcon className="header-icon" />
          </button>
          <button aria-label="Like product">
            <HeartIcon className="header-icon" />
          </button>
          <button aria-label="Shopping cart">
            <ShoppingCartIcon className="header-icon" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
