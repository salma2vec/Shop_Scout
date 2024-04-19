/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#264653",
        lightGreen: "#00a6fb",
        lightYellow: "#e9c46a",
        lightOrange: "#f4a261",
        darkBlack: "#000814",

        vividCerulean: "#00a6fb",  // default blue ( closest websafe #0099FF )
        orangePantone: "#FF5904",  // default blue ( inverse )
        willpowerOrange: "#00a6fb",  // default blue ( complementary )
        teleMagenta: "#d43370", // default pink ( closest websafe #CC3366 )
        mountainMeadowGreen: "#2BCC8F", // default pink ( inverse )
        eucalyptusGreen: "#33D497" // default pink ( complementary )
      },
    },
  },
  plugins: [],
};
