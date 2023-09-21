import React from 'react';

import UserForm from '../../components/UserForm/UserForm.component';
import Footer from '../../components/Footer/Footer.component';
import RegBanner from '../../components/RegBanner/RegBanner.component';

const SignUpPage = (props) => {
  // --------------------------------------------------
  // I) HOOKS AND VARIABLES
  // --------------------------------------------------

  // i) Lifting States
  const { setUser } = props;

  // --------------------------------------------------
  // II) JSX
  // --------------------------------------------------
  return (
    <div
      className="grid h-screen grid-rows-[auto,1fr,auto] bg-repeat"
      style={{
        backgroundImage: "url('/img/BackgroundTilesLoginReg.jpg')",
        backgroundSize: '700px 700px',
      }}
    >
      <div>
        <RegBanner />
      </div>
      <div className="grid content-center justify-items-center">
        <div>
          <div className="">
            <UserForm formType={'register'} setUser={setUser} />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default SignUpPage;
