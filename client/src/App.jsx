import './App.css';
import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './views/LandingPage/LandingPage.view';
import ClassroomPage from './views/ClassroomPage/ClassroomPage.view';
import InstructorsPage from './views/InstructorsPage/InstructorsPage.view';
import LoginPage from './views/LogRegPage/LoginPage.view';
import SignUpPage from './views/LogRegPage/SignUpPage.view';

// **************************************************************************
// A) AUXILIARY COMPONENT
// **************************************************************************
const ProtectedRoute = (props) => {
  // Variables from Props
  const { user, redirectPath = '/', children } = props;

  // II) JSX
  return <>{!user ? <Navigate to={redirectPath} replace /> : children}</>;
};

const PublicRoute = (props) => {
  // --------------------------------------------------
  // I) HOOKS AND VARIABLES
  // --------------------------------------------------

  // Variables
  const { user, redirectPath = '/', children } = props;

  // --------------------------------------------------
  // II) JSX
  // --------------------------------------------------
  return <>{user ? <Navigate to={redirectPath} replace /> : children}</>;
};

// **************************************************************************
// B) MAIN COMPONENT
// **

function App() {
  // --------------------------------------------------
  // I) HOOKS AND VARIABLES
  // --------------------------------------------------

  // Variables
  const userDetails = JSON.parse(localStorage.getItem('user'));
  const userInfo = userDetails ? userDetails : null;
  // State Hooks
  const [user, setUser] = useState(userInfo);

  // --------------------------------------------------
  // II) JSX
  // --------------------------------------------------

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/instructors"
          element={
            <ProtectedRoute user={user}>
              <InstructorsPage setUser={setUser} user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/classroom"
          element={
            <ProtectedRoute user={user}>
              <ClassroomPage setUser={setUser} user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute user={user}>
              <SignUpPage setUser={setUser} />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute user={user}>
              <LoginPage setUser={setUser} />
            </PublicRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
