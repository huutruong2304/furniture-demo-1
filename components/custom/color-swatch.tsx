import React from 'react';

type Props = {
  type: string;
  value: string;
  checked?: boolean;
  onChange?: (type: string, value: string, checked: boolean) => void;
};

const ColorSwatch = ({ type, value, checked, onChange }: Props) => {
  const borderClasses = checked ? 'border-primary dark:border-white' : 'border-transparent';

  const handleClick = () => {
    onChange?.(type, value, !checked);
  };

  return (
    <div
      className={`
        w-8 aspect-square rounded-full 
        border-3 cursor-pointer transition-all duration-200 
        ${borderClasses} 
        ${value?.startsWith('bg-') ? value : ''} 
      `}
      style={!value?.startsWith('bg-') ? { backgroundColor: value } : {}}
      onClick={handleClick}
      role="radio"
      aria-checked={checked}
    ></div>
  );
};

export default ColorSwatch;
