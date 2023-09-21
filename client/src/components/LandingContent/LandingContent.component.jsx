import React from 'react';
import { Link } from 'react-router-dom';

const LandingContent = () => {
  return (
    <div>
      <div className="grid grid-cols-2 items-center pl-32 pr-32">
        <div className="mt-10 flex items-center justify-center">
          <img
            className="lg:w-[350px] xl:w-[350px] 2xl:w-[500px]"
            src="/img/Time_Machine_Cover.png"
            alt=""
          />{' '}
        </div>

        <div>
          <div className="mt-50 flex h-20 justify-center">
            <h1 className=" font-futurettex text-4xl font-bold">
              {' '}
              Learn from the best instructors ever!
            </h1>
          </div>
          <div className="grid grid-rows-2">
            <Link to="/register">
              <button className="buttons shadows m-auto mb-6 block w-6/12 rounded-lg bg-cyan-400 pb-2 pl-10 pr-10 pt-2 font-bold text-white hover:bg-cyan-300 active:translate-y-1 active:bg-cyan-300">
                START THE MACHINE
              </button>
            </Link>
            <Link to="/login">
              <button className="buttons shadows m-auto block w-6/12 rounded-lg bg-cyan-400 pb-2 pl-10 pr-10 pt-2 font-bold text-white hover:bg-cyan-300 active:translate-y-1 active:bg-cyan-300">
                I HAVE TRAVELLED IN TIME
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingContent;
