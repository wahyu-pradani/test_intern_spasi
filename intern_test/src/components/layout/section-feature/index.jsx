import { Text } from "@radix-ui/themes/dist/cjs/components/callout.js";
import { Card } from "@radix-ui/themes/dist/cjs/index.js";
import { CardChoose } from "../../card";
import { Btn } from "../../button";
import ictime from "../../../assets/icons/ictime.svg";
import icmodule from "../../../assets/icons/icmodule.svg";
import icbot from "../../../assets/icons/icbot.svg";
import icserver from "../../../assets/icons/icserver.svg";

export default function Feature() {
  return (
    <section className="md:py-[50px] py-[30px] container bg-bggrey md:px-[150px] px-[20px]">
      <div className="grid grid-cols gap-y-12">
        <h1 className="font-jakarta font-bold md:text-[50px] text-[30px]">
          Comprehensive Capabilities
          <br /> for Integrated Security
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-none md:gap-7 gap-7">
          <CardChoose
            title="See more and get visibility for your business"
            desc={
              <Btn
                variant="third"
                className="bg-white text-redtext md:text-[20px] text-[16px]"
                text="Contact Us"
              ></Btn>
            }
            variant="primary"
            className="text-white md:text-[30px] text-[25px] md:p-[50px] p-[30px] font-bold grid grid-cols gap-y-3"
          ></CardChoose>
          <CardChoose
            variant="secondary"
            icon={<img src={ictime} alt="time" />}
            title="Real-Time Situational Awareness Dashboard"
            desc="Provides live updates and visual insights to monitor ongoing incidents as they unfold."
            className=" p-[20px] text-[20px] font-bold grid grid-cols gap-y-[16px]"
            btn={
              <Btn
                variant="secondary"
                className=" text-redtext"
                text="Learn More"
              ></Btn>
            }
          ></CardChoose>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-none gap-7">
          <CardChoose
            variant="secondary"
            icon={<img src={icmodule} alt="time" />}
            title="Integrated Intelligence Monitoring"
            desc="Detects patterns and threats by analyzing combined data from field operations and insight networks."
            className=" p-[20px] text-[20px] font-bold grid grid-cols gap-y-[16px]"
            btn={
              <Btn
                variant="secondary"
                className=" text-redtext"
                text="Learn More"
              ></Btn>
            }
          ></CardChoose>
          <CardChoose
            variant="secondary"
            icon={<img src={icserver} alt="time" />}
            title="Secure Data Exchange Platform"
            desc="Ensures information is verified, standardized, and safely exchanged across authorized entities."
            className=" p-[20px] text-[20px] font-bold grid grid-cols gap-y-[16px]"
            btn={
              <Btn
                variant="secondary"
                className=" text-redtext h-9 grid justify-center"
                text="Learn More"
              ></Btn>
            }
          ></CardChoose>
          <CardChoose
            variant="secondary"
            icon={<img src={icbot} alt="time" />}
            title="AI-Assisted Verification"
            desc="Automatically validates and corrects data sets to reduce human error and improve reliability."
            className=" p-[20px] text-[20px] font-bold grid grid-cols gap-y-[16px]"
            btn={
              <Btn
                variant="secondary"
                className=" text-redtext h-9 grid justify-center"
                text="Learn More"
              ></Btn>
            }
          ></CardChoose>
        </div>
      </div>
    </section>
  );
}
