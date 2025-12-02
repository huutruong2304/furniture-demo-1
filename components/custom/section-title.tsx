import React from 'react';

type Props = {
  children?: React.ReactNode;
};

const SectionTitle = ({ children }: Props) => {
  return <h2 className="text-4xl font-bold text-center">{children}</h2>;
};

export default SectionTitle;
