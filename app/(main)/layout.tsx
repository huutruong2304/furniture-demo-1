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
      <AppFooter />
    </div>
  );
};

export default MainLayout;
