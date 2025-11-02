import React from 'react';
import { HeartIcon, SearchIcon, ShoppingCartIcon, UserIcon } from 'lucide-react';
import Link from 'next/link';

const AppHeader = () => {
  const headerLinks: { label: string; href: string }[] = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-background sticky top-0 z-50 shadow-xs">
      <div className="app-container flex items-center justify-between h-16">
        <div className="uppercase text-foreground font-extrabold text-2xl">T-Furniture</div>
        <ul className="flex items-center gap-10 font-semibold">
          {headerLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-primary text-transition">
                {link.label}
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
