import React from "react";
import {Helmet} from "react-helmet";
import {  Text,Button,CheckBox} from "../../components";
import { useNavigate} from 'react-router-dom';



export default function RegistrationForm() {

  const navigate = useNavigate();

  const handleRegisterFee = () => {
      navigate('/RegistrationFee'); 
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
     
    <div className="flex items-center gap -[50px] md:flex-col">
    <div className="flex w-[48%] flex-col items-center justify-center bg-indigo-900 pb-[558px] pl-14 pt-[297px] md:w-full md:p-5 md:py-5 md:pl-5">
    <Text size="vl" as="p" className="mb-4 ml-96 md:ml-0 !text-purple-50 !font-aclonica">

      Institute <br/>  Management <br/>  System
       </Text>
    </div>
{/* Right side of the page with login form */}
<div className="flex flex-1 flex-col items-center justify-center rounded-[10px] bg-blue_gray-100 px-14 pb-[151px] pt-[68px] shadow-xs md:self-stretch md:p-5">
<div className="flex w-[88%] flex-col items-start gap-[47px] md:w-full">
  <Text size="10xl" as="p" className="! font-actor underline">
    Fill The Register Form
  </Text>

  Register form
  <form action="" class="px-10">
  
{/* Register No field */}
<div className="ml-6 flex flex-col items-start self-stretch md:ml-0"/>
  <label for="" class="text-neutral-1900 text-base font-normal ">Register No :</label>
  <input type="text" name="" placeholder="Enter your Register Number  " id=""
            class="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none" />

  <div className="mt-4 h-[42px] self-stretch rounded-[15px] bg-blue_gray-100"/>
 
{/* Full name field */}
  <div className="ml-6 flex flex-col items-start self-stretch md:ml-0"/>
  <label for="" class="text-neutral-1900 text-base font-normal ">Full Name: :</label>
  <input type="text" name="" placeholder="Enter your Full Name  " id=""
            class="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none" />

  <div className="mt-4 h-[42px] self-stretch rounded-[15px] bg-blue_gray-100"/>
 
     
{/* School name field */}
<div className="ml-6 flex flex-col items-start self-stretch md:ml-0"/>
  <label for="" class="text-neutral-1900 text-base font-normal ">School Name: :</label>
  <input type="text" name="" placeholder="Enter your School Name " id=""
            class="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none" />

  <div className="mt-4 h-[42px] self-stretch rounded-[15px] bg-blue_gray-100"/>

{/* Batch name field */}
<div className="ml-6 flex flex-col items-start self-stretch md:ml-0">
  <label for="" class="text-neutral-1900 text-base font-normal ">Batch(A/L) :</label>
  <input type="text" name="" placeholder="Enter your Batch(A/L) Name " id=""
            class="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none" />

  <div className="mt-4 h-[42px] self-stretch rounded-[15px] bg-blue_gray-100"/>

 {/* Email field */}
 <div className="ml-6 flex flex-col items-start self-stretch md:ml-0"/>
  <label for="" class="text-neutral-1900 text-base font-normal ">E mail :</label>
  <input type="text" name="" placeholder="Enter your E mail Address " id=""
            class="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none" />

  <div className="mt-4 h-[42px] self-stretch rounded-[15px] bg-blue_gray-100"/>

   {/* ID_No field */}
 <div className="ml-6 flex flex-col items-start self-stretch md:ml-0"/>
  <label for="" class="text-neutral-1900 text-base font-normal ">ID_No :</label>
  <input type="text" name="" placeholder="Enter your NIC Number " id=""
            class="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none" />

  <div className="mt-4 h-[42px] self-stretch rounded-[15px] bg-blue_gray-100"/>

 
 {/* Address field */}
 <div className="ml-6 flex flex-col items-start self-stretch md:ml-0"/>
  <label for="" class="text-neutral-1900 text-base font-normal ">Address:</label>
  <input type="text" name="" placeholder="Enter your Permenent Address " id=""
            class="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none" />

  <div className="mt-4 h-[42px] self-stretch rounded-[15px] bg-blue_gray-100"/>

{/*Gender*/}
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
<label for="" class="text-neutral-1900 text-base font-normal">Password :</label>
<input type="text" name="" placeholder="Enter your Password " id=""
            class="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none " />
                           
</div>
<div className="mt-4 h-[42px] self-stretch rounded-[15px] bg-blue_gray-100"/>
<label for="" class="text-neutral-1900 text-base font-normal ">Once you register, your details will be saved. After registration, you will be redirected to the payment page. 
                        You can log in to your account after the payment is successful.
                   </label>

{/* Register button */}
<div className="relative mt-[52px] h-[42px] w-[29%] self-center md:h-auto">
 <div>
  <a href="#" className="mt-[53px] self-center">
  <Button as="h2" onClick={handleRegisterFee}>Register</Button>
</a>
</div>

  <div className="absolute bootom-0 left-0 right-0 top-0 m-auto h-[44px] w-full rounded-[15px] bg-blue_gray-100"/>
</div>

<div>

</div>
  </div>
  </form>
  </div> 
</div>
    </div>
    </div>


    </>
  );
 
};

 