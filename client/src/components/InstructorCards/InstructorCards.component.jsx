// React hook and library imports
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.context';

const InstructorCards = () => {
  const { setInstructor } = useAppContext();

  const handleMathematicsCardClick = () => {
    setInstructor('mathematics'); // This sets the selected instructor when a card is clicked
  };

  const handleHistoryCardClick = () => {
    setInstructor('history'); // This sets the selected instructor when a card is clicked
  };

  const handleLiteratureCardClick = () => {
    setInstructor('literature'); // This sets the selected instructor when a card is clicked
  };

  const handleScienceCardClick = () => {
    setInstructor('science'); // This sets the selected instructor when a card is clicked
  };

  return (
    <div className="flex flex-col  justify-center">
      <div className="flex items-center justify-center">
        <h1 className="mb-4 font-futurettex text-4xl font-bold">
          {' '}
          WELCOME! SELECT AN INSTRUCTOR
        </h1>
      </div>
      <div className="flex items-center justify-evenly">
        <div>
          <Link
            className="h-5/6 w-5/6 rounded-lg hover:h-full hover:w-full"
            to="/classroom/"
            onClick={() => handleMathematicsCardClick()}
          >
            <div className="flex items-center justify-center">
              <div className="hover:boxa relative overflow-hidden rounded-2xl bg-none bg-cover md:h-[250px] md:w-[187.5px] xl:h-[399.6px] xl:w-[264.8016px] 2xl:h-[499.5px] 2xl:w-[331.002px]">
                <div className="absoulte bg-white-500 h-full w-full">
                  <div className="flex h-full w-full items-center justify-center">
                    <img
                      className="rounded-xl border-4 border-cyan-400 xl:w-60 2xl:w-72"
                      src="/img/EinieSmall.jpg"
                      alt=""
                    />{' '}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link
            className="h-5/6 w-5/6 rounded-lg hover:h-full hover:w-full"
            to="/classroom/"
            onClick={() => handleHistoryCardClick()}
          >
            <div className="flex items-center justify-center">
              <div className="hover:boxb relative overflow-hidden rounded-2xl bg-none bg-cover md:h-[250px] md:w-[187.5px] xl:h-[399.6px] xl:w-[264.8016px] 2xl:h-[499.5px] 2xl:w-[331.002px]">
                <div className="absoulte bg-white-500 h-full w-full">
                  <div className="flex h-full w-full items-center justify-center">
                    <img
                      className="rounded-xl border-4 border-cyan-400 xl:w-60 2xl:w-72"
                      src="/img/CleoSmall.jpg"
                      alt=""
                    />{' '}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link
            className="h-5/6 w-5/6 rounded-lg hover:h-full hover:w-full"
            to="/classroom/"
            onClick={() => handleScienceCardClick()}
          >
            <div className="flex items-center justify-center">
              <div className="hover:boxc relative overflow-hidden rounded-2xl bg-none bg-cover md:h-[250px] md:w-[187.5px] xl:h-[399.6px] xl:w-[264.8016px] 2xl:h-[499.5px] 2xl:w-[331.002px]">
                <div className="absoulte bg-white-500 h-full w-full">
                  <div className="flex h-full w-full items-center justify-center">
                    <img
                      className="rounded-xl border-4 border-cyan-400 xl:w-60 2xl:w-72"
                      src="/img/VinciSmall.jpg"
                      alt=""
                    />{' '}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link
            className="h-5/6 w-5/6 rounded-lg hover:h-full hover:w-full"
            to="/classroom/"
            onClick={() => handleLiteratureCardClick()}
          >
            <div className="flex items-center justify-center">
              <div className="hover:boxd relative overflow-hidden rounded-2xl bg-none bg-cover md:h-[250px] md:w-[187.5px] xl:h-[399.6px] xl:w-[264.8016px] 2xl:h-[499.5px] 2xl:w-[331.002px]">
                <div className="absoulte bg-white-500 h-full w-full">
                  <div className="flex h-full w-full items-center justify-center">
                    <img
                      className="rounded-xl border-4 border-cyan-500 xl:w-60 2xl:w-72"
                      src="/img/BillySmall.jpg"
                      alt=""
                    />{' '}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InstructorCards;
