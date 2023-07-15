import React, { useState, useContext } from "react";
import { CrowdFundingContext } from "@/Context/CrowdFunding";
import { Logo, Menu } from "../components/index";
const NavBar = () => {
  const { currentAccount, connectWallet } = useContext(CrowdFundingContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuList = ["White Paper", "Project", "Donation", "Members"];
  return (
    <div class="">
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative flex items-center justify-between">
          <div class="flex items-center">
            <a
              href="/"
              aria-label="Company"
              title="Company"
              class="inline-flex items-center mr-8"
            >
              <Logo color="text-white" />
              <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                FundWave
              </span>
            </a>
            <ul class="flex items-center space-x-8 lg:flex">
              {menuList.map((item, index) => (
                <li key={index + 1}>
                  <a
                    href="/"
                    aria-label="Our Product"
                    title="FundWave"
                    class="font-medium 
                    tracking-wide 
                    text-gray-100 
                    transition-colors 
                    duration-200 
                    hover:text-teal-accent-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {!currentAccount && (
            <ul class="flex display-none items-center space-x-8 lg:flex">
              <li>
                <button
                  onClick={() => connectWallet()}
                  class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none background"
                  aria-label="Sign up"
                  title="Sign up"
                >
                  Connect wallet
                </button>
              </li>
            </ul>
          )}
          <div class="lg:hidden z-40 ">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu />
            </button>

            {isMenuOpen && (
              <div class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-white border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="FundWave"
                        title="FundWave"
                        class="inline-flex items-center"
                      >
                        <Logo color="text-black" />
                        <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          FundWave
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M18.292 6.708a2 2 0 00-2.828 0L12 9.172 8.536 5.708a2 2 0 10-2.828 2.828L9.172 12l-3.464 3.464a2 2 0 102.828 2.828L12 14.828l3.464 3.464a2 2 0 102.828-2.828L14.828 12l3.464-3.464a2 2 0 000-2.828z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                      {menuList.map((el, i) => (
                        <li key={i + 1}>
                          <a
                            href="/"
                            aria-label="Our product"
                            title="Our product"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            {el}
                          </a>
                        </li>
                      ))}
                      <li>
                        <a
                          href="/"
                          class="inline-flex items-center background justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Connect Wallet
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
