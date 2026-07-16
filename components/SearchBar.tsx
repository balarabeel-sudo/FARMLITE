
function SearchBar() {
  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Search farmers, products, companies..."
        style={{
          width: "100%",
          padding: "14px",
          borderRadius: "12px",
          border: "1px solid #ddd",
          fontSize: "16px",
          outline: "none",
        }}
      />
    </div>
  );
}

export default SearchBar;
