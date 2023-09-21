import React from 'react';

const Footer = () => {
  return (
    <div>
      <nav className="border-t-2 border-cyan-500 bg-cyan-300 py-10 shadow-md shadow-cyan-500">
        <div className="grid grid-cols-3 justify-center gap-5 px-20">
          <div className="mt-2 grid justify-start">
            <p className=" font-nunito text-base">
              Made with{' '}
              <span className="inline-block align-middle">
                <img
                  src="/img/Footer_Heart_Icon.svg"
                  alt="heart"
                  className="h-6 w-6"
                />
              </span>{' '}
              in Latin America
            </p>
          </div>
          <div className="mt-2 grid justify-center">
            <p className="font-nunito text-base">
              ©2023 Timestructors. All rights reserved.
            </p>
          </div>
          {/*<div className="grid justify-center">
            <img src={FooterIcon} alt="footre_icon" className="h-10 w-10" />
  </div>*/}
          <div className="mt-2 grid justify-end">
            <p className="font-nunito text-base">
              by{' '}
              <span className="inline-block align-middle">
                {' '}
                <img
                  src="/img/Australpix_Logo_Icon.png"
                  alt="australpix logo"
                  className="w-44 pl-2"
                />
              </span>{' '}
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
