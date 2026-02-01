"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("Thank you! We will contact you within 48 hours.");
        setEmail("");
      } else {
        throw new Error("Failed to submit");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-slate-900">
            Clawdbot
          </Link>
          <div className="flex gap-6 text-sm">
            <Link href="/install" className="text-slate-600 hover:text-slate-900 transition">
              Install
            </Link>
            <Link href="/github" className="text-slate-600 hover:text-slate-900 transition">
              GitHub
            </Link>
            <Link href="/guide" className="text-slate-600 hover:text-slate-900 transition">
              Guide
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            clawdbot · clawbot · moltbot
          </Badge>
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Deploy <span className="text-blue-600">Clawdbot</span> to Your Cloud Server
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Professional clawdbot deployment service. We help you set up Claude AI chatbot
            (clawbot, moltbot) on your own cloud server. Fast, secure, and fully managed.
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
              disabled={status === "loading"}
            />
            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Submitting..." : "Get Started"}
            </Button>
          </form>
          {message && (
            <p className={`mt-3 text-sm ${status === "success" ? "text-green-600" : "text-red-600"}`}>
              {message}
            </p>
          )}
          <p className="text-sm text-slate-500 mt-3">
            We respond within 48 hours
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Why Choose Our Clawdbot Service?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">☁️</span> Cloud Deployment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We deploy clawdbot directly to your cloud server. Full control,
                  complete privacy. Compatible with AWS, Azure, GCP, and more.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">⚡</span> 48-Hour Setup
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Quick turnaround time. Submit your email, we contact you within 48 hours,
                  and your clawbot will be up and running shortly after payment.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🔒</span> Secure & Private
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Your data stays on your server. No third-party access.
                  Full ownership of your moltbot deployment.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            How It Works
          </h2>
          <div className="space-y-8">
            {[
              { step: "1", title: "Submit Your Email", desc: "Fill in the form above with your email address" },
              { step: "2", title: "We Contact You", desc: "Our team responds within 48 hours with deployment options" },
              { step: "3", title: "Complete Payment", desc: "Choose your plan and complete the payment process" },
              { step: "4", title: "Access Your Clawdbot", desc: "Receive login credentials and start using your clawdbot" },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Deploy Your Clawdbot?
          </h2>
          <p className="text-slate-300 mb-8">
            Join hundreds of users who have successfully deployed clawbot and moltbot on their servers.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Get Started Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-950 text-slate-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; 2025 Clawdbot. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/install" className="hover:text-white transition">
              Clawdbot Install
            </Link>
            <Link href="/github" className="hover:text-white transition">
              GitHub Clawdbot
            </Link>
            <Link href="/guide" className="hover:text-white transition">
              Clawdbot Guide
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
