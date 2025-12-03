import { Button } from '@/components/ui/button';
import React from 'react';

type Props = {
  subtotal?: number;
  tax?: number;
  total?: number;
  onCheckout?: () => void;
};

const SummarySection = ({ subtotal, tax, total, onCheckout }: Props) => {
  return (
    <div className="p-6 bg-primary/20 sticky top-20">
      <h4 className="text-lg font-semibold mb-4">Cart Summary</h4>
      <div className="flex justify-between mb-2">
        <span>Subtotal:</span>
        <span>${subtotal}</span>
      </div>
      {/* tax */}
      <div className="flex justify-between mb-2">
        <span>Tax:</span>
        <span>${tax}</span>
      </div>

      <div className="flex justify-between font-bold text-lg">
        <span>Total:</span>
        <span>${total}</span>
      </div>
      <Button className="w-full mt-4" size="lg" onClick={onCheckout}>
        Proceed to Checkout
      </Button>
    </div>
  );
};

export default SummarySection;
