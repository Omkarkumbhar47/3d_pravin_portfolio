import * as motion from "motion/react-client";
import { useState, useEffect } from "react";

export default function LayoutAnimation() {
    const [isOn, setIsOn] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsOn((prevState) => !prevState); // Use functional update to avoid state inconsistency
        }, 2000); // Toggle every 2 seconds

        return () => clearInterval(intervalId); // Clean up the interval when component unmounts
    }, []);

    return (
        <button
            className="toggle-container"
            style={{
                ...container,
                justifyContent: isOn ? "flex-start" : "flex-end", // Corrected justifyContent values
            }}
        >
            <motion.div
                className="toggle-handle"
                style={handle}
                layout
                transition={{
                    type: "tween", // Use tween for smooth transition
                    duration: 0.5,
                    ease: "easeOut", // Smooth easing function
                }}
            />
        </button>
    );
}

/**
 * ==============   Styles   ================
 */

const container = {
    width: 45,
    height: 80,
    border: "1px solid rgba(255, 255, 255)",
    borderRadius: 50,
    cursor: "pointer",
    display: "flex",
    alignItems: "center", // Align the handle vertically in the container
};

const handle = {
    width: 10,
    height: 10,
    backgroundColor: "#9911ff",
    borderRadius: "50%",
};
