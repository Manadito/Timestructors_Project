import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.context';
import { baseUrl } from '../../config';

const NavBar = (props) => {
  const { imgs, setImgs, resetState } = useAppContext();
  console.log(imgs);
  // Destructuring Props
  const { user, setUser } = props;
  console.log(setUser);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const logoutPopupRef = useRef(null);
  const navigate = useNavigate();
  console.log(user);
  // i) Handlers
  const handleLogout = () => {
    logoutUser();
    resetState();
  };
  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const uploadImage = async () => {
    const file = document.querySelector('#fileInput').files[0];
    const url = `/api/users/${user._id}/updateImage`;
    console.log('Sending PATCH request to:', url);

    if (file) {
      const base64Image = await toBase64(file);

      console.log('Base64 Image:', base64Image);

      // Update the endpoint here
      fetch(`${baseUrl}/api/users/${user._id}/updateImage`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({ profileImage: base64Image }),
      })
        .then((response) => response.text())
        .then((text) => {
          // Check if text exists, parse it; otherwise, return an empty object
          const data = text ? JSON.parse(text) : {};
          console.log('Success:', data);

          // Update the imgs state
          setImgs(base64Image);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };
  // ii) API Calls
  const logoutUser = async () => {
    try {
      await axios.get('http://localhost:8080/api/users/logout', {
        withCredentials: true,
      });
      localStorage.removeItem('user');
      setUser(null);
      navigate('/');
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        logoutPopupRef.current &&
        !logoutPopupRef.current.contains(event.target)
      ) {
        setShowLogoutPopup(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle the div click by triggering the hidden file input click event
  const handleDivClick = () => {
    document.getElementById('fileInput').click();
  };

  // Handle file selection
  const handleFileChange = () => {
    uploadImage();
  };
  console.log(user);
  console.log(user.profileImage);
  return (
    <div>
      {/* Hidden File Input */}
      <input
        type="file"
        id="fileInput"
        style={{ display: 'none' }}
        accept="image/*"
        onChange={handleFileChange}
      />
      <nav className="border-b-2 border-cyan-500 bg-cyan-300 py-5">
        <div className="container mx-auto">
          <div>
            <ul className="flex items-center justify-evenly space-x-4">
              <li className="flex items-center">
                <Link to="/instructors">
                  <img
                    className="mb-5 mr-4 w-12"
                    src="/img/Timestructors_Logo_Icon.png"
                    alt="Timestructors Logo Icon"
                  />
                </Link>

                <Link to="/instructors">
                  <img
                    className="mb-2 w-[500px]"
                    src="/img/Timestructors_Logo_Text.svg"
                    alt="Timestructors Logo Text"
                  />
                </Link>
              </li>
              <li className="font-roundo text-xl font-bold text-slate-900 hover:font-bold hover:text-white">
                <Link to="/instructors" className="nav-link active">
                  Instructors
                </Link>
              </li>
              <li className="font-roundo text-xl font-bold text-slate-900 hover:font-bold hover:text-white">
                <Link to="/classroom" className="nav-link active">
                  Classroom
                </Link>
              </li>
              <li style={{ position: 'relative' }}>
                <button
                  className="h-16 w-16 rounded-full border-4 border-white"
                  onClick={() => setShowLogoutPopup(!showLogoutPopup)}
                >
                  <img
                    src={imgs || user.profileImage} // Use imgs state, fallback to user.profileImage
                    alt="User Avatar"
                    className="h-full w-full rounded-full object-cover"
                  />
                </button>
                {showLogoutPopup && (
                  <div
                    ref={logoutPopupRef}
                    className="absolute left-[-180%] top-[110%] h-56 w-56 rounded-lg border-cyan-400 bg-white p-5 shadow-xl"
                    style={{ zIndex: 9999 }}
                  >
                    <p className="mb-2 text-center font-nunito font-bold">
                      Hi, {user.name}!{' '}
                    </p>
                    <div
                      id="imageDiv"
                      className="mb-2 flex justify-center"
                      onClick={handleDivClick}
                    >
                      <div className="h-14 w-14 rounded-full border-4 border-cyan-400">
                        <img
                          src={imgs || user.profileImage} // Use imgs state, fallback to user.profileImage
                          alt="User Avatar"
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="grid grid-rows-2 ">
                      <button
                        className="rounded-xl border-b-2 bg-cyan-400 p-2 font-nunito font-bold hover:bg-cyan-300"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                      <button
                        className=" rounded-xl border-b-2 bg-cyan-400 p-2 font-nunito font-bold hover:bg-cyan-300"
                        onClick={() => setShowLogoutPopup(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
