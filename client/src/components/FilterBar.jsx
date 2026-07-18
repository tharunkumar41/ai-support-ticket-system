// import { FaFilter, FaFlag, FaTags } from "react-icons/fa";
// function FilterBar({
//   priority,
//   setPriority,
//   category,
//   setCategory,
// }) {
//   const selectStyle = {
//     padding: "12px 16px",
//     borderRadius: "8px",
//     border: "1px solid #d1d5db",
//     fontSize: "15px",
//     minWidth: "180px",
//     backgroundColor: "#fff",
//     cursor: "pointer",
//     outline: "none",
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         gap: "15px",
//         marginBottom: "25px",
//         flexWrap: "wrap",
//       }}
//     >
//       <select
//         value={priority}
//         onChange={(e) => setPriority(e.target.value)}
//         style={selectStyle}
//       >
//         <option value="">All Priorities</option>
//         <option value="High">High</option>
//         <option value="Medium">Medium</option>
//         <option value="Low">Low</option>
//       </select>

//       <select
//         value={category}
//         onChange={(e) => setCategory(e.target.value)}
//         style={selectStyle}
//       >
//         <option value="">All Categories</option>
//         <option value="Billing">Billing</option>
//         <option value="Bug">Bug</option>
//         <option value="Feature Request">Feature Request</option>
//         <option value="Other">Other</option>
//       </select>
//     </div>
//   );
// }

// export default FilterBar;


import { FaFilter, FaFlag, FaTags } from "react-icons/fa";

function FilterBar({
  priority,
  setPriority,
  category,
  setCategory,
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "15px",
        marginBottom: "25px",
        flexWrap: "wrap",
      }}
    >
      {/* Priority Filter */}
      <div
        style={{
          position: "relative",
          flex: 1,
          minWidth: "220px",
        }}
      >
        <FaFlag
          style={{
            position: "absolute",
            left: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#6c757d",
          }}
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 12px 12px 40px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "15px",
          }}
        >
          <option value="">All Priorities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      {/* Category Filter */}
      <div
        style={{
          position: "relative",
          flex: 1,
          minWidth: "220px",
        }}
      >
        <FaTags
          style={{
            position: "absolute",
            left: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#6c757d",
          }}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 12px 12px 40px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "15px",
          }}
        >
          <option value="">All Categories</option>
          <option value="Billing">Billing</option>
          <option value="Bug">Bug</option>
          <option value="Feature Request">Feature Request</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </div>
  );
}

export default FilterBar;