'use client';
import { Button } from '@/components/ui/button';
import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';

const contactFormSchema = z.object({
  name: z.string().min(1, 'Name cannot be empty.').max(100, 'Name is too long.'),
  email: z.string().email('Invalid Email address.'),
  subject: z.string().min(5, 'Subject requires at least 5 characters.'),
  message: z.string().min(10, 'Message content requires at least 10 characters.'),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactFormSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (data: ContactFormValues) => {
    try {
      console.log(data);
      toast.success('Message sent successfully.');
      reset();
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong.');
    }
  };

  return (
    <form className="col-span-3 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Field>
        <FieldLabel>Your Name</FieldLabel>
        <Input
          placeholder="Abc"
          {...register('name')}
          className={errors.name ? 'border-destructive' : ''}
        />
        {errors.name && <FieldError>{errors.name.message}</FieldError>}
      </Field>
      <Field>
        <FieldLabel>Your Email</FieldLabel>
        <Input
          type="email"
          placeholder="Abc@example.com"
          {...register('email')}
          className={errors.email ? 'border-destructive' : ''}
        />
        {errors.email && <FieldError>{errors.email.message}</FieldError>}
      </Field>
      <Field>
        <FieldLabel>Subject</FieldLabel>
        <Input
          placeholder="This is a subject"
          {...register('subject')}
          className={errors.subject ? 'border-destructive' : ''}
        />
        {errors.subject && <FieldError>{errors.subject.message}</FieldError>}
      </Field>
      <Field>
        <FieldLabel>Message</FieldLabel>
        <Textarea
          placeholder="Hi! i'd like to ask about"
          {...register('message')}
          className={errors.message ? 'border-destructive' : ''}
        />
        {errors.message && <FieldError>{errors.message.message}</FieldError>}
      </Field>
      <Button className="w-max cursor-pointer">Send Message</Button>
    </form>
  );
};

export default ContactFormSection;
