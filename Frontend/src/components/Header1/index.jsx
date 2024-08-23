import React from "react";
import { Button, Heading } from "..";

export default function Header1({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex justify-between items-center px-4 py-[18px] bg-indigo-a400`}
    >
      {/* Left side: Logo */}
      <div className="flex items-center">
        <img
          src="/images/Logo.jpg" 
          alt="Logo"
          className="w-14 h-15 rounded-full"
        />
      </div>

      {/* Right side: Navigation links */}
      <div className="flex items-center">
        <ul className="flex flex-wrap gap-8">
          <li>
            <a href="#">
              <Heading
                size="heading4xl"
                as="h5"
                className="!text-white underline"
              >
                Home
              </Heading>
            </a>
          </li>

          <li>
            <a href="#" className="cursor-pointer">
              <Heading
                size="heading4xl"
                as="h5"
                className="!text-white hover:underline"
              >
                Teacher
              </Heading>
            </a>
          </li>

          <li>
            <a href="#" className="cursor-pointer">
              <Heading
                size="heading4xl"
                as="h5"
                className="!text-white hover:underline"
              >
                Time Table
              </Heading>
            </a>
          </li>

          <li>
            <a href="#" className="cursor-pointer">
              <Heading
                size="heading4xl"
                as="h5"
                className="!text-white underline"
              >
                Blog
              </Heading>
            </a>
          </li>

          <li>
            <a href="#" className="cursor-pointer">
              <Heading
                size="heading4xl"
                as="h5"
                className="!text-white underline"
              >
                Library
              </Heading>
            </a>
          </li>

          <li>
            <a href="#" className="cursor-pointer">
              <Heading
                size="heading4xl"
                as="h5"
                className="!text-white underline"
              >
                Mini Videos
              </Heading>
            </a>
          </li>

          <li>
            <a href="#" className="cursor-pointer">
              <Heading
                size="heading4xl"
                as="h5"
                className="!text-white underline"
              >
                Contact Us
              </Heading>
            </a>
          </li>
        </ul>

        <Button shape="round" className="ml-5 min-w-[96px] font-bold md:ml-0">
          Sign In
        </Button>
      </div>
    </header>
  );
}
