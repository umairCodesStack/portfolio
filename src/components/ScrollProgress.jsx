import React, { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const el = barRef.current;
    const update = () => {
      if (!el) return;
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const pct = height > 0 ? (scrollTop / height) * 100 : 0;
      el.style.width = `${pct}%`;
    };
    update();
    document.addEventListener("scroll", update, { passive: true });
    return () => document.removeEventListener("scroll", update);
  }, []);

  return <div id="scroll-progress" ref={barRef}></div>;
}
