"use client";
import { siteMetadata } from "@/libs/siteMetadata";
import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaGithub, FaLinkedin, FaReddit, FaTwitter } from "react-icons/fa6";
interface FormValues {
  Email: string;
}

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  // console.log(errors);
  return (
    <footer className="mt-8 rounded-b-2xl bg-slate-700 flex flex-col items-center text-light mb-4 mx-4">
      <h3 className="mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
        Interesting Stories | Updates | Guides
      </h3>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base">
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-fit sm:min-w-[384px] flex items-stretch dark:text-light bg-light dark:bg-dark p-1 sm:p-2 rounded mx-4"
      >
        <input
          type="email"
          placeholder="Enter your email..."
          {...register("Email", { required: true, maxLength: 80 })}
          className="w-full bg-transparent pl-2 sm:pl-0 text-dark dark:text-light focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1"
        />

        <input
          type="submit"
          className="bg-dark text-light dark:text-dark dark:bg-light cursor-pointer font-medium rounded px-3 sm:px-5 py-1"
        />
      </form>
      <div className="w-full  mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-col md:flex-row items-center justify-between">
        <span className="text-center">
          &copy;© 2024 Pakoさん. All rights reserved.
        </span>
        <div className="ml-[-12rem]">
          <a
            href={siteMetadata.linkedin}
            rel="noopener noreferrer"
            className="inline-block w-6 h-6 mr-4"
            aria-label="Reach out to me via LinkedIn"
            target="_blank"
          >
            <FaLinkedin
              size="1.8em"
              className="hover:scale-125 transition-all ease duration-200"
              title="Follow Us on Linkedin"
            />
          </a>
          <a
            href={siteMetadata.reddit}
            rel="noopener noreferrer"
            className="inline-block w-6 h-6 mr-4"
            aria-label="Reach out to me via LinkedIn"
            target="_blank"
          >
            <FaReddit
              size="1.8em"
              className="hover:scale-125 transition-all ease duration-200"
              title="Follow Us on Reddit"
            />
          </a>
          <a
            href={siteMetadata.github}
            rel="noopener noreferrer"
            className="inline-block w-6 h-6 mr-4"
            aria-label="Reach out to me via LinkedIn"
            target="_blank"
          >
            <FaGithub
              size="1.8em"
              className="hover:scale-125 transition-all ease duration-200"
              title="Follow Us on Github"
            />
          </a>
          <a
            href={siteMetadata.twitter}
            rel="noopener noreferrer"
            className="inline-block w-6 h-6 mr-4"
            aria-label="Reach out to me via LinkedIn"
            target="_blank"
          >
            <FaTwitter
              size="1.8em"
              className="hover:scale-125 transition-all ease duration-200"
              title="Follow Us on Twitter/X"
            />
          </a>
        </div>
        <Link
          href="/sitemap.xml"
          className="text-center underline my-4 md:my-0"
        >
          sitemap.xml
        </Link>
      </div>
      <div className="text-center ">
        Made with &hearts; by{" "}
        <a href={siteMetadata.siteUrl} className="underline" target="_blank">
          Pakoサン
        </a>
      </div>
    </footer>
  );
};

export default Footer;
