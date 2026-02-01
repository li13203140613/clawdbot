import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Clawdbot Guide - How to Use Clawdbot | clawdbot 使用",
  description: "Complete guide on how to use clawdbot. Learn clawdbot 使用 tips, clawdbot mac setup, and best practices. Get the most out of your clawdbot deployment.",
  keywords: ["clawdbot 使用", "clawdbot mac", "clawdbot guide", "how to use clawdbot", "clawdbot tutorial", "clawdbot tips"],
};

export default function GuidePage() {
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
            <Link href="/guide" className="text-blue-600 font-medium">
              Guide
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            clawdbot 使用 · clawdbot mac · clawdbot guide
          </Badge>
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            Clawdbot User Guide
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Learn how to use clawdbot effectively. This guide covers clawdbot 使用
            basics, clawdbot mac setup, and advanced features.
          </p>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Clawdbot 使用 Guide
          </h2>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Accessing Your Clawdbot</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base space-y-2">
                  <p>After we complete your clawdbot 使用 setup, you will receive:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Login URL for your clawdbot instance</li>
                    <li>Username and password credentials</li>
                    <li>API key (if applicable)</li>
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Clawdbot Mac Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base space-y-2">
                  <p>For clawdbot mac users, follow these steps:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Open your preferred browser on Mac</li>
                    <li>Navigate to your clawdbot URL</li>
                    <li>Bookmark for easy access to clawdbot 使用</li>
                    <li>Optional: Add to Dock for quick launch</li>
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Basic Clawdbot 使用</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base space-y-2">
                  <p>Essential clawdbot 使用 tips:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Type your questions naturally</li>
                    <li>Use clear and specific prompts</li>
                    <li>Break complex tasks into smaller requests</li>
                    <li>Review and refine responses as needed</li>
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Advanced Features</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base space-y-2">
                  <p>Advanced clawdbot 使用 capabilities:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Code generation and review</li>
                    <li>Document analysis</li>
                    <li>Multi-turn conversations</li>
                    <li>Custom integrations</li>
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Guides */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Platform-Specific Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🍎</span> Clawdbot Mac
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Optimized clawdbot mac experience. Works seamlessly with Safari,
                  Chrome, and other macOS browsers. Full clawdbot 使用 support.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🪟</span> Clawdbot Windows
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Full Windows compatibility. Access clawdbot 使用 through
                  any modern browser. Same powerful features as clawdbot mac.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">📱</span> Clawdbot Mobile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Access clawdbot 使用 on the go. Responsive design works
                  perfectly on iOS and Android devices.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Clawdbot 使用 Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Be Specific", desc: "Clear prompts get better results from clawdbot 使用" },
              { title: "Use Context", desc: "Provide background information for accurate responses" },
              { title: "Iterate", desc: "Refine your requests based on initial clawdbot answers" },
              { title: "Save Favorites", desc: "Bookmark useful clawdbot 使用 conversations" },
              { title: "Regular Use", desc: "The more you use clawdbot, the better you understand it" },
              { title: "Explore Features", desc: "Try different clawdbot 使用 scenarios" },
            ].map((tip, i) => (
              <div key={i} className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-1">{tip.title}</h3>
                <p className="text-sm text-slate-600">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Using Clawdbot?
          </h2>
          <p className="text-slate-300 mb-8">
            Get your own clawdbot 使用 instance deployed today.
          </p>
          <Link href="/">
            <Button size="lg" variant="secondary">Get Started</Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-950 text-slate-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; 2025 Clawdbot. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/install" className="hover:text-white transition">
              Clawdbot 安装
            </Link>
            <Link href="/github" className="hover:text-white transition">
              GitHub Clawdbot
            </Link>
            <Link href="/guide" className="hover:text-white transition">
              Clawdbot 使用
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
