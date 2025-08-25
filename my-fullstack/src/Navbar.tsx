import { Link } from "react-router-dom";
import { Button } from "./components/ui/button";
export function Navbar() {
  return (
    <>
      <div className="bg-blue-500 grid grid-flow-col justify-items-center">
        <Button>
          <Link to="/">Home</Link>
        </Button>
        <Button>
          <Link to="/page1">Page1</Link>
        </Button>
        <Button>
          <Link to="/page2">Page2</Link>
        </Button>
        <Button>
          <Link to="/page3">Page3</Link>
        </Button>
      </div>
    </>
  );
}
