import { animated, useSpring } from "@react-spring/web";

const UseSpringMove = () => {
  const spring = useSpring({
    from: { x: 0 },
    to: { x: 1000 },
    config: { duration: 5000 },
  });
  return (
    <div>
      <h1>useSpringMove.jsx</h1>
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
export default UseSpringMove;
