"use client";

import { Button, Card } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Public() {
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/signin");
  };

  const handleRegister = () => {
    router.push("/register");
  };

  return (
    <div>
      <h1 className="text-2xl text-center">Welcome to EasyCashier</h1>
      <h2 className="text-xl text-center">
        Simplify your store management and streamline your checkout process.
      </h2>
      <div className="max-w-lg">
        <Card className="px-10 py-6">
            <p>Why Choose EasyCashier?</p>
            <div>
              - Manage sales and inventory effortlessly. <br />
              - Quick checkout process for your customers. <br />- Analytics to
              track your store's performance.
            </div>
        </Card>
      </div>
    </div>
  );
}
