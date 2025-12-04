'use client';
import ProductInCart from '@/components/custom/product/product-in-cart';
import BannerLayout from '@/components/layout/banner-layout';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React from 'react';
import SummarySection from '../../_components/cart/summary-section';
import { useFieldArray, useForm } from 'react-hook-form';

type CartFormValues = {
  cartItems: CartItem[];
};

function CartPage() {
  const products: {
    name: string;
    alt: string;
    src: string;
    price: number;
    oldPrice?: number;
    quantity: number;
    subtotal: number;
  }[] = [
    {
      name: 'Product Name',
      alt: 'Product Image',
      src: '/images/products/product-1.jpg',
      price: 29.99,
      quantity: 2,
      subtotal: 59.98,
    },
    {
      name: 'Chair Modern Style',
      alt: 'Product Image',
      src: '/images/products/product-2.jpg',
      price: 29.99,
      quantity: 2,
      subtotal: 59.98,
    },
  ];

  const { register, control, handleSubmit } = useForm<CartFormValues>({
    defaultValues: {
      cartItems: products,
    },
    mode: 'onChange',
  });

  const { fields, remove } = useFieldArray({
    control,
    name: 'cartItems',
  });

  return (
    <BannerLayout
      title="Shopping Cart"
      bannerImageUrl="/images/banner/banner-1.jpg"
      bannerImageAlt="Cart Banner"
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Cart', isCurrentPage: true },
      ]}
    >
      <div className="app-container py-10 pb-20">
        <div className="grid grid-cols-10 gap-4">
          <div className="col-span-7">
            <Table>
              <TableHeader className="bg-primary/10">
                <TableRow>
                  <TableHead className="py-5 font-bold w-1/2">Product</TableHead>
                  <TableHead className="font-bold">Price</TableHead>
                  <TableHead className="font-bold">Quantity</TableHead>
                  <TableHead className="font-bold">Subtotal</TableHead>
                  <TableHead className="font-bold">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {fields.map((product, index) => (
                  <ProductInCart
                    key={index}
                    name={product.name}
                    alt={product.alt}
                    src={product.src}
                    price={product.price}
                    quantity={product.quantity}
                    subtotal={product.subtotal}
                    inputProps={{
                      ...register(`cartItems.${index}.quantity`, {
                        required: 'Quantity is required',
                      }),
                    }}
                  />
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="col-span-3">
            <SummarySection subtotal={119.96} tax={9.6} total={129.56} />
          </div>
        </div>
      </div>
    </BannerLayout>
  );
}

export default CartPage;
