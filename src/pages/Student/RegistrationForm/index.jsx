import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Text, Button, CheckBox } from "../../../components";
import { useNavigate } from 'react-router-dom';

export default function RegistrationForm() {
  const [address, setAddress] = useState('');
  const [batch, setBatch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/RegistrationFee'); 
  };
  const handleLogin = () => {
    navigate('/LoginPage'); 
};

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleBatchChange = (event) => {
    setBatch(event.target.value);
  };

  return (
    <>
      {/* Helmet is used to manage the document head */}
      <Helmet>
        <title>IMS-web</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      {/* Main container with full width and gradient background */}
      <div className="w-full bg-gradient pb-3 pr-[59px] md:pr-5">
        {/* Flex container for layout, with items centered and some gap between them */}
        <div className="flex items-center gap-[50px] md:flex-col">
          <div className="flex w-[48%] flex-col items-center justify-center bg-indigo-900 pb-[558px] pl-14 pt-[297px] md:w-full md:p-5 md:py-5 md:pl-5">
            <Text size="vl" as="p" className="mb-4 ml-96 md:ml-0 !text-purple-50 !font-aclonica">
              Institute <br/>  Management <br/>  System
            </Text>
          </div>
          {/* Right side of the page with login form */}
          <div className="flex flex-1 flex-col items-center justify-center rounded-[10px] bg-blue_gray-100 px-14 pb-[151px] pt-[68px] shadow-xs md:self-stretch md:p-5">
            <div className="flex w-[88%] flex-col items-start gap-[47px] md:w-full">
              <Text size="10xl" as="p" className="!font-actor underline">
                Fill The Register Form
              </Text>

              <form action="" className="px-10">
                {/* Full name field */}
                <div className="ml-6 flex flex-col items-start self-stretch md:ml-0">
                  <label htmlFor="full-name" className="text-neutral-1900 text-base font-normal">Full Name:</label>
                  <input type="text" id="full-name" placeholder="Enter your Full {Student's}Name" className="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none" />
                </div>
                <div className="mt-4 h-[42px] self-stretch rounded-[15px] bg-blue_gray-100"/>

                {/* School name field */}
                <div className="ml-6 flex flex-col items-start self-stretch md:ml-0">
                  <label htmlFor="school-name" className="text-neutral-1900 text-base font-normal">School Name:</label>
                  <input type="text" id="school-name" placeholder="Enter your School Name" className="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none" />
                </div>
                <div className="mt-4 h-[42px] self-stretch rounded-[15px] bg-blue_gray-100"/>

                {/* Batch name field */}
                <div className="ml-6 flex flex-col items-start self-stretch md:ml-0">
                  <label htmlFor="batch" className="text-neutral-1900 text-base font-normal">Batch(A/L) :</label>
                  <select id="batch" value={batch} onChange={handleBatchChange} className="w-full text-neutral-600 px-4 bg-transparent outline-none">
                    <option value="" disabled>Select your Batch(A/L)</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                  </select>
                </div>
                <div className="mt-4 h-[42px] self-stretch rounded-[15px] bg-blue_gray-100"/>

                {/* Email field */}
                <div className="ml-6 flex flex-col items-start self-stretch md:ml-0">
                  <label htmlFor="email" className="text-neutral-1900 text-base font-normal">Email:</label>
                  <input type="text" id="email" placeholder="Enter your Email Address" className="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none" />
                </div>
                <div className="mt-4 h-[42px] self-stretch rounded-[15px] bg-blue_gray-100"/>
                

                {/* Student's Mobile field */}
                <div className="ml-6 flex flex-col items-start self-stretch md:ml-0">
                  <label htmlFor="Smobile" className="text-neutral-1900 text-base font-normal">Student's Mobile Number:</label>
                  <input type="text" id="email" placeholder="Enter Student's Mobile Number" className="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none" />
                </div>
                <div className="mt-4 h-[42px] self-stretch rounded-[15px] bg-blue_gray-100"/>


                {/* Parent's field */}
                <div className="ml-6 flex flex-col items-start self-stretch md:ml-0">
                  <label htmlFor="Pname" className="text-neutral-1900 text-base font-normal">Parent's Name:</label>
                  <input type="text" id="email" placeholder="Enter your Parent's FullName" className="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none" />
                </div>
                <div className="mt-4 h-[42px] self-stretch rounded-[15px] bg-blue_gray-100"/>
  
   
                {/* Parent's Mobile field */}
                <div className="ml-6 flex flex-col items-start self-stretch md:ml-0">
                  <label htmlFor="Pmobile" className="text-neutral-1900 text-base font-normal">Parent's Mobile Number:</label>
                  <input type="text" id="email" placeholder="Enter your Parent's Mobile Number" className="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none" />
                </div>
                <div className="mt-4 h-[42px] self-stretch rounded-[15px] bg-blue_gray-100"/>

                {/* Districts field */}
                <div className="ml-6 flex flex-col items-start self-stretch md:ml-0">
                  <label htmlFor="address" className="text-neutral-1900 text-base font-normal">District:</label>
                  <select id="address" value={address} onChange={handleAddressChange} className="w-full text-neutral-600 px-4 bg-transparent outline-none">
                    <option value="" disabled>Select your District</option>
                    <option value="Ampara">Ampara</option>
                    <option value="Anuradhapura">Anuradhapura</option>
                    <option value="Badulla">Badulla</option>
                    <option value="Batticaloa">Batticaloa</option>
                    <option value="Colombo">Colombo</option>
                    <option value="Galle">Galle</option>
                    <option value="Gampaha">Gampaha</option>
                    <option value="Hambantota">Hambantota</option>
                    <option value="Jaffna">Jaffna</option>
                    <option value="Kalutara">Kalutara</option>
                    <option value="Kandy">Kandy</option>
                    <option value="Kegalle">Kegalle</option>
                    <option value="Kilinochchi">Kilinochchi</option>
                    <option value="Kurunegala">Kurunegala</option>
                    <option value="Mannar">Mannar</option>
                    <option value="Matale">Matale</option>
                    <option value="Matara">Matara</option>
                    <option value="Monaragala">Monaragala</option>
                    <option value="Mullaitivu">Mullaitivu</option>
                    <option value="Nuwara Eliya">Nuwara Eliya</option>
                    <option value="Polonnaruwa">Polonnaruwa</option>
                    <option value="Puttalam">Puttalam</option>
                    <option value="Ratnapura">Ratnapura</option>
                    <option value="Trincomalee">Trincomalee</option>
                    <option value="Vavuniya">Vavuniya</option>
                  </select>
                </div>
                <div className="mt-4 h-[42px] self-stretch rounded-[15px] bg-blue_gray-100"/>

                {/* Gender */}
                <div className="flex items-center justify-center">
                  <Text size="text3xl" as="p" className="self-center !font-alike !text-black-900_03">
                    Gender:
                  </Text>
                  <div className="flex flex-1 gap-[45px] self-end pl-[90px] pr-14 md:px-5">
                    <CheckBox
                      name="male"
                      label="Male"
                      id="male"
                      className="gap-[18px] font-alike text-[20px] text-black-900_03"
                    />
                    <CheckBox
                      name="female"
                      label="Female"
                      id="female"
                      className="gap-[18px] font-alike text-[20px] text-black-900_03"
                    />
                  </div>
                </div>

                {/* Password field */}
                <div className="mt-7 flex flex-col">
                  <label htmlFor="password" className="text-neutral-1900 text-base font-normal">Password:</label>
                  <input type="password" id="password" placeholder="Enter your Password" className="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none" />
                </div>
                <div className="mt-4 h-[42px] self-stretch rounded-[15px] bg-blue_gray-100"/>

                {/* Confirm Password field */}
                <div className="mt-7 flex flex-col">
                  <label htmlFor="password" className="text-neutral-1900 text-base font-normal">Confirm Password:</label>
                  <input type="password" id="password" placeholder="Enter your Password Agin" className="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none" />
                </div>
                <div className="mt-4 h-[42px] self-stretch rounded-[15px] bg-blue_gray-100"/>

                <label htmlFor="" className="text-neutral-1900 text-base font-normal">
                  Once you register, your details will be saved. After registration,
                  You can log in to your account.
                </label>



{/* Login button */}
<div className="relative mt-[50px] flex justify-center gap-4">
 <div>
   
  <a href="#" className="mt-[50px] self-center">
  <Button as="h2" onClick={handleSubmit}>Submit</Button>

</a>
{/* Submit button */}
<a href="#" className="mt-[40px] self-center">
  <Button as="h2" onClick={handleLogin}>Log In</Button>


</a>
</div>

  <div className="absolute bootom-0 left-0 right-0 top-0 m-auto h-[44px] w-full rounded-[15px] bg-blue_gray-100"/>
</div>

<div>
             </div>
              </form>
            </div> 
          </div>
        </div>
      </div>
    </>
  );
}
