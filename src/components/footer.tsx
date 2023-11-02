import React from "react";

export default function Footer() {
  return (
    <footer className="px-4 text-center text-gray-50 bg-black p-12 ">
      <small className="mb-2 block text-md">
        &copy; 2023 ElianisDev. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
