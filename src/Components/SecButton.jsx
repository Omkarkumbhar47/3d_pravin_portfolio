import * as motion from "motion/react-client";
import { useState, useEffect } from "react";

export default function LayoutAnimation() {
    const [isOn, setIsOn] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsOn((prevState) => !prevState); // Use functional update to avoid state inconsistency
        }, 3000); // Toggle every 2 seconds

        return () => clearInterval(intervalId); // Clean up the interval when component unmounts
    }, []);

    return (
        <button
            className="toggle-container ps-2 py-2 "
            style={container}
        >
            <motion.div
                className="toggle-handle"
                style={handle}
                layout
                animate={{ y: isOn ? 0 : 30 }} // Move the handle up and down vertically
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
    width: 30,
    height: 60,
    border: "1px solid #fff",
    borderRadius: 50,
    cursor: "pointer",
    display: "flex",
    alignItems: "flex-start", // Align the handle vertically in the container
    position: "relative", // Required to position the handle correctly
};

const handle = {
    width: 10,
    height: 10,
    backgroundColor: "#fff",
    borderRadius: "50%",
    position: "absolute", // To allow movement inside the container
};
