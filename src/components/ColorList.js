import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

    return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {/* display the array of <li> elements here! */}
        {colors.map((color) => {
            return <li key={color} style={{ color: color }}>{color}</li>;
            // The key prop allows React to internally track each element.
            // MUST USE KEY when creating an array of JSX elelments
          })}
      </ol>
    </div>
  );
}

// function ColorList() {
//   const colors = [
//     "firebrick",
//     "rebeccapurple",
//     "salmon",
//     "darkslategray",
//     "hotpink",
//   ];

//   return (
//     <div>
//       <h1>Top 5 CSS Colors</h1>
//       <ol>
//         <li style={{ color: colors[0] }}>{colors[0]}</li>
//         <li style={{ color: colors[1] }}>{colors[1]}</li>
//         <li style={{ color: colors[2] }}>{colors[2]}</li>
//         <li style={{ color: colors[3] }}>{colors[3]}</li>
//         <li style={{ color: colors[4] }}>{colors[4]}</li>
//       </ol>
//     </div>
//   );
// }

export default ColorList;
