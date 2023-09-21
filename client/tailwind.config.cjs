/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        roundbold: ['Round_Bold', 'sans-serif'],
        rounditalic: ['Round_Italic', 'sans-serif'],
        roundregular: ['Round_Regular', 'sans-serif'],
        futurettex: ['FuturetteEx', 'sans-serif'],
        futurettexlo: ['FuturetteExlo', 'sans-serif'],
        roundo: ['Roundo_Regular', 'sans-serif'],
      },
      transform: {
        150: 'scale(1.5)',
      },
      backgroundImage: {
        classroomZero: "url('/img/ClassroomZero.jpg')",
        classroomOne: "url('/img/ClassroomOne.jpg')",
        classroomTwo: "url('/img/ClassroomTwo.jpg')",
        classroomThree: "url('/img/ClassroomThree.jpg')",
        classroomFour: "url('/img/ClassroomFour.jpg')",
        leftDoor: "url('/img/LeftDoor.png')",
        rightDoor: "url('/img/RightDoor.png')",
        rotatingSwitch: "url('/img/RotatingSwitch.png')",
      },
      keyframes: {
        fullSpin: {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
      },
      animation: {
        fullSpin: 'fullSpin 1.5s linear infinite',
      },
    },
  },
  plugins: [],
};
