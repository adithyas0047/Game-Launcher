module.exports = {
  packagerConfig: {
    asar: true,
    icon: "assets/joystick.png",
  },
  makers: [
    { name: "@electron-forge/maker-squirrel" },
    { name: "@electron-forge/maker-zip", platforms: ["darwin"] },
    { name: "@electron-forge/maker-deb" },
    { name: "@electron-forge/maker-rpm" },
  ],
};
