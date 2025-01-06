import { motion, useSpring, useScroll } from "motion/react";

export default function ScrollLinked() {
  const { scrollXProgress } = useScroll();
  const scaleY = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* <motion.div 
      className="overflow-hidden top-0 left-0 bottom-0 w-[10px]"
        id="scroll-indicator"
        style={{
          scaleY,
          position: "fixed",
          // top: 0,
          left: 0,
          bottom: 0,
          width: 10,
          originY: 0,
          backgroundColor: "#ff0088",
        }}
      /> */}
    </>
  );
}
