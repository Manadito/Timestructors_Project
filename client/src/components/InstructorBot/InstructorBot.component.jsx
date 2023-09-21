import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAppContext } from '../../context/AppContext.context';
import { baseUrl } from '../../config';

const InstructorBot = () => {
  // State variables and props --------------------------------------------------------------------------
  const { instructor } = useAppContext();
  const [prompt, setPrompt] = useState('');
  const [apiResponse, setApiResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState(null);
  const [showTempImg, setShowTempImg] = useState(false);

  //-------------------------------------------------------------------------------------------------
  // Speech Syntheis

  // This function will set a timer of 2 seconds before the door class becomes door.open and ends up animating the door movement
  useEffect(() => {
    const elementsToAnimate = [
      { id: 'door', className: 'open', delay: 2000 },
      { id: 'doorright', className: 'open', delay: 2000 },
      { id: 'rotate-and-hide', className: 'animate', delay: 1000 },
    ];

    const timers = elementsToAnimate.map(({ id, className, delay }) => {
      const element = document.getElementById(id);
      return setTimeout(() => {
        element.classList.add(className);
      }, delay);
    });

    // Clear timers if necessary
    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  // -----------------------------------------------------------------------------------------------------
  // UseEffect for Speech purposes to run this voice secondary effect

  useEffect(() => {
    if (apiResponse) {
      let speech = new SpeechSynthesisUtterance(); // This creates a new SpeechSynthesisUtterance object
      speech.text = apiResponse; // This sets the text to be spoken. In our case 'apiRepsonse'
      let voices = window.speechSynthesis.getVoices();
      //We use switch statements to customize the voice settings based on the state value of instructor

      switch (instructor) {
        case 'mathematics': // For when instructor === 'mathematics'
          speech.voice = voices[4];
          speech.rate = 1; // Sets the velocity at which the voice speaks. Can range from 0.1 to 10
          speech.pitch = 1; // Sets the pitch. Can range from 0 to 2
          speech.volume = 1; // Sets the volume. Can range from 0 to 1
          break;
        case 'history': // For when instructor === 'history'
          speech.voice = voices[13];
          speech.rate = 1; // Sets the velocity at which the voice speaks. Can range from 0.1 to 10
          speech.pitch = 1; // Sets the pitch. Can range from 0 to 2
          speech.volume = 1; // Sets the volume. Can range from 0 to 1
          break;
        case 'science': // For when instructor === 'history'
          speech.voice = voices[9];
          speech.rate = 1.1; // Sets the velocity at which the voice speaks. Can range from 0.1 to 10
          speech.pitch = 0.5; // Sets the pitch. Can range from 0 to 2
          speech.volume = 1; // Sets the volume. Can range from 0 to 1
          break;
        case 'literature': // For when instructor === 'history'
          speech.voice = voices[9];
          speech.rate = 1; // Sets the velocity at which the voice speaks. Can range from 0.1 to 10
          speech.pitch = 0.9; // Sets the pitch. Can range from 0 to 2
          speech.volume = 1; // Sets the volume. Can range from 0 to 1
          break;
        default:
          // Default settings
          speech.voice = voices[0];
          speech.rate = 1;
          speech.pitch = 1;
          speech.volume = 1;
          break;
      }

      window.speechSynthesis.speak(speech); // Speak the text
    }
  }, [apiResponse, instructor]); // The effect runs whenever the apiRepsonse changes. Must add 'instructor' as a dependency so the effect reruns if it changes

  // Determining the background class and image src based on the current value of the 'instructor' state
  let bgClass, imgSrc, temporaryImgSrc, welcomeMessage; // initializing variables for background class and src

  if (instructor === 'mathematics') {
    bgClass = 'bg-classroomOne';
    imgSrc = '/img/EinieClassroom.png';
    temporaryImgSrc = '/img/EinieClassroom2.png';
    welcomeMessage =
      'Welcome to the Mathematics Classroom! My name is Albert Einstein, but you may call me Dr. Einie. How may I assist you with you math queries?';
  } else if (instructor === 'history') {
    bgClass = 'bg-classroomTwo';
    imgSrc = '/img/CleoClassroom.png';
    temporaryImgSrc = '/img/CleoClassroom2.png';
    welcomeMessage =
      'Welcome to the History Classroom! My name is Cleopatra Thea Philopator, but you may call me Ms. Cleo. How may I assist you with you history queries?';
  } else if (instructor === 'science') {
    bgClass = 'bg-classroomThree';
    imgSrc = '/img/VinciClassroom.png';
    temporaryImgSrc = '/img/VinciClassroom2.png';
    welcomeMessage =
      'Welcome to the Science Classroom! My name is Leonardo DaVinci, but you may call me Dr. Vinci. How may I assist you with you scientific queries?';
  } else if (instructor === 'literature') {
    bgClass = 'bg-classroomFour';
    imgSrc = '/img/BillyClassroom.png';
    temporaryImgSrc = '/img/BillyClassroom2.png';
    welcomeMessage =
      'Welcome to the Literature Classroom! My name is William Shakespeare, but you may call me Sir Billy. How may I assist you with you literature queries?';
  } else {
    bgClass = 'bg-classroomZero';
    imgSrc = null;
    temporaryImgSrc = null;
    welcomeMessage =
      'This classroom is empty! We should probably go back to the instructors page, activate the time machine and bring someone back from the past.';
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await axios.post(`${baseUrl}/generate-text`, {
        prompt,
        type: instructor, // we specify the chatbot type here
      });

      console.log('Server response:', JSON.stringify(result.data, null, 2)); // Log full server response

      // Check if the expected fields exist
      if (
        result.data &&
        result.data.choices &&
        result.data.choices[0] &&
        result.data.choices[0].message
      ) {
        setApiResponse(result.data.choices[0].message.content);
        handleImageSwap();
      } else {
        setApiResponse('Unexpected response format from server.');
      }
    } catch (e) {
      console.error(e);
      setApiResponse('Something is going wrong, Please try again.');
    }
    setLoading(false);
  };

  // Image swap hanlding function -------------------------------------------------------------------------
  const handleImageSwap = () => {
    // This sets a temporary image source
    setTempImgSrc(temporaryImgSrc);
    // This shows the temporary image
    setShowTempImg(true);
    // This switches back to the original image after a few seconds
    setTimeout(() => {
      setShowTempImg(false);
    }, 8000);
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative m-auto overflow-hidden rounded-xl border-8 border-cyan-500 bg-cyan-500 lg:h-[486.4px] lg:w-[972.8px] 2xl:h-[640px] 2xl:w-[1280px]">
        <div
          className={`${bgClass} absolute h-full w-full rounded-xl bg-cover`}
        >
          <div className="h-1/6">
            <h1>Chat with GPT-3</h1>
          </div>
          <div className="flex h-5/6">
            <div className="grid w-4/6 grid-rows-2">
              <div className="flex justify-center">
                <div className="w-4/5 rounded-lg border-8 border-cyan-500 bg-white p-10">
                  {apiResponse ? (
                    <div>
                      <strong>Response:</strong>
                      <p>{apiResponse}</p>
                    </div>
                  ) : (
                    <div>
                      <strong>Welcome:</strong>
                      <p>{welcomeMessage}</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-10 flex justify-center">
                <form
                  className="flex h-3/5 w-4/5 items-center justify-center rounded-lg border-8 bg-white"
                  onSubmit={handleSubmit}
                >
                  <input
                    className="h-2/5 w-4/5 bg-white"
                    type="text"
                    id="question"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    style={{ paddingLeft: '10px' }}
                  />
                  <button className="" type="submit" disabled={loading}>
                    {loading ? (
                      <img
                        className="ml-7 h-14 w-14 animate-spin"
                        src="/img/Spinner.jpg"
                        alt="Spinner"
                      />
                    ) : (
                      <img
                        className="ml-7 h-14 w-14"
                        src="/img/Raise_Hand_Icon.jpg"
                        alt="Raise Hand Icon"
                      />
                    )}
                  </button>
                </form>
              </div>
            </div>
            {/* h-fit avoids character's head clipping cause by overflow-hidden on top container */}
            <div className="flex h-fit w-2/6">
              {/* If showTempImg is true show 'tempImgSrc' and if false show 'imgSrc'*/}
              <img
                className="mt-28 h-full w-full scale-150 object-cover object-center"
                src={showTempImg ? tempImgSrc : imgSrc}
                alt={
                  (showTempImg ? tempImgSrc : imgSrc)
                    ? 'Selected Instructor'
                    : ''
                }
              />
            </div>
          </div>
        </div>
        <div
          id="rotate-and-hide"
          className="rotate-and-hide absolute z-10 mt-1 h-full w-full rounded-xl bg-rotatingSwitch bg-cover"
        ></div>
        <div
          id="door"
          className="door absolute h-full w-full rounded-xl bg-rightDoor bg-cover transition-all duration-1000 ease-in-out"
        ></div>
        <div
          id="doorright"
          className="doorright absolute h-full w-full rounded-xl bg-leftDoor bg-cover transition-all duration-1000 ease-in-out"
        ></div>
      </div>
    </div>
  );
};

export default InstructorBot;
