import { Input, Label, Button, Heading } from "@medusajs/ui";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useState } from "react";
import { useAuthStore } from "../stores/auth";
const Login = () => {
  const login = useAuthStore((state) => state.login);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }
    login({
      email,
      password,
    })
      .then(() => {
        setLoading(false);
        toast.success("Logged in successfully");
        window.location.reload();
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md px-4 py-10 space-y-4 border rounded-md">
        <div className="space-y-4 text-center">
          <h2 className="font-mono text-4xl font-semibold text-center">
            Sprinter.
          </h2>
          <Heading>Welcome back to Sprinter</Heading>
        </div>
        <div>
          <form>
            <div className="space-y-4">
              <div className="space-y-4">
                <Label>Email</Label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="space-y-4">
                <Label>Password</Label>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="text-sm">
                Don't have an account yet?{" "}
                <Link className="text-blue-600 underline" to="/register">
                  Register
                </Link>
              </div>
              <div className="space-y-4">
                <Button
                  isLoading={loading}
                  onClick={(e) => handleLogin(e)}
                  className="w-full"
                >
                  Login
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
