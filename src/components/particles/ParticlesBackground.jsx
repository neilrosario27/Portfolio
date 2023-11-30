// import React from "react";
// import Particles from "react-tsparticles";
// import particlesConfig from "./config/particles-config";
// export const ParticlesBackground = () => {
//   return <Particles paras={particlesConfig}></Particles>;
// };

import Particles from "tsparticles";

import particlesConfig from "./config/particles-config.js";
import { loadFull } from "tsparticles";
export default function ParticlesBackground() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
      params={particlesConfig}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      style={{ width: "100%", height: "100vh" }}
    />
  );
}

// import React, { useEffect } from "react";
// import particlesJS from "particles.js";

// import particlesConfig from "./config/particles-config";

// const ParticlesBackground = () => {
//   useEffect(() => {
//     particlesJS("particles-container", particlesConfig);
//   }, []);

//   return (
//     <div id="particles-container">
//       {/* Your other React components or content */}
//     </div>
//   );
// };

// export default ParticlesBackground;
