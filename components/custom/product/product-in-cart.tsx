'use client';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TableCell, TableRow } from '@/components/ui/table';
import { TrashIcon } from 'lucide-react';
import React, { useState } from 'react';

type Props = {
  name: string;
  alt: string;
  src: string;
  price: number;
  oldPrice?: number;
  quantity: number;
  subtotal: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onDelete?: () => void;
  inputProps?: React.HTMLAttributes<HTMLInputElement>;
};

const ProductInCart = ({ name, alt, src, price, quantity, inputProps, onDelete }: Props) => {
  const [amount, setAmount] = useState(quantity);

  const onAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setAmount(value);
  };

  const onDeleteClick = () => {
    // Handle delete action
    onDelete?.();
  };

  const subtotal = (price * amount).toFixed(2);

  return (
    <TableRow>
      <TableCell className="flex items-center gap-4">
        <Avatar className="size-24 rounded-none">
          <AvatarImage src={src} alt={alt} />
        </Avatar>
        <h5 className="w-56 text-sm line-clamp-2 text-wrap">{name}</h5>
      </TableCell>
      <TableCell>${price}</TableCell>
      <TableCell>
        <Input
          type="number"
          defaultValue={1}
          min={1}
          className="w-16"
          value={amount}
          onChange={onAmountChange}
          {...inputProps}
        />
      </TableCell>
      <TableCell>${subtotal}</TableCell>
      <TableCell>
        <Button
          variant="link"
          size="icon"
          className="text-red-500 cursor-pointer"
          onClick={onDeleteClick}
        >
          <TrashIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ProductInCart;
