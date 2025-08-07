import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/page1">Page1</Link>
      <Link to="/page2">Page2</Link>
      <Link to="/page3">Page3</Link>
    </>
  );
}
