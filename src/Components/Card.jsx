import React, { useState } from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="my-16">
      <span className="text-4xl underline hover:underline-offset-4 mb-10 w-fit">
        Skill
      </span>
      <div className="parent my-10 mx-6">
        <div className="card-wrapper">
          <div className="card-inner">
            {/* Front of the card */}
            <div className="card-front">
              <div className="logo">
                <span className="circle circle4" />
                <span className="circle circle5">
                  <svg
                    className="w-[90%] h-[90%]"
                    height="2002"
                    viewBox=".1 16.7 2472.8 1996.5"
                    width="2500"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m2006.5 1485.6c-98.8 100.8-237 157.8-386.7 158-149.8.3-288.1-56.3-386.9-156.8-48.3-49-83.7-105.2-105.7-165.3-21.5-59-29.7-122.1-24.2-184.6 5.3-61 23.3-120.3 53-173.9 28.9-52.4 68.6-99.7 117.6-139.7 96-78.3 218.2-120.6 346.2-120.8s250.1 41.9 346.2 119.8c48.9 39.9 88.6 87 117.4 139.3 29.7 53.6 47.8 112.8 53.1 173.8 5.5 62.6-2.8 125.6-24.3 184.7-22 60-57.5 116.3-105.7 165.5z"
                      fill="#fff"
                    />
                    <path
                      d="m1300.4 1143.3c4.5-81.5 44.5-153.4 104.7-204.3 59.1-50.1 138.7-80.6 225.4-80.6 86.8.1 166.3 30.6 225.4 80.6 60.2 51 100.2 122.8 104.8 204.3 4.6 83.8-29.1 161.7-88.2 219.4-60.2 58.7-146 95.6-242 95.6s-181.9-36.9-242.1-95.6c-59-57.7-92.6-135.6-88-219.4z"
                      fill="#005385"
                    />
                  </svg>
                </span>
              </div>
              <div className="glass" />
              <div className="content text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
                <span className="title">
                  Blender <br />
                  (3D UI)
                </span>
                <span className="text">
                  Create, share, and use beautiful custom elements made with CSS
                </span>
              </div>
            </div>
            {/* Back of the card */}
            <div className="card-back">
              <span className="back-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis, eum!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
