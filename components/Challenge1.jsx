import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";

const Challenge = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [challengeSpring, api] = useSpring(() => ({
    from: { x: currentPosition },
    config: { duration: 2000 },
    onChange: (ev) => {
      setCurrentPosition(ev.value.x);
    },
  }));
  const handleMouseLeave = () => {
    // console.log("mosue leave");
    api.start({
      from: { x: currentPosition },
      to: { x: 0 },
    });
  };
  const handleMouseEnter = () => {
    // console.log("handlemouse enter called");
    api.start({
      from: { x: currentPosition },
      to: { x: 700 },
    });
  };
  return (
    <animated.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        textAlign: "center",
        marginTop: "10px",
        width: "200px",
        height: "200px",
        backgroundColor: "blue",
        borderRadius: "10%",
        ...challengeSpring,
      }}
    >
      <h1>challenge-one</h1>
    </animated.div>
  );
};
export default Challenge;
