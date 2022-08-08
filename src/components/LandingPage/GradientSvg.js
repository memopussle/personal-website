import React from "react";

const GradientSvg = () => {
  return (
    <div>
      <svg width="0" height="0">
        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#3dd3d7" offset="0%" />
          <stop stopColor="#d65fe1" offset="80%" />
        </linearGradient>
      </svg>

      <svg width="0" height="0">
        <linearGradient
          id="more-blue-gradient"
          x1="100%"
          y1="100%"
          x2="0%"
          y2="0%"
        >
          <stop stopColor="#3dd3d7" offset="50%" />
          <stop stopColor="#d65fe1" offset="150%" />
        </linearGradient>
      </svg>

      <svg width="0" height="0">
        <linearGradient
          id="purple-gradient"
          x1="100%"
          y1="100%"
          x2="0%"
          y2="0%"
        >
          <stop stopColor="#d65fe1" offset="30%" />
          <stop stopColor="#3dd3d7" offset="100%" />
        </linearGradient>
      </svg>

      <svg width="0" height="0">
        <linearGradient
          id="more-purple-gradient"
          x1="100%"
          y1="100%"
          x2="0%"
          y2="0%"
        >
          <stop stopColor="#3dd3d7" offset="5%" />
          <stop stopColor="#d65fe1" offset="70%" />
        </linearGradient>
      </svg>

      <svg width="0" height="0">
        <linearGradient
          id="all-purple-gradient"
          x1="100%"
          y1="100%"
          x2="0%"
          y2="0%"
        >
          <stop stopColor="#3dd3d7" offset="0%" />
          <stop stopColor="#d65fe1" offset="50%" />
        </linearGradient>
      </svg>
    </div>
  );
};

export default GradientSvg;
