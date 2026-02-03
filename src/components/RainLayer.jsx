import React, { useEffect, useState } from "react";


export default function RainLayer() {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    const count = 120; // tune for performance
    const arr = Array.from({ length: count }, () => {
      const left = Math.random() * 100; // vw %
      const delay = Math.random() * 2.5; // seconds
      const duration = 2.2 + Math.random() * 1.8; // seconds
      const length = 14 + Math.random() * 12; 
      const opacity = 0.35 + Math.random() * 0.45;
      return { left, delay, duration, length, opacity };
    });
    setDrops(arr);
  }, []);

  return (
    <div className="rain-layer" aria-hidden="true">
      {drops.map((d, i) => (
        <span
          key={i}
          className="drop"
          style={{
            left: `${d.left}vw`,
            "--delay": `${d.delay}s`,
            "--duration": `${d.duration}s`,
            "--length": `${d.length}px`,
            "--opacity": d.opacity,
          }}
        />
      ))}
    </div>
  );
}
