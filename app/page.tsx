import React from "react";
import Image from "next/image";

import Navbar from "./components/navbar/navbar";
import Button from "./components/button/button";
import Tag from "./components/tag/tag";
import Img1 from "@/public/assets/1.png";
import Img2 from "@/public/assets/2.png";
import Img3 from "@/public/assets/3.png";
import Img4 from "@/public/assets/4.png";
import Img5 from "@/public/assets/5.png";
import Img6 from "@/public/assets/6.png";
import Img7 from "@/public/assets/7.png";
import Img8 from "@/public/assets/8.png";

export default function main() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div className=" h-[70vh] w-[100vw] bg-[#e4f5f4] ">
        <div className=" flex flex-col items-center justify-evenly h-[50vh]  ">
          <h1 className="text-[3.5vw] w-[65vw] text-center font-semibold ">
            A powerful online engagement tool that’s intuitive and simple to
            use.
          </h1>
          <p className=" text-[#878787] w-[32vw] text-center text-[1vw] ">
            With stellar one-click reports and unmatched support, see how Circle
            will make a difference in your business.
          </p>
          <Button
            customClasses=" w-[14.5vw] h-[6vh] text-[1.2em] font-semibold "
            title="Get started free"
          />
        </div>

        <Image
          src={Img1}
          alt="img1 does not show"
          className=" ml-[20vw] flex justify-center items-center w-[60vw]  "
        />
      </div>
      <div className="flex flex-col items-center justify-around mt-[35vh] w-[100%] h-[30vh]     ">
        <Tag title="OUR CUSTOMERS " />
        <p className=" text-[1.8vw]  ">
          Trusted by <b className="font-bold">100,000+ customers</b> in 90+
          countries
        </p>
        <div className=" w-[70vw] flex justify-around ">
          <Image src={Img2} alt="img2 does not show" className="w-[7vw] " />
          <Image src={Img3} alt="img2 does not show" className="w-[7vw] " />
          <Image src={Img4} alt="img2 does not show" className="w-[7vw] " />
          <Image src={Img5} alt="img2 does not show" className="w-[7vw] " />
          <Image src={Img6} alt="img2 does not show" className="w-[7vw] " />
          <Image src={Img7} alt="img2 does not show" className="w-[7vw] " />
        </div>
        <div className=" flex justify-between  w-[40vw] text-[1vw] ">
          <p>
            <span className="text-[#0CBBC7] font-bold">18281</span> signed up
            last month
          </p>
          <p>
            <span className="text-[#0CBBC7] font-bold">GDPR</span>- &{" "}
            <span className="text-[#0CBBC7] font-bold">CCPA</span>-ready
          </p>
          <p>
            <span className="text-[#0CBBC7] font-bold">Leader@G2</span> Summer
          </p>
        </div>
      </div>

      <div className="w-[60vw] h-[50vh] flex justify-between items-center mt-[20vh]">
        <div className="h-[40vh] flex flex-col justify-around  ">
          <Tag title="OUR PROMISE"/> 
          <h1 className="text-[1.7vw]  ">Tool <span className="font-extrabold">Built for prople.</span></h1>
          <div className=" text-[#676767] text-[1vw] h-[15vh] w-[21vw] flex flex-col justify-between ">
            <p>Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom.</p>
            <p>Circle has 100+ integrations with tools you already use and love.</p>
          </div>
          <Button
            customClasses=" w-[12vw] h-[6vh] text-[1.2em] font-semibold "
            title="Get started free"
          />
        </div>
        <Image
          src={Img8}
          alt="img8 does not show"
          className="w-[27vw] "
        />
      </div>
    </div>
  );
}
