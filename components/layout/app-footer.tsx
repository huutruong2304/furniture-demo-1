import Link from 'next/link';
import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

type Props = {};

const AppFooter = (props: Props) => {
  const mainLinks: { label: string; href: string }[] = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const helpLinks: { label: string; href: string }[] = [
    { label: 'Shipping & Returns', href: '/shipping-returns' },
    { label: 'Track Your Order', href: '/track-order' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <footer className="border-t-gray-300 border-t-2">
      <div className="app-container grid grid-cols-4 gap-10 py-20">
        <div>
          <h5 className="footer-title">
            <div className="uppercase text-foreground font-extrabold text-2xl">T-Furniture</div>
          </h5>

          <p className="" aria-label="Location">
            {' '}
            123 Vo Nguyen Giap, Ho Chi Minh City, Vietnam{' '}
          </p>
        </div>
        <div className="">
          <h5 className="footer-title">Links</h5>
          <ul className="flex gap-5 flex-col ">
            {mainLinks.map((link) => (
              <li key={link.href}>
                <Link className="hover:text-primary text-transition font-semibold" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h5 className="footer-title">Helps</h5>
          <ul className="flex gap-5 flex-col">
            {helpLinks.map((link) => (
              <li key={link.href}>
                <Link className="hover:text-primary text-transition font-semibold" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="">
          <h5 className="footer-title">Newsletter</h5>
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="bg-background border-border"
              aria-label="Email address"
            />
            <Button className="btn btn-primary">Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="app-container">
        <hr className="border-t-gray-300 border-t" />
        <div className="app-container py-5">
          © {new Date().getFullYear()} Code by Truong Nguyen. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
