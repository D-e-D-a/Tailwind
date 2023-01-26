import React from "react";
import fb from "./assets/Facebook.svg";
import insta from "./assets/Instagram.svg";
import tw from "./assets/Twitter.svg";
import gt from "./assets/GitHub.svg";
import btn1 from "./assets/Button1.svg";
import btn2 from "./assets/Button2.svg";
export const Card = () => {
  return (
    <div className="w-[550px] h-auto py-5 bg-[#23252C] flex flex-col justify-center items-center  font-inter">
      <img
        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        className="w-[317px] h-[317px] object-cover "
      />
      <div className="w-[317px] h-max bg-[#1A1B21] flex flex-col items-center pt-5 px-10 ">
        <h1 className=" text-2xl font-bold text-white ">Jovan Dedeic</h1>
        <h4 className=" text-xs font-normal text-[#F3BF99] pb-3 ">
          Frontend Developer
        </h4>
        <div className=" flex justify-between hover:cursor-pointer ">
          <img className=" mr-1" src={btn1} />
          <img src={btn2} />
        </div>
        <div className=" text-[#DCDCDC] text-left pt-9 px-9 h-auto">
          <h1 className=" text-base text-[#F5F5F5] mb-2   ">About</h1>
          <p className=" text-xs mb-3 ">
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
          <h1 className=" text-base text-[#F5F5F5] pb-2">Interests</h1>
          <p className=" text-xs  mb-3">
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </div>
      <div className=" flex w-[317px] h-16 justify-evenly bg-[#161619] ">
        <img className="hover:cursor-pointer" src={fb} />
        <img className="hover:cursor-pointer" src={insta} />
        <img className="hover:cursor-pointer" src={tw} />
        <img className="hover:cursor-pointer" src={gt} />
      </div>
    </div>
  );
};
