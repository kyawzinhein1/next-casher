"use client";

import { Card, Input, Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type LoginErrors = {
  email?: string;
  password?: string;
};

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<LoginErrors>({});

  const handleLogin = () => {
    const newError: LoginErrors = {};

    if (!email) newError.email = "Email is required.";
    if (!password) newError.password = "Password is required.";

    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }
    setError({});

    if (email === "admin@gmail.com" && password === "admin123") {
      router.push("/admin/dashboard");
    } else {
      router.push("/casher/dashboard");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card style={{ padding: "24px", maxWidth: "400px", width: "100%" }}>
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <h1 className="text-xl">Welcome to Casher</h1>
        </div>
        <div style={{ marginBottom: "16px" }}>
          <label>Email</label>
          <Input
            fullWidth
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error.email && <span className="text-xs text-red-600">{error.email}</span>}
        </div>
        <div style={{ marginBottom: "16px" }}>
          <label>Password</label>
          <Input
            fullWidth
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error.password && <span className="text-xs text-red-600">{error.password}</span>}

        </div>
        <Button fullWidth color="primary" onClick={handleLogin}>
          Login
        </Button>
        <div style={{ textAlign: "center", marginTop: "16px" }}>
          <p className="text-gray-500">
            Don't have an account? <Link href="/register">Register here</Link>.
          </p>
        </div>
      </Card>
    </div>
  );
}
