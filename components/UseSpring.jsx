import { animated, useSpring } from "@react-spring/web";

const UseSpring = () => {
  const spring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 5000 },
  });
  return (
    <div>
      <h1>useSpring.jsx</h1>
      <animated.div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "blue",
          borderRadius: "50%",
          ...spring,
        }}
      />
    </div>
  );
};
export default UseSpring;
