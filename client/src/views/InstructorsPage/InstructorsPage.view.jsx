import React from 'react';
import InstructorCards from '../../components/InstructorCards/InstructorCards.component';
import NavBar from '../../components/NavBar/NavBar.component';
import Footer from '../../components/Footer/Footer.component';

const Instructors = (props) => {
  const { user, setUser } = props;
  return (
    <div
      className="grid h-screen grid-rows-[auto,1fr,auto] bg-repeat"
      style={{
        backgroundImage: "url('/img/BackgroundTilesMain.jpg')",
        backgroundSize: '700px 700px',
      }}
    >
      <NavBar setUser={setUser} user={user} />

      <InstructorCards />
      <Footer />
    </div>
  );
};

export default Instructors;
