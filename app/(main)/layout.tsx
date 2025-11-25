import ScrollTopBtn from '@/components/custom/scroll-top-btn';
import AppFooter from '@/components/layout/app-footer';
import AppHeader from '@/components/layout/app-header';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <AppHeader />
      {children}
      <ScrollTopBtn />
      <AppFooter />
    </div>
  );
};

export default MainLayout;
