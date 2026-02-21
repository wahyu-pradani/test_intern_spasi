import Logo from "../../assets/Logofooter.svg";
import icPhone from "../../assets/icons/icphone.svg";
import icMail from "../../assets/icons/icmail.svg";

export default function Footer() {
  const navigation = [
    { name: "Quick Links", href: "#", current: true },
    { name: "Home", href: "#", current: false },
    { name: "About Us", href: "#", current: false },
    { name: "Contact Us", href: "#", current: false },
  ];
  return (
    <footer className="bg-black md:px-[150px] md:pt-[100px] px-[20px] pt-[25px] pb-[25px] font-cabin">
      <div className="grid md:grid-cols grid-cols-none md:gap-10 gap-3">
        <div className="grid md:grid-cols-4 grid-cols-1 md:gap-0 gap-3">
          <div className="grid grid-cols md:col-span-2 gap-[10px] ">
            <div>
              <img src={Logo} alt="" className="w-[87px] h-[13px]" />
            </div>

            <p className="text-white text-left md:text-[14px] text-[12px]">
              Combining real-time monitoring, AI-assisted verification, and
              advanced decision-support capabilities within a single, cohesive
              system to uncover hidden relationships and actionable insights.
            </p>
          </div>
          <div>
            <div className="grid grid-rows-4 md:gap-[10px] gap-[2px] text-left md:justify-end justify-start">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white md:text-[14px] text-[12px] "
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-rows-3 md:pr-0 text-left text-white md:text-[14px] text-[12px] md:gap-[10px] gap-[2px] md:justify-end justify-start">
            <p className="w-fit">Get In Touch</p>
            <div className="flex flex-cols-2 md:gap-[10px] md:w-fit gap-2">
              <img
                src={icPhone}
                className="md:w-[20px] md:h-[20px] w-[16px] h-[16px]"
              ></img>
              <p className="md:text-[14px] text-[12px] w-fit">+123-456-7890</p>
            </div>
            <div className="flex flex-cols-2 md:gap-[10px] gap-2">
              <img
                src={icMail}
                className="md:w-[20px] md:h-[20px] w-[16px] h-[16px]"
              ></img>
              <p className="md:text-[14px] text-[12px]">info@asega.com</p>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-3 text-center text-white md:text-[14px] text-[12px]">
          <hr className="h-2 text-white"></hr>
          <p>© Copyright 2025, All Rights Reserved by ASEGA</p>
        </div>
      </div>
    </footer>
  );
}
