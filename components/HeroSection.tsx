function HeroSection() {
  return (
    <section
      style={{
        background: "#0F7A3D",
        color: "white",
        padding: "40px 20px",
      }}
    >
      <h1 style={{ fontSize: "34px", marginBottom: "15px" }}>
        Welcome to FarmLite 🌱
      </h1>

      <p
        style={{
          fontSize: "18px",
          lineHeight: "1.6",
          maxWidth: "700px",
        }}
      >
        The all-in-one agriculture platform connecting Farmers, Buyers,
        Agribusinesses, Investors and Experts across Africa and beyond.
      </p>

      <button
        style={{
          marginTop: "25px",
          background: "#ffffff",
          color: "#0F7A3D",
          border: "none",
          padding: "14px 22px",
          borderRadius: "12px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>
    </section>
  );
}

export default HeroSection;
