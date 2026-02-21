import { Button } from "@radix-ui/themes/dist/cjs/index.js";
import imgAbout1 from "../../../assets/img-about1.svg";
import imgAbout2 from "../../../assets/img-about2.svg";
import { Btn } from "../../button";

export default function LearnMore() {
  return (
    <section className="md:py-14 py-[30px] container md:px-[150px] px-[20px]">
      <div className="grid md:grid-cols-2 grid-cols-none">
        <img
          src={imgAbout1}
          className="hidden md:block w-[480px] h-[690px] "
          alt=""
        />
        <div className="grid grid-cols gap-5 font-jakarta text-black text-left">
          <h2 className=" font-bold md:text-[50px] text-[30px] text-left">
            A Unified Solution for Rapid Response and Accurate Insight
          </h2>
          <p className="text-[16px] font-normal">
            Combining real-time monitoring, AI-assisted verification, and
            advanced decision-support capabilities within a single, cohesive
            system to uncover hidden relationships and actionable insights.
          </p>
          <div>
            <Btn text="Learn More" variant="primary"></Btn>
          </div>
          <img src={imgAbout2} className="md:h-[305px]" alt="" />
        </div>
      </div>
    </section>
  );
}
