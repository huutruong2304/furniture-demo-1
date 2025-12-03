import BannerLayout from '@/components/layout/banner-layout';
import React from 'react';

function CartPage() {
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
      <div className="app-container">
        <div className="grid grid-cols-10 gap-4">
          <div className="col-span-7">
            <table className="cart-items-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>[Thông tin sản phẩm]</td>
                  <td>Rs. 250,000.00</td>
                  <td>
                    <input type="number" value="1" />
                  </td>
                  <td>Rs. 250,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-span-3">Cart Summary Section</div>
        </div>
      </div>
    </BannerLayout>
  );
}

export default CartPage;
