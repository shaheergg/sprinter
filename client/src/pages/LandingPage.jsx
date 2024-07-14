import { ArrowPath, ArrowRightMini, ArrrowRight } from "@medusajs/icons";
import { Button } from "@medusajs/ui";
import { Link, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const navigator = (key) => {
    navigate(key);
  };
  return (
    <div>
      <nav className="flex items-center justify-between p-4 border-b">
        <div>
          <h2 className="font-mono text-2xl font-semibold">Sprinter.</h2>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="secondary" onClick={() => navigator("/login")}>
            Login
          </Button>
          <Button onClick={() => navigator("/register")}>Register</Button>
        </div>
      </nav>
      <div className="max-w-5xl space-y-4 mx-auto min-h-[90vh] w-full flex flex-col items-center justify-center">
        <h2 className="font-mono text-6xl font-semibold text-center">
          Sprinter is a purpose-built tool for planning and building products
        </h2>
        <p className="max-w-2xl font-mono text-lg text-center text-gray-600">
          Meet the system for modern product development. Streamline issues,
          projects, and product roadmaps.
        </p>
        <div className="flex items-center gap-4">
          <Button onClick={() => navigator("/register")}>Start Building</Button>
          <Button variant="transparent" onClick={() => navigator("/register")}>
            Introducing Roadmaps
            <ArrowRightMini />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
