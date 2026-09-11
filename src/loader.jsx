export default function Loader() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(10, 10, 10, 0.7)",
        backdropFilter: "blur(6px)",
        zIndex: 9998,
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          border: "4px solid rgba(255,255,255,0.2)",
          borderTopColor: "#fff",
          borderRadius: "50%",
          animation: "spin 0.9s linear infinite",
        }}
      />
    </div>
  );
}
