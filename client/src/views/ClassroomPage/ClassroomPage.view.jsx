import React from 'react';
import InstructorBot from '../../components/InstructorBot/InstructorBot.component';
import Footer from '../../components/Footer/Footer.component';
import NavBar from '../../components/NavBar/NavBar.component';

const Classroom = (props) => {
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
      <InstructorBot />
      <Footer />
    </div>
  );
};

export default Classroom;
