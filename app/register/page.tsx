import { Card, Input, Button } from "@nextui-org/react";

export default function RegisterPage() {
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
          <h3>Create an Account</h3>
        </div>
        <div style={{ marginBottom: "16px" }}>
          <Input
            fullWidth
            label="Full Name"
            placeholder="Enter your full name"
          />
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
            placeholder="Create a password"
            type="password"
          />
        </div>
        <div style={{ marginBottom: "16px" }}>
          <Input
            fullWidth
            label="Confirm Password"
            placeholder="Confirm your password"
            type="password"
          />
        </div>
        <Button fullWidth color="success">
          Register
        </Button>
        <div style={{ textAlign: "center", marginTop: "16px" }}>
          <p>
            Already have an account? <a href="/login">Login here</a>.
          </p>
        </div>
      </Card>
    </div>
  );
}
