import React, { useRef, useEffect, useState } from "react";

const VantaNet = ({ children }) => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && window.VANTA && window.VANTA.NET) {
      const effect = window.VANTA.NET({
        el: vantaRef.current,
        color: "rgba(118, 118, 118, 1)", // light green lines/dots
        backgroundColor: "#b7e2c2", // light green background
        points: 10.0,
        maxDistance: 30.0,
        spacing: 25.0,
      });
      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      {/* Fixed background effect */}
      <div
        ref={vantaRef}
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />

      {/* Scrollable content wrapper */}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </>
  );
};

export default VantaNet;
