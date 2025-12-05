import SectionTitle from '@/components/custom/section-title';
import BannerLayout from '@/components/layout/banner-layout';
import { Button } from '@/components/ui/button';
import { CircleCheckIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function CompletedCheckOut() {
  const orderData: OrderBilling = {
    id: '123456',
    date: '2023-09-01',
    total: '$100.00',
    paymentMethod: 'Credit Card',
    products: [
      { id: '1', name: 'Product 1', quantity: 2, price: 50, subtotal: 100 },
      { id: '2', name: 'Product 2', quantity: 1, price: 30, subtotal: 30 },
    ],
    shippingInfo: {
      id: '1',
      name: 'John Doe',
      email: 'V7HtH@example.com',
      address: '123 Main St, Anytown, USA',
      phone: '(123) 456-7890',
    },
  };

  return (
    <BannerLayout
      title={`Order Completed`}
      bannerImageUrl="/images/banner/banner-1.jpg"
      bannerImageAlt="Banner Image"
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Cart', href: '/cart' },
        { label: 'Order', isCurrentPage: true },
      ]}
    >
      <main className="py-12 px-4">
        <div id="completed-page" className="bg-primary/10 p-10 text-center max-w-4xl mx-auto">
          {/* Icon Success */}
          <CircleCheckIcon className="w-16 h-16 text-primary mx-auto mb-4" />

          <SectionTitle className="text-primary">ORDER SUCCESSFUL</SectionTitle>
          <p className="text-gray-600 mt-2 mb-8">
            Thank you for shopping with T-FURNITURE. Your order has been successfully received.
          </p>

          {/* Key Summary */}
          <div className={`bg-primary/10 p-6 inline-block max-w-full`}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4 text-left">
              <div className="font-semibold text-gray-700">Order Number:</div>
              <div className="sm:col-span-2 text-gray-900 font-medium break-all">
                {orderData.id}
              </div>

              <div className="font-semibold text-gray-700">Order Date:</div>
              <div className="sm:col-span-2 text-gray-900 font-medium">{orderData.date}</div>

              <div className="font-semibold text-gray-700">Total:</div>
              <div className={`sm:col-span-2  font-medium text-primary text-xl`}>
                {orderData.total}
              </div>

              <div className="font-semibold text-gray-700">Payment Method:</div>
              <div className="sm:col-span-2 text-gray-900 font-medium">
                {orderData.paymentMethod}
              </div>
            </div>
          </div>

          {/* Order Details */}
          <div className="mt-10 text-left max-w-lg mx-auto">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Order Details</h3>
            <div className="space-y-3">
              {orderData.products.map((product) => (
                <div key={product.id} className="flex justify-between text-gray-700">
                  <span>{product.name}</span>
                  <span>{product.subtotal}</span>
                </div>
              ))}
              <div
                className={`flex justify-between font-bold text-primary pt-2 border-t border-dashed`}
              >
                <span>Total</span>
                <span>{orderData.total}</span>
              </div>
            </div>
          </div>

          {/* Shipping Information */}
          <div className="mt-8 text-left max-w-lg mx-auto">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Shipping Information</h3>

            <p className="text-gray-700">
              <span className="font-semibold">Recipient:</span> {orderData.shippingInfo.name}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Email:</span> {orderData.shippingInfo.email}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Phone:</span> {orderData.shippingInfo.phone}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Address:</span> {orderData.shippingInfo.address}
            </p>
          </div>

          <p className="mt-10 text-gray-600">
            A confirmation email has been sent to **{orderData.shippingInfo.email}**.
          </p>

          {/* Return to Homepage Button */}
          <Link href={'/'}>
            <Button className="w-max mt-4 cursor-pointer font-bold" size="lg">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </main>
    </BannerLayout>
  );
}

export default CompletedCheckOut;
