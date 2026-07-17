function Navbar() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 20px",
        backgroundColor: "#0F7A3D",
        color: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div>
        <h2 style={{ margin: 0 }}>🌱 FarmLite</h2>
        <small>Grow Together</small>
      </div>

      <div
        style={{
          display: "flex",
          gap: "18px",
          fontSize: "22px",
        }}
      >
        <span>🔍</span>
        <span>🔔</span>
        <span>💬</span>
        <span>👤</span>
      </div>
    </header>
  );
}

export default Navbar;
