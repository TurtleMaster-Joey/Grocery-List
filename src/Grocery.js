import React from "react";

const Grocery = ({ name, complete, id, groceryClick1 }) => (
  <li
    style={complete ? { ...styles.grocery, ...styles.complete } : styles.grocery}
    onClick={() => groceryClick1(id)}
  >
    {name}
  </li>
);

const styles = {
  grocery: { cursor: "pointer" },
  complete: {
    color: "grey",
  },
};
export default Grocery;
