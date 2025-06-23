// components/JoinNowCTA.tsx
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function JoinNowCTA() {
  return (
    <section className="bg-blue-50 py-10 px-4 text-center mt-12">
      <h3 className="text-2xl font-semibold mb-4">Are you an Artist? Join Artistly Today!</h3>
      <p className="text-gray-600 mb-6">Start receiving booking leads and manage your performances.</p>
      <Link href="/onboarding">
        <Button className="bg-blue-600 text-white hover:bg-blue-700">
          Get Started
        </Button>
      </Link>
    </section>
  );
}
