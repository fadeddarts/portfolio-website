// import { useEffect, useRef } from "react";
// import { Card } from "@chakra-ui/react";
// import { useColorMode } from "../ui/color-mode"; // adjust import path

// const BlogPostCard = ({ tweetId, username = "Lemmons292" }) => {
//   const blockRef = useRef(null);
//   const { colorMode } = useColorMode();

//   // Function to load/reload Twitter widgets
//   const loadTwitter = () => {
//     if (window.twttr && window.twttr.widgets && blockRef.current) {
//       window.twttr.widgets.load(blockRef.current);
//     }
//   };

//   // Load the script once
//   useEffect(() => {
//     if (!window.twttr) {
//       const script = document.createElement("script");
//       script.src = "https://platform.twitter.com/widgets.js";
//       script.async = true;
//       script.onload = loadTwitter;
//       document.body.appendChild(script);
//     } else {
//       loadTwitter();
//     }
//   }, []);

//   // Reload widget whenever color mode or tweetId changes
//   useEffect(() => {
//     if (blockRef.current) {
//       // Update the data-theme attribute based on current color mode
//       const blockquote = blockRef.current.querySelector("blockquote.twitter-tweet");
//       if (blockquote) {
//         blockquote.setAttribute("data-theme", colorMode === "dark" ? "dark" : "light");
//       }
//       loadTwitter(); // reload widget to apply new theme
//     }
//   }, [colorMode, tweetId]);

//   return (
//     <Card.Root
//       width="95%"
//       maxW={{ base: "95%", md: "600px" }}
//       mx="auto"
//       my={4}
//       shadow="md"
//       borderRadius="2xl"
//       overflow="hidden"
//       bg="transparent"
//       p={0} // remove padding so the embed touches edges
//     >
//       <div ref={blockRef} style={{ width: "100%", height: "auto" }}>
//         <blockquote
//           className="twitter-tweet"
//           data-theme={colorMode === "dark" ? "light" : "dark"}
//           data-align="center"
//           style={{ width: "100%", margin: 0 }}
//         >
//           <a href={`https://twitter.com/${username}/status/${tweetId}`}></a>
//         </blockquote>
//       </div>
//     </Card.Root>
//   );
// };

// export default BlogPostCard;


import { useEffect, useRef } from "react";
import { Card } from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode"; // adjust path

const BlogPostCard = ({ tweetId, username = "Lemmons292" }) => {
  const blockRef = useRef(null);
  const { colorMode } = useColorMode();

  const loadTwitter = () => {
    if (window.twttr && window.twttr.widgets && blockRef.current) {
      window.twttr.widgets.load(blockRef.current);
    }
  };

  // Load Twitter script once
  useEffect(() => {
    if (!window.twttr) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.onload = loadTwitter;
      document.body.appendChild(script);
    }
  }, []);

  // Re-render the embed whenever colorMode or tweetId changes
  useEffect(() => {
    if (blockRef.current) {
      // Remove old blockquote
      blockRef.current.innerHTML = "";

      // Create new blockquote element
      const blockquote = document.createElement("blockquote");
      blockquote.className = "twitter-tweet";
      blockquote.setAttribute("data-theme", colorMode === "dark" ? "dark" : "light");
      blockquote.setAttribute("data-align", "center");

      const a = document.createElement("a");
      a.href = `https://twitter.com/${username}/status/${tweetId}`;
      blockquote.appendChild(a);

      blockRef.current.appendChild(blockquote);

      loadTwitter(); // load widget
    }
  }, [colorMode, tweetId, username]);

  return (
    <Card.Root
      width="95%"
      maxW={{ base: "95%", md: "600px" }}
      mx="auto"
      my={4}
      shadow="md"
      borderRadius="2xl"
      overflow="hidden"
      bg="transparent"
      p={0}
    >
      <div ref={blockRef} style={{ width: "100%", height: "auto" }} />
    </Card.Root>
  );
};

export default BlogPostCard;
