import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef } from "react";
import { HiMiniBars3, HiMiniBars3CenterLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Logo from "../../base-components/Logo";
import LucideIcon from "../../base-components/LucideIcon";
import { navigationLinks } from "./navigationLinks";
// import waveristaLogo from "../../assets/waveristaLogo.svg";

const Main = () => {
  // Handle header show/hide animation depending on the scroll direction
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    // Handle scroll events
    const handleScroll = () => {
      const currScrollPos = window.scrollY;
      const currHeaderElement = headerRef.current;

      console.log(currScrollPos);

      if (!currHeaderElement) return;

      if (prevScrollPos > currScrollPos) {
        currHeaderElement.style.transform = "translateY(0)";
      } else {
        currHeaderElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currScrollPos;
    };

    // Set up listeners for the scroll event
    window.addEventListener("scroll", handleScroll);

    // Remove listeners for the scroll event
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      className="fixed left-0 right-0 top-0 z-50 !h-[56px] translate-y-0 transform text-sm font-medium transition-transform duration-300 ease-in-out"
      ref={headerRef}
    >
      <Disclosure as="nav" className="bg-transparent backdrop-blur-md">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-full p-1 text-gray-400 hover:bg-[#246CF7] hover:text-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? <HiMiniBars3CenterLeft /> : <HiMiniBars3 />}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <Link to="/">
                      <Logo className="!h-14 !w-14" />
                    </Link>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-7 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigationLinks.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={twMerge([
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gradient-yellow-900 hover:bg-gray-100 hover:bg-opacity-5 hover:text-gradient-yellow-500",
                            "rounded-md px-3 py-2 text-sm font-medium",
                          ])}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-transparent text-sm focus:outline-none focus:ring-0 focus:ring-gradient-yellow-900 focus:ring-offset-0 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <LucideIcon
                          icon="UserCircle"
                          size={40}
                          strokeWidth={1}
                          className={twMerge([
                            "mx-auto block text-gradient-yellow-500",
                          ])}
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md !bg-black py-1 shadow-lg ring-1 ring-black ring-opacity-5 !backdrop-blur-lg focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/sign-in"
                              className={twMerge([
                                active ? "bg-gray-100 bg-opacity-5" : "",
                                "block px-4 py-2 text-sm text-gradient-yellow-900 hover:text-gradient-yellow-500",
                              ])}
                            >
                              Sign in
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/sign-up"
                              className={twMerge([
                                active ? "bg-gray-100 bg-opacity-5" : "",
                                "block px-4 py-2 text-sm text-gradient-yellow-900 hover:text-gradient-yellow-500",
                              ])}
                            >
                              Sign up
                            </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigationLinks.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={twMerge([
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-900 hover:text-[#246CF7]",
                      "block rounded-md px-3 py-2 text-sm font-medium",
                    ])}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Main;
