import AboutCoverSection from "@/components/About/AboutCoverSection";
import Skills from "@/components/About/Skills";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { FaPhone } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "About Me",
  description: `Here are some detail about myself`,
  }

const About = () => {
  return (
    <>
      <AboutCoverSection />
      <Skills />
      <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal">
        Have a project in mind? Reach out to me <FaPhone className="inline-block mx-1"/> from{" "}
        <Link href="/contact" className="!underline underline-offset-2">here</Link> and let&apos;s make it happen.
      </h2>
    </>
  );
};

export default About;
