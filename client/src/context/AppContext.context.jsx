import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [instructor, setInstructor] = useState(null);
  const [imgs, setImgs] = useState();

  const resetState = () => {
    setInstructor(null);
    setImgs(undefined);
  };

  return (
    <AppContext.Provider
      value={{
        instructor,
        setInstructor,
        imgs,
        setImgs,
        resetState, // include the reset function in the value passed to the provider
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// We will import useAppContext into the components that require specific states from this file
// We will import them like so: import { useAppContext } from '../contexts/AppContext'
export const useAppContext = () => {
  return useContext(AppContext);
};
