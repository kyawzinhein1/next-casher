"use client";

import { Card, Input, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/admin");
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
          <h3>Login to EasyCashier</h3>
        </div>
        <div style={{ marginBottom: "16px" }}>
          <Input
            fullWidth
            label="Email"
            placeholder="Enter your email"
            type="email"
          />
        </div>
        <div style={{ marginBottom: "16px" }}>
          <Input
            fullWidth
            label="Password"
            placeholder="Enter your password"
            type="password"
          />
        </div>
        <Button fullWidth color="primary" onClick={handleLogin}>
          Login
        </Button>
        <div style={{ textAlign: "center", marginTop: "16px" }}>
          <p>
            Don't have an account? <a href="/register">Register here</a>.
          </p>
        </div>
      </Card>
    </div>
  );
}
