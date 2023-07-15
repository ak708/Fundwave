import React from "react";

const Footer = () => {
  const productList = ["Market", "ERC20 Token", "Donation"];
  const contactList = [
    "support@FundWave.com",
    "https://twitter.com/FundWave",
    "Contact Us",
  ];
  const usefulLink = ["Home", "About", "Company Bio"];
  return (
    <footer class="text-center backgroundMain lg:text=left">
      <div class="mx-6 py-10 text-center md:text-left">
        <div class="grid-1 grid gap-8 md:grid-cols-2 fg:grid-cols-4">
          <div class="">
            <h6 class="mb-4 flex items-center justify-center text-semibold uppercase md:justify-start">
              FundWave
            </h6>
            <p>here u go!</p>
          </div>
          <div class="">
            <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            {productList.map((el, i) => (
              <p class="mb-4" key={i + 1}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
          <div class="">
            <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Usefull Links
            </h6>
            {usefulLink.map((el, i) => (
              <p class="mb-4" key={i + 1}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
          <div>
            <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            {contactList.map((el, i) => (
              <p class="mb-4" key={i + 1}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div class="backgroundMain p-6 text-center">
        <span> 2023 Copyright:</span>
        <a class="font-semibold" href="tailwind-elements.com"></a>
      </div>
    </footer>
  );
};

export default Footer;
