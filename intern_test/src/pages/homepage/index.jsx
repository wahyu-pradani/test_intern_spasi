import { useEffect, useState } from "react";
import Hero from "../../assets/bg-hero.svg";
import { Button } from "@radix-ui/themes/dist/cjs/index.js";
import Navbar from "../../components/navbar";
import LearnMore from "../../components/layout/section-about";
import Feature from "../../components/layout/section-feature";
import Strength from "../../components/layout/strength";
import { CardChoose } from "../../components/card";
import { Btn } from "../../components/button";
import Footer from "../../components/footer";

export default function (Home) {
  return (
    <div>
      <Navbar></Navbar>
      <section className="relative w-full h-screen">
        <img
          src={Hero}
          alt="bg-hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 gap-7">
          <div className="gap-7">
            <h1 className="md:text-[40px] text-[35px] text-white font-bold font-jakarta leading-tight">
              INTEGRATED IT PLANS FOR A <br />
              CONNECTED FUTURE
            </h1>
            <p className="mt-4 text-[14px] text-white font-normal font-sora max-w-xl">
              Helping businesses plan, build, integrate – simply, securely and
              scalable
            </p>
          </div>
          <div className="flex flex-col-2 items-center justify-center gap-8">
            <Button className="bg-redtext hover:bg-red-700 text-white px-[24px] py-[10px] rounded-md font-jakarta text-[14px]">
              Contact Us
            </Button>
            <Button className="border border-white outline outline-1 text-white px-[24px] py-[10px] rounded-md font-jakarta text-[14px]">
              Learn More
            </Button>
          </div>
        </div>
      </section>
      <section>
        <LearnMore></LearnMore>
      </section>
      <section>
        <Feature></Feature>
      </section>
      <section>
        <Strength></Strength>
      </section>
      <section className="container md:px-[150px] px-[20px] md:py-[50px] py-[30px]">
        <div className="">
          <CardChoose
            title="Transform How You Manage Complex Security Events"
            desc="Get in touch to learn more about our centralized platform for integrated awareness and decision support."
            btn={
              <Btn
                variant="third"
                className="bg-white text-redtext"
                text="Contact Us"
              ></Btn>
            }
            variant="third"
            className="text-white md:text-[40px] text-[25px] md:p-[50px] p-[20px]  font-bold flex flex-col gap-y-3 md:pr-[600px]"
          ></CardChoose>
        </div>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
