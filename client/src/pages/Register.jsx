import { Input, Label, Button, Heading } from "@medusajs/ui";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useState } from "react";
import { useAuthStore } from "../stores/auth";
const Register = () => {
  const register = useAuthStore((state) => state.register);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!email || !password || !name || !confirmPassword) {
      toast.error("All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    register({
      email,
      password,
      name,
      confirmPassword,
    })
      .then(() => {
        setLoading(false);
        toast.success("Account created successfully");
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
          <Heading>Welcome to Sprinter</Heading>
        </div>
        <div>
          <form>
            <div className="space-y-4">
              <div className="space-y-4">
                <Label>Name</Label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
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
                <Label>Create Password</Label>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="space-y-4">
                <Label>Confirm Password</Label>
                <Input
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="text-sm">
                Already have an account?{" "}
                <Link className="text-blue-600 underline" to="/login">
                  Login
                </Link>
              </div>
              <div className="space-y-4">
                <Button
                  isLoading={loading}
                  onClick={(e) => handleRegister(e)}
                  className="w-full"
                >
                  Register
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
