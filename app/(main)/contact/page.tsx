import ContactBox from '@/components/custom/contact/contact-box';
import SectionDescription from '@/components/custom/section-description';
import SectionTitle from '@/components/custom/section-title';
import BannerLayout from '@/components/layout/banner-layout';
import { CalendarClockIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import React from 'react';
import ContactFormSection from '../_components/contact/contact-form-section';

function ContactPage() {
  return (
    <BannerLayout
      title="Contact"
      bannerImageUrl="/images/banner/banner-1.jpg"
      bannerImageAlt="Contact Banner"
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Contact', href: '/contact', isCurrentPage: true },
      ]}
    >
      <div className="app-container py-10">
        <SectionTitle>Get In Touch With Us</SectionTitle>
        <SectionDescription className="mt-2">
          For More Information About Our Product & Services. Please Feel Free To Drop Us An Email.
          Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </SectionDescription>
        <div className="grid grid-cols-5 mt-5">
          <div className="col-span-2 flex flex-col gap-5">
            <ContactBox icon={<MapPinIcon />} title="Address">
              123 Vo Nguyen Giap, Ho Chi Minh City, Vietnam
            </ContactBox>
            <ContactBox icon={<PhoneIcon />} title="Contact">
              <p>Phone: +84 123 456 789</p>
              <p>Email: 4o9tS@example.com</p>
            </ContactBox>
            <ContactBox icon={<CalendarClockIcon />} title="Working time">
              <p>Monday - Friday: 8:00 - 17:00</p>
              <p>Saturday: 8:00 - 14:00</p>
              <p>Sunday: Closed</p>
            </ContactBox>
          </div>
          <ContactFormSection />
        </div>
      </div>
    </BannerLayout>
  );
}

export default ContactPage;
