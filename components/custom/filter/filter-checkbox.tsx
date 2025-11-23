import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import React from 'react';

type Props = {
  type: string;
  value: string;
  title: string;
  count?: number;
  checked?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (type: string, value: string, checked: boolean) => void;
};

const FilterCheckbox = ({ type, value, title, count, checked, onChange }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <Checkbox
        id={value}
        className="border-gray-500 size-5 cursor-pointer"
        checked={checked}
        onCheckedChange={(newChecked: boolean) => onChange && onChange(type, value, newChecked)}
      />
      <Label
        htmlFor={value}
        className={`text-sm cursor-pointer text-gray-700 ${
          checked ? 'font-semibold' : 'font-normal'
        }`}
      >
        {title}
        {!!count && ` (${count})`}
      </Label>
    </div>
  );
};

export default FilterCheckbox;
