import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/Logo.svg";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About Us", href: "#", current: false },
  { name: "Product", href: "#", current: false },
  { name: "Contact Us", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center">
            <img alt="Logo" src={Logo} className="w-[87px] h-[18px]" />
          </div>
          <div className="hidden sm:block text-[14px] ">
            <div className="flex space-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.name === "Contact Us"
                      ? "bg-redtext px-[24px] py-[10px] rounded-md text-white font-jakarta text-[14px] font-medium hover:bg-red-700"
                      : item.current
                        ? "text-redtext font-jakarta text-[14px] font-medium"
                        : "text-dark hover:bg-white/5 hover:text-redtext font-jakarta",
                    "rounded-md px-3 py-2 text-[14px] font-medium",
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex sm:hidden">
            <DisclosureButton className="group inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:outline-indigo-500">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block size-6 group-data-open:hidden" />
              <XMarkIcon className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
        </div>
      </div>
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3 ">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.name === "Contact Us"
                  ? "bg-redtext md:px-[24px] md:py-[10px] px-[16px] py-[8px] rounded-md text-white font-jakarta text-[12px] font-medium hover:bg-red-700"
                  : item.current
                    ? "text-redtext font-jakarta text-[12px] font-medium"
                    : "text-dark hover:bg-white/5 hover:text-redtext font-jakarta",
                "block rounded-md px-3 py-2 text-[12px] font-medium justify-self-center",
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
