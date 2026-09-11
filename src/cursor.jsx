import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setIsVisible(true);
    };

    const hideCursor = () => setIsVisible(false);

    window.addEventListener("pointermove", moveCursor);
    window.addEventListener("pointerdown", () => setIsVisible(true));
    window.addEventListener("pointerup", () => setIsVisible(true));
    window.addEventListener("pointerleave", hideCursor);

    return () => {
      window.removeEventListener("pointermove", moveCursor);
      window.removeEventListener("pointerdown", () => setIsVisible(true));
      window.removeEventListener("pointerup", () => setIsVisible(true));
      window.removeEventListener("pointerleave", hideCursor);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        width: 16,
        height: 16,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.85)",
        boxShadow: "0 0 20px rgba(255,255,255,0.7)",
        border: "1px solid rgba(255,255,255,0.9)",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.15s ease",
        zIndex: 9999,
      }}
    />
  );
}
