"use client";

import { useState } from "react";
import { Button } from "./button";

interface ContactButtonProps {
  email: string;
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

export function ContactButton({ email, children, className, size, variant }: ContactButtonProps) {
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <Button
        className={className}
        size={size}
        variant={variant}
        onClick={() => setShowModal(true)}
      >
        {children}
      </Button>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Contact Us
            </h3>
            <p className="text-slate-600 mb-4">
              Send us an email and we&apos;ll get back to you within 24 hours.
            </p>

            <div className="bg-slate-100 rounded-lg p-4 mb-4">
              <p className="text-sm text-slate-500 mb-1">Email Address:</p>
              <p className="text-lg font-mono font-semibold text-slate-900 break-all">
                {email}
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                className="flex-1"
                onClick={handleCopy}
              >
                {copied ? "Copied!" : "Copy Email"}
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setShowModal(false)}
              >
                Close
              </Button>
            </div>

            <p className="text-xs text-slate-400 text-center mt-4">
              Subject: Clawdbot Deployment Request
            </p>
          </div>
        </div>
      )}
    </>
  );
}
