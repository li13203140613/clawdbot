import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Clawdbot Install - Installation & Configuration Guide | clawdbot 安装",
  description: "Complete guide for clawdbot installation, openclaw setup, and configuration. Learn how to deploy clawdbot on your server. Clawdbot 安装, openclaw 安装, clawdbot 配置, openclaw 配置, clawdbot 部署.",
  keywords: ["clawdbot 安装", "openclaw 安装", "clawdbot 配置", "openclaw 配置", "clawdbot 部署", "clawdbot install", "clawdbot setup"],
};

export default function InstallPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-slate-900">
            Clawdbot
          </Link>
          <div className="flex gap-6 text-sm">
            <Link href="/install" className="text-blue-600 font-medium">
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

      {/* Hero */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            clawdbot 安装 · openclaw 安装 · clawdbot 配置
          </Badge>
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            Clawdbot Installation & Configuration
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Professional clawdbot 安装 service. We handle the entire openclaw 配置 and
            clawdbot 部署 process for you. No technical expertise required.
          </p>
        </div>
      </section>

      {/* Installation Options */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Clawdbot 安装 Options
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-200 transition">
              <CardHeader>
                <CardTitle>Basic Setup</CardTitle>
                <CardDescription>Perfect for individuals</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>✓ Clawdbot 安装 on your server</li>
                  <li>✓ Basic openclaw 配置</li>
                  <li>✓ Single user access</li>
                  <li>✓ Email support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500 shadow-lg">
              <CardHeader>
                <Badge className="w-fit mb-2">Popular</Badge>
                <CardTitle>Professional</CardTitle>
                <CardDescription>Best for teams</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>✓ Full clawdbot 部署</li>
                  <li>✓ Advanced openclaw 安装</li>
                  <li>✓ Multi-user support</li>
                  <li>✓ Priority support</li>
                  <li>✓ Custom configuration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For large organizations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>✓ Enterprise clawdbot 配置</li>
                  <li>✓ High availability setup</li>
                  <li>✓ Unlimited users</li>
                  <li>✓ 24/7 support</li>
                  <li>✓ SLA guarantee</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Our Clawdbot 部署 Process
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Server Preparation",
                desc: "We prepare your cloud server for clawdbot 安装, ensuring all requirements are met."
              },
              {
                step: "2",
                title: "Openclaw Installation",
                desc: "Complete openclaw 安装 with all necessary dependencies and configurations."
              },
              {
                step: "3",
                title: "Clawdbot Configuration",
                desc: "Detailed clawdbot 配置 tailored to your specific needs and use cases."
              },
              {
                step: "4",
                title: "Testing & Deployment",
                desc: "Thorough testing of your clawdbot 部署 before handing over access."
              },
              {
                step: "5",
                title: "Handover & Support",
                desc: "Receive login credentials and documentation for your openclaw 配置."
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start p-4 rounded-lg hover:bg-slate-50 transition">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shrink-0">
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

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready for Clawdbot 安装?
          </h2>
          <p className="text-slate-600 mb-8">
            Let us handle the openclaw 配置 and clawdbot 部署 for you.
          </p>
          <Link href="/">
            <Button size="lg">Get Started</Button>
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
