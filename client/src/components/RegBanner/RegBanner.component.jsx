import React from 'react';
import { Link } from 'react-router-dom';

const RegBanner = () => {
  return (
    <div>
      <nav className="border-b-2 border-cyan-500 bg-cyan-300 py-5 ">
        <div className="container mx-auto">
          <div>
            <ul className="flex items-center justify-evenly space-x-4">
              <li className="flex items-center">
                <Link to="/">
                  <img
                    className="mb-5 mr-4 w-12"
                    src="/img/Timestructors_Logo_Icon.png"
                    alt="Timestructors Logo Icon"
                  />
                </Link>

                <Link to="/">
                  <img
                    className="mb-2 w-[500px]"
                    src="/img/Timestructors_Logo_Text.svg"
                    alt="Timestructors Logo Text"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default RegBanner;
