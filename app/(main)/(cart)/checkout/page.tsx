'use client';
import SectionTitle from '@/components/custom/section-title';
import BannerLayout from '@/components/layout/banner-layout';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {};

function CheckoutPage({}: Props) {
  const router = useRouter();
  const handleOrder = () => {
    router.push('/cart/completed-order');
  };
  return (
    <BannerLayout
      title="Checkout"
      bannerImageUrl="/images/banner/banner-1.jpg"
      bannerImageAlt="Checkout Banner"
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Checkout', isCurrentPage: true },
      ]}
    >
      <form className="app-container py-10">
        <SectionTitle className="text-left">Billing details</SectionTitle>
        <div className="grid grid-cols-10 gap-4 mt-10">
          <div className="col-span-6">
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel>First Name</FieldLabel>
                  <Input placeholder="" />
                </Field>
                <Field>
                  <FieldLabel>Last Name</FieldLabel>
                  <Input placeholder="" />
                </Field>
              </div>

              <Field>
                <FieldLabel>Email</FieldLabel>
                <Input placeholder="" />
              </Field>
              <Field>
                <FieldLabel>Phone</FieldLabel>
                <Input placeholder="" />
              </Field>
              {/* address */}
              <div className="grid grid-cols-3 gap-4">
                <Field>
                  <FieldLabel>Country</FieldLabel>
                  <Input placeholder="" />
                </Field>
                <Field>
                  <FieldLabel>City</FieldLabel>
                  <Input placeholder="" />
                </Field>
                <Field>
                  <FieldLabel>Address</FieldLabel>
                  <Input placeholder="" />
                </Field>
              </div>
              <Field>
                <FieldLabel>Note</FieldLabel>
                <Textarea placeholder="" rows={4} />
              </Field>

              <Field>
                <FieldLabel>Payment</FieldLabel>
                <RadioGroup defaultValue="comfortable">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="direct" id="direct" />
                    <Label htmlFor="direct" className="text-base">
                      Direct Bank Transfer
                    </Label>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Make your payment directly into our bank account. Please use your Order ID as
                    the payment reference. Your order will not be shipped until the funds have
                    cleared in our account.{' '}
                  </p>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="cod" id="cod" />
                    <Label htmlFor="direct" className="text-base">
                      Cash on Delivery (COD)
                    </Label>
                  </div>
                </RadioGroup>
              </Field>
            </div>
          </div>
          <div className="col-span-4">
            <div className="p-6 bg-primary/10 sticky top-20">
              <div className="flex justify-between text-2xl font-bold mb-5">
                <span>Product</span>
                <span>Subtotal</span>
              </div>

              <div className="flex justify-between mb-2">
                <span className="">Product Name x 1</span>
                <span>${0}</span>
              </div>

              <div className="flex justify-between mb-2">
                <span className="">Shipping Fee</span>
                <span>${0}</span>
              </div>

              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>${0}</span>
              </div>
              <Separator className="my-5" />
              <p className="text-sm">
                Your personal data will be used to process your order, support your experience
                throughout this website, and for other purposes described in our{' '}
                <Link href={'#'} className="text-primary">
                  privacy policy.
                </Link>
              </p>
              <FieldGroup className="mt-4">
                <Field orientation={'horizontal'}>
                  <Checkbox id="term" />
                  <FieldLabel htmlFor="term">
                    I have read and agree to the website&rsquo;s{' '}
                    <Link href={'#'} className="text-primary">
                      Terms and Conditions.
                    </Link>
                  </FieldLabel>
                </Field>
              </FieldGroup>
              <Button
                className="w-full mt-6 cursor-pointer font-bold"
                size="lg"
                onClick={handleOrder}
              >
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </form>
    </BannerLayout>
  );
}

export default CheckoutPage;
