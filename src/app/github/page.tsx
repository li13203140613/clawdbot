import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "GitHub Clawdbot - Deploy from GitHub | clawdbot github",
  description: "Deploy clawdbot from GitHub to your cloud server. Professional github clawdbot deployment service. Openclaw github setup and moltbot openclaw integration made easy.",
  keywords: ["github clawdbot", "clawdbot github", "openclaw github", "moltbot openclaw", "clawdbot deployment", "github deployment"],
};

export default function GitHubPage() {
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
            <Link href="/github" className="text-blue-600 font-medium">
              GitHub
            </Link>
            <Link href="/guide" className="text-slate-600 hover:text-slate-900 transition">
              Guide
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            github clawdbot · clawdbot github · openclaw github
          </Badge>
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            GitHub Clawdbot Deployment
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Deploy clawdbot github repository directly to your cloud server.
            Professional openclaw github setup and moltbot openclaw integration.
          </p>
        </div>
      </section>

      {/* GitHub Integration */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Clawdbot GitHub Integration
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🔗</span> GitHub Clawdbot
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We clone and deploy the clawdbot github repository to your server.
                  Always up-to-date with the latest features from openclaw github.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🔄</span> Auto Updates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Configure automatic updates from github clawdbot repository.
                  Stay current with moltbot openclaw improvements.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🛡️</span> Secure Deployment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Secure clawdbot github deployment with proper access controls.
                  Your openclaw github instance remains private and protected.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">⚙️</span> Custom Configuration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Customize your github clawdbot deployment settings.
                  Tailor moltbot openclaw to your specific requirements.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Deployment Steps */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            GitHub Clawdbot Deployment Process
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Repository Setup",
                desc: "We access the clawdbot github repository and prepare it for deployment."
              },
              {
                step: "2",
                title: "Server Configuration",
                desc: "Configure your server to host the openclaw github application securely."
              },
              {
                step: "3",
                title: "Moltbot Integration",
                desc: "Set up moltbot openclaw components and dependencies on your server."
              },
              {
                step: "4",
                title: "Environment Setup",
                desc: "Configure environment variables for your github clawdbot instance."
              },
              {
                step: "5",
                title: "Launch & Verify",
                desc: "Launch your clawdbot github deployment and verify everything works correctly."
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start p-4 rounded-lg hover:bg-slate-50 transition">
                <div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            GitHub Clawdbot FAQ
          </h2>
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-2">
                What is github clawdbot?
              </h3>
              <p className="text-slate-600">
                GitHub clawdbot is the official repository for the clawdbot AI chatbot.
                We deploy this clawdbot github code to your own server for private use.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-2">
                How does openclaw github work?
              </h3>
              <p className="text-slate-600">
                Openclaw github provides the core functionality. We handle the entire
                openclaw github setup so you can focus on using the AI assistant.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-2">
                What is moltbot openclaw?
              </h3>
              <p className="text-slate-600">
                Moltbot openclaw is an alternative name for the same technology.
                Our service supports all variations including moltbot and openclaw deployments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for GitHub Clawdbot Deployment?
          </h2>
          <p className="text-slate-300 mb-8">
            Let us deploy clawdbot github to your server today.
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
