import React from 'react';

type Props = {
  icon: React.ReactNode;
  title: string;
  children?: React.ReactNode;
};

function ContactBox({ icon, title, children }: Props) {
  return (
    <div className="w-full flex">
      <div className="w-12 aspect-square flex justify-center pt-1">{icon}</div>
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        {children}
      </div>
    </div>
  );
}

export default ContactBox;
