import { useState } from "react";

function Navbar() {
  const main = { color: "white", textDecoration: "none" };
  let hover = { color: "grey", textDecoration: "none" };

  const [firstColor, setFirstColor] = useState(main);
  const [secondColor, setSecondColor] = useState(main);

  return (
    <nav
      style={{
        backgroundColor: "#333",
        color: "white",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100vw",
        position: "fixed",
        top: "0",
        marginBottom: "20px",
        gap: "2rem",
        padding: "0 1rem",
      }}
    >
      <h1>Apptendance</h1>
      <ul
        style={{
          padding: "0",
          margin: "0",
          listStyle: "none",
          display: "flex",
          gap: "1rem",
        }}
      >
        <li>
          <a
            onMouseEnter={() => setFirstColor(hover)}
            onMouseLeave={() => setFirstColor(main)}
            style={firstColor}
            href="/"
          >
            Calendar
          </a>
        </li>
        <li>
          <a
            onMouseEnter={() => setSecondColor(hover)}
            onMouseLeave={() => setSecondColor(main)}
            style={secondColor}
            href="/sign-in"
          >
            Sign In
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
