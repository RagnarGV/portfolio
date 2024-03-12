import AnimatedCursor from "react-animated-cursor";

function Animated_cursor() {
  return (
    <>
      <AnimatedCursor
        innerSize={6}
        outerSize={20}
        outerStyle={{
          border: "2px solid white",
          background: "transparent",
          mixBlendMode: "exclusion",
        }}
        innerStyle={{
          mixBlendMode: "exclusion",
        }}
        color="255,255,255"
        innerScale={1}
        outerScale={2.5}
        clickables={[
          "a",
          ".card-text",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          "Tilt",
          "i",
        ]}
      />
    </>
  );
}

export default Animated_cursor;
