// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadSlim } from "tsparticles-slim";

// const Star = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadSlim(engine);
//   }, []);

//   const particlesLoaded = useCallback(async (container) => {
//     console.log(container);
//   }, []);

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       loaded={particlesLoaded}
//       options={{
//         background: {
//           color: {
//             value: "#000000", // Black background
//           },
//         },
//         fpsLimit: 60,
//         interactivity: {
//           events: {
//             onHover: {
//               enable: true,
//               mode: "bubble",
//             },
//             resize: true,
//           },
//           modes: {
//             bubble: {
//               distance: 100,
//               opacity: 1,
//               size: 0,
//               duration: 2,
//             },
//           },
//         },
//         particles: {
//           color: {
//             value: "#ffffff", // White stars
//           },
//           links: {
//             enable: false,
//           },
//           move: {
//             enable: true,
//             speed: 0.3,
//             direction: "none",
//             random: true,
//             straight: false,
//             outModes: {
//               default: "out",
//             },
//           },
//           number: {
//             value: 120,
//             density: {
//               enable: true,
//               area: 1000,
//             },
//           },
//           opacity: {
//             value: { min: 0.3, max: 0.8 }, // random base opacity
//             animation: {
//               enable: true,
//               speed: { min: 0.2, max: 0.6 }, // random flicker speed
//               minimumValue: 0.3,
//               sync: false, // each star flickers differently
//             },
//           },
//           shape: {
//             type: "circle",
//           },
//           size: {
//             value: { min: 1, max: 3 },
//           },
//         },
//         detectRetina: true,
//       }}
//     />
//   );
// };

// export default Star;


import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useColorModeValue } from "./ui/color-mode"; // your custom hook

const Star = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  // 👇 theme-aware values
  const backgroundColor = useColorModeValue("#ffffff", "#000000"); // white in light mode, black in dark
  const starColor = useColorModeValue("#000000", "#ffffff");       // black stars in light, white stars in dark

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: backgroundColor,
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 100,
              opacity: 1,
              size: 0,
              duration: 2,
            },
          },
        },
        particles: {
          color: {
            value: starColor,
          },
          links: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
          },
          number: {
            value: 120,
            density: {
              enable: true,
              area: 1000,
            },
          },
          opacity: {
            value: { min: 0.3, max: 0.8 },
            animation: {
              enable: true,
              speed: { min: 0.2, max: 0.6 },
              minimumValue: 0.3,
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Star;
