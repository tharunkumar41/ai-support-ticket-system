// function SearchBar({ search, setSearch }) {
//   return (
//     <input
//       type="text"
//       placeholder="🔍 Search by name, email or message..."
//       value={search}
//       onChange={(e) => setSearch(e.target.value)}
//       style={{
//         width: "100%",
//         padding: "12px",
//         borderRadius: "8px",
//         border: "1px solid #ccc",
//         marginBottom: "20px",
//         fontSize: "16px",
//       }}
//     />
//   );
// }

// export default SearchBar;

import { FaSearch } from "react-icons/fa";

function SearchBar({ search, setSearch }) {
  return (
    <div
      style={{
        position: "relative",
        marginBottom: "20px",
      }}
    >
      <FaSearch
        style={{
          position: "absolute",
          left: "15px",
          top: "50%",
          transform: "translateY(-50%)",
          color: "#6c757d",
        }}
      />

      <input
        type="text"
        placeholder="Search tickets..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px 15px 12px 45px",
          border: "1px solid #ced4da",
          borderRadius: "10px",
          fontSize: "15px",
          outline: "none",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}

export default SearchBar;