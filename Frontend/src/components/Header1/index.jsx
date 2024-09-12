import React from "react";
import { Button, Heading1 } from "..";
import { useNavigate} from 'react-router-dom'; 

export default function Header1({ ...props }) {
  const navigate = useNavigate();

  const handleLogin = () => {
      navigate('/StudentLoginPage'); 
  };

  return (
    <header
      {...props}
      className={`${props.className} flex justify-between items-center px-4 py-[18px] bg-blue-200`}
    >
      {/* Left side: Logo */}
      <div className="flex items-center">
        <img
          src="/images/0.jpg"
          alt="Logo"
          className="w-36 h-28 rounded"  // Increased width and height
        />
      </div>

      {/* Right side: Navigation links */}
      <div className="flex items-center">
        <ul className="flex flex-wrap gap-8">
          <li>
            <a href="#">
              <Heading1 size="xl" as="h5">
                Home
              </Heading1>
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer">
              <Heading1 size="xl" as="h5">
                Teacher
              </Heading1>
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer">
              <Heading1 size="xl" as="h5">
                Time Table
              </Heading1>
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer">
              <Heading1 size="xl" as="h5">
                Blog
              </Heading1>
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer">
              <Heading1 size="xl" as="h5">
                Library
              </Heading1>
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer">
              <Heading1 size="xl" as="h5">
                Mini Videos
              </Heading1>
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer">
              <Heading1 size="xl" as="h5">
                Contact Us
              </Heading1>
            </a>
          </li>
        </ul>
        <Button shape="round" className="ml-5 min-w-[96px] font-bold md:ml-0" onClick={handleLogin}>
          Sign In
        </Button>
      </div>
    </header>
  );
}
