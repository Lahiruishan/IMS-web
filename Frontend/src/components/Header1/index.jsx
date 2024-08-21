import React from "react";
import { Button, Heading } from "..";

export default function Header1({ ...props }) {
  return (
    
    <header {...props} className={`${props.className} flex justify-between items-center px-4 py-[18px] bg-indigo-a400`}>
      {/* Left side: Logo */}
      <div className="flex items-center">
        <img src="public/images/Logo.png" alt="Logo" className="w-12 h-12 rounded-full" />
      </div>

      {/* Right side: Navigation links */}
      <div className="flex items-center">
        <ul className="flex flex-wrap gap-8">
          <li>
            <a href="#">
              <Heading size="heading4xl" as="h5" className="!text-amber-a400 underline">Home</Heading>
            </a>
          </li>

          <li>
            <a href="#" className="cursor-pointer">
              <Heading size="heading4xl" as="h5" className="!text-amber-a400 hover:underline">Teacher</Heading>
            </a>
          </li>

          <li>
            <a href="#" className="cursor-pointer">
              <Heading size="heading4xl" as="h5" className="!text-amber-a400 hover:underline">Time Table</Heading>
            </a>
          </li>

          <li>
            <a href="#" className="cursor-pointer">
              <Heading size="heading4xl" as="h5" className="!text-amber-a400 underline">Blog</Heading>
            </a>
          </li>

          <li>
            <a href="#" className="cursor-pointer">
              <Heading size="heading4xl" as="h5" className="!text-amber-a400 underline">Library</Heading>
            </a>
          </li>

          <li>
            <a href="#" className="cursor-pointer">
              <Heading size="heading4xl" as="h5" className="!text-amber-a400 underline">Mini Videos</Heading>
            </a>
          </li>

          <li>
            <a href="#" className="cursor-pointer">
              <Heading size="heading4xl" as="h5" className="!text-amber-a400 underline">Contact Us</Heading>
            </a>
          </li>
        </ul>

        <Button shape="round" className="ml-5 min-[96px] font-bold md:ml-0">Sign In</Button>
      </div>
    </header>
  );
}
