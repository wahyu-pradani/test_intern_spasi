import { Btn } from "../../button";
import { CardChoose } from "../../card";
import ictime from "../../../assets/icons/ictime.svg";
import icacurate from "../../../assets/icons/icacurate.svg";
import icsecure from "../../../assets/icons/icsecure.svg";
import iccomunicate from "../../../assets/icons/iccomunicate.svg";
import icsimulation from "../../../assets/icons/icsimulation.svg";

export default function Strength() {
  return (
    <section className="container md:px-[150px] px-[20px] md:py-[50px] py-[30px]">
      <div className="grid grid-cols-1 md:gap-[50px] gap=[30px]">
        <div className="grid md:grid-cols-3 grid-cols-1 items-start md:gap-32 gap-1 ">
          <h1 className="md:text-[50px] text-[30px] font-jakarta font-bold text-left ">
            Why Choose <br />
            ASEGA?
          </h1>
          <div className=" text-left py-6 grid grid-cols gap-5 md:col-span-2">
            <p>
              Delivering rapid response, accurate insight, and seamless
              coordination through a single,
              <br /> cohesive system.
            </p>
            <Btn variant="primary" text="Contact Us" className="w-fit"></Btn>
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-none gap-7">
          <CardChoose
            variant="secondary"
            icon={<img src={ictime} alt="time" />}
            title="Integrated Intelligence Monitoring"
            desc="Empower decision-makers to monitor developments as they unfold."
            className=" p-[20px] text-[20px] font-bold grid grid-cols gap-y-[16px]"
          ></CardChoose>
          <CardChoose
            variant="secondary"
            icon={<img src={icacurate} alt="time" />}
            title="AI-Enhanced Data Accuracy"
            desc="Minimize human error and improve reliability with our AI-Assisted Verification and Rectification Software."
            className=" p-[20px] text-[20px] font-bold grid grid-cols gap-y-[16px]"
          ></CardChoose>
          <CardChoose
            variant="secondary"
            icon={<img src={icsecure} alt="time" />}
            title="Secure & Interoperable Exchange"
            desc="Ensure seamless interoperability with a secure platform where information is verified, standardized, and safely exchanged across authorized entities."
            className=" p-[20px] text-[20px] font-bold grid grid-cols gap-y-[16px]"
          ></CardChoose>
          <CardChoose
            variant="secondary"
            icon={<img src={iccomunicate} alt="time" />}
            title="Unified Coordination & Collaboration"
            desc="Enhance inter-agency collaboration by consolidating information from multiple sources into a unified view."
            className=" p-[20px] text-[20px] font-bold grid grid-cols gap-y-[16px]"
        
          ></CardChoose>
          <CardChoose
            variant="secondary"
            icon={<img src={icsimulation} alt="time" />}
            title="Predictive Modeling & Simulation"
            desc="Move from reactive to proactive by using predictive analysis to assess risks and strengthen preparedness strategies."
            className=" p-[20px] text-[20px] font-bold grid grid-cols gap-y-[16px]"
        
          ></CardChoose>
        </div>
      </div>
    </section>
  );
}
