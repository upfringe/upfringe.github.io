"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface ContactFormValues {
  name: string;
  email: string;
  phone_no: string;
  project_details: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>();
  const onSubmit: SubmitHandler<ContactFormValues> = (data) =>
    console.log(data);
  // console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in"
    >
      Hello! My name is{" "}
      <input
        type="text"
        placeholder="your name"
        {...register}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />
      and i want to discuss a potential project. You can email me at
      <input
        type="email"
        placeholder="your@email"
        {...register("email", {})}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />
      or reach out to me on
      <input
        type="tel"
        placeholder="your phone no."
        {...register("phone_no", {})}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />
      Here are some detail about my project: <br />
      <textarea
        {...register("project_details", {})}
        placeholder="My Project is about..."
        rows={3}
        className=" w-full outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />
      <input
        type="submit"
        value="send request"
        className="mt-8 font-medium inline-block capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer"
      />
    </form>
  );
};

export default ContactForm;
