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
        setMessage("Thank you! We'll deploy your Clawdbot within 24 hours and send login details to your email.");
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
              DIY Install
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
          <Badge variant="secondary" className="mb-4 text-base px-4 py-1">
            clawdbot · clawbot · moltbot
          </Badge>
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Your Personal AI Assistant<br />
            <span className="text-blue-600">That Actually Does Things</span>
          </h1>
          <p className="text-xl text-slate-600 mb-4 max-w-2xl mx-auto">
            <strong>Clawdbot</strong> is essentially a &quot;Claude with hands&quot; — an AI that doesn&apos;t just chat but actually does things.
          </p>
          <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
            Connect WhatsApp, Telegram, Discord. Manage emails, calendars, smart home.
            Execute commands, write code, automate tasks. With persistent memory.
          </p>
        </div>
      </section>

      {/* Two Options Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">
            Choose Your Path
          </h2>
          <p className="text-center text-slate-500 mb-12">
            Get Clawdbot running on your own cloud server
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* PAID OPTION - Simple & Clean */}
            <Card className="border-2 border-blue-500 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-medium">
                RECOMMENDED
              </div>
              <CardHeader className="pt-8">
                <CardTitle className="text-2xl flex items-center gap-2">
                  Done For You
                </CardTitle>
                <CardDescription className="text-base">
                  We handle everything. You just use it.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-4xl font-bold text-slate-900">
                  $99<span className="text-lg font-normal text-slate-500">/month</span>
                </div>

                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    We deploy Clawdbot on your cloud server
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    Ready within 24 hours
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    Login credentials sent to your email
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    Full technical support included
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    Updates & maintenance handled
                  </li>
                </ul>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12"
                    disabled={status === "loading"}
                  />
                  <Button type="submit" className="w-full h-12 text-lg" disabled={status === "loading"}>
                    {status === "loading" ? "Submitting..." : "Get Started - $99/month"}
                  </Button>
                </form>
                {message && (
                  <p className={`text-sm ${status === "success" ? "text-green-600" : "text-red-600"}`}>
                    {message}
                  </p>
                )}
                <p className="text-sm text-slate-500 text-center">
                  We&apos;ll contact you within 24 hours
                </p>
              </CardContent>
            </Card>

            {/* FREE OPTION - Intentionally Scary */}
            <Card className="border border-slate-200 bg-slate-50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-slate-700">
                  DIY Installation
                  <Badge variant="outline" className="ml-2">Free</Badge>
                </CardTitle>
                <CardDescription className="text-base">
                  Install it yourself. Requires technical knowledge.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-slate-500 space-y-3 font-mono bg-slate-100 p-4 rounded-lg border">
                  <p className="font-semibold text-slate-700">Prerequisites:</p>
                  <ul className="space-y-1 text-xs">
                    <li>• Node.js v18+ with npm package manager</li>
                    <li>• Git CLI installed and configured</li>
                    <li>• Understanding of MCP (Model Context Protocol)</li>
                    <li>• SSH access to your VPS/cloud server</li>
                    <li>• Basic knowledge of Linux terminal commands</li>
                  </ul>

                  <p className="font-semibold text-slate-700 mt-4">Installation Steps:</p>
                  <div className="text-xs space-y-2 text-slate-600">
                    <p>1. Clone repository via <code className="bg-slate-200 px-1">git clone</code></p>
                    <p>2. Run <code className="bg-slate-200 px-1">npm install --legacy-peer-deps</code></p>
                    <p>3. Configure <code className="bg-slate-200 px-1">claude_desktop_config.json</code></p>
                    <p>4. Set up MCP server with stdio transport</p>
                    <p>5. Configure environment variables:</p>
                    <p className="pl-4">- ANTHROPIC_API_KEY</p>
                    <p className="pl-4">- DATABASE_URL (PostgreSQL)</p>
                    <p className="pl-4">- REDIS_URL for session management</p>
                    <p className="pl-4">- WEBHOOK_SECRET for integrations</p>
                    <p>6. Initialize database with <code className="bg-slate-200 px-1">npx prisma migrate deploy</code></p>
                    <p>7. Build production bundle: <code className="bg-slate-200 px-1">npm run build</code></p>
                    <p>8. Configure systemd service for process management</p>
                    <p>9. Set up Nginx reverse proxy with SSL</p>
                    <p>10. Configure firewall rules (ufw/iptables)</p>
                  </div>
                </div>

                <div className="pt-4">
                  <Link href="/install">
                    <Button variant="outline" className="w-full">
                      View Full Technical Guide
                    </Button>
                  </Link>
                </div>

                <p className="text-xs text-slate-400 text-center">
                  Average setup time: 2-4 hours (for experienced developers)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What is Clawdbot */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            What Can Clawdbot Do?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "💬", title: "Connect Messaging Apps", desc: "WhatsApp, Telegram, Discord, WeChat — all in one AI assistant" },
              { icon: "📧", title: "Manage Email & Calendar", desc: "Read, reply, schedule meetings automatically" },
              { icon: "🏠", title: "Control Smart Home", desc: "Lights, thermostat, security — voice or text commands" },
              { icon: "💻", title: "Execute Commands", desc: "Run terminal commands, write and debug code" },
              { icon: "🧠", title: "Persistent Memory", desc: "Unlike ChatGPT, Clawdbot remembers everything" },
              { icon: "🔒", title: "Self-Hosted & Private", desc: "Your data stays on YOUR server. Complete privacy." },
            ].map((feature, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-lg hover:bg-slate-50 transition">
                <span className="text-3xl">{feature.icon}</span>
                <div>
                  <h3 className="font-semibold text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - Customer Questions */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Real Questions From Our Customers
          </h2>
          <p className="text-slate-400 mb-12">
            This is why people choose our &quot;Done For You&quot; service
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              '"What is API?"',
              '"Who is Claude?"',
              '"What is a server?"',
              '"Is npm a virus?"',
              '"Who is root?"',
              '"Just take my money!"',
            ].map((quote, i) => (
              <div key={i} className="bg-slate-800 p-4 rounded-lg">
                <p className="text-slate-300 italic">{quote}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-xl text-slate-300">
            If these questions sound familiar, the <strong>$99/month</strong> option is for you.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready for Your Own AI Assistant?
          </h2>
          <p className="text-slate-600 mb-8">
            Join hundreds of users who chose convenience over complexity.
          </p>
          <Button
            size="lg"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Get Clawdbot - $99/month
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-950 text-slate-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; 2025 Clawdbot. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/install" className="hover:text-white transition">
              DIY Install
            </Link>
            <Link href="/github" className="hover:text-white transition">
              GitHub Clawdbot
            </Link>
            <Link href="/guide" className="hover:text-white transition">
              User Guide
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
