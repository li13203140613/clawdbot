import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Clawdbot Install Guide - DIY Installation | clawdbot 安装",
  description: "Complete technical guide for clawdbot installation. Learn how to install clawdbot, openclaw setup, and configuration. Requires Node.js, npm, MCP, CLI knowledge. Clawdbot 安装, openclaw 安装, clawdbot 配置.",
  keywords: ["clawdbot 安装", "openclaw 安装", "clawdbot 配置", "openclaw 配置", "clawdbot 部署", "clawdbot install", "clawdbot setup", "mcp server"],
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

      {/* Warning Banner */}
      <div className="bg-amber-50 border-b border-amber-200 py-3 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 text-amber-800 text-sm">
          <span>⚠️</span>
          <span>This guide requires advanced technical knowledge. Average setup time: 2-4 hours.</span>
          <Link href="/" className="underline font-medium ml-2">
            Or let us do it for $99/month →
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            clawdbot 安装 · openclaw 安装 · clawdbot 配置
          </Badge>
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            Clawdbot DIY Installation Guide
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Complete technical documentation for self-hosting clawdbot on your own infrastructure.
            This guide assumes familiarity with Linux, Node.js, and server administration.
          </p>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-800 flex items-center gap-2">
                <span>🛑</span> Prerequisites Checklist
              </CardTitle>
            </CardHeader>
            <CardContent className="text-red-900">
              <p className="mb-4 font-medium">Before proceeding, ensure you have:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span>□</span>
                  <span><strong>Node.js v18.0+</strong> installed with npm package manager (verify with <code className="bg-red-100 px-1 rounded">node -v</code> and <code className="bg-red-100 px-1 rounded">npm -v</code>)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>□</span>
                  <span><strong>Git CLI</strong> installed and configured with SSH keys for GitHub authentication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>□</span>
                  <span><strong>VPS or Cloud Server</strong> with root/sudo access (Ubuntu 22.04 LTS recommended, minimum 2GB RAM)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>□</span>
                  <span><strong>Domain name</strong> with DNS A record pointing to your server IP address</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>□</span>
                  <span><strong>PostgreSQL 14+</strong> database instance (local or managed like Neon, Supabase)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>□</span>
                  <span><strong>Redis 6+</strong> for session management and caching</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>□</span>
                  <span><strong>Anthropic API Key</strong> with sufficient credits for Claude API access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>□</span>
                  <span>Understanding of <strong>MCP (Model Context Protocol)</strong> architecture and stdio transport</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Installation Steps
          </h2>

          {/* Step 1 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Step 1: Server Preparation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 text-sm">SSH into your server and update system packages:</p>
              <pre className="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
{`ssh root@your-server-ip

# Update system packages
sudo apt update && sudo apt upgrade -y

# Install required dependencies
sudo apt install -y curl wget git build-essential

# Install Node.js 18 via NodeSource
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installation
node -v  # Should output v18.x.x
npm -v   # Should output 9.x.x or higher`}
              </pre>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Step 2: Install PostgreSQL & Redis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 text-sm">Set up database and caching services:</p>
              <pre className="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
{`# Install PostgreSQL
sudo apt install -y postgresql postgresql-contrib

# Start PostgreSQL service
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Create database and user
sudo -u postgres psql << EOF
CREATE USER clawdbot WITH PASSWORD 'your_secure_password';
CREATE DATABASE clawdbot_db OWNER clawdbot;
GRANT ALL PRIVILEGES ON DATABASE clawdbot_db TO clawdbot;
EOF

# Install Redis
sudo apt install -y redis-server

# Configure Redis for production
sudo sed -i 's/supervised no/supervised systemd/' /etc/redis/redis.conf
sudo systemctl restart redis
sudo systemctl enable redis

# Verify Redis is running
redis-cli ping  # Should return PONG`}
              </pre>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Step 3: Clone and Configure Clawdbot</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 text-sm">Clone the repository and set up environment variables:</p>
              <pre className="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
{`# Clone the repository
cd /opt
sudo git clone https://github.com/clawdbot/clawdbot.git
cd clawdbot

# Install dependencies (may take several minutes)
npm install --legacy-peer-deps

# Create environment configuration
cp .env.example .env
nano .env`}
              </pre>
              <p className="text-slate-600 text-sm mt-4">Configure the following environment variables in <code className="bg-slate-100 px-1 rounded">.env</code>:</p>
              <pre className="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
{`# Required API Keys
ANTHROPIC_API_KEY=sk-ant-api03-xxxxxxxxxxxxx

# Database Configuration
DATABASE_URL=postgresql://clawdbot:your_secure_password@localhost:5432/clawdbot_db

# Redis Configuration
REDIS_URL=redis://localhost:6379

# MCP Server Configuration
MCP_TRANSPORT=stdio
MCP_SERVER_PORT=3100

# Security
JWT_SECRET=generate_a_64_character_random_string_here
ENCRYPTION_KEY=generate_another_32_character_string

# Optional: Integration Keys
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
DISCORD_BOT_TOKEN=your_discord_bot_token
WHATSAPP_API_KEY=your_whatsapp_business_api_key

# Server Configuration
NODE_ENV=production
PORT=3000`}
              </pre>
            </CardContent>
          </Card>

          {/* Step 4 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Step 4: Configure MCP (Model Context Protocol)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 text-sm">Set up the MCP server configuration for Claude integration:</p>
              <pre className="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
{`# Create MCP configuration directory
mkdir -p ~/.config/clawdbot

# Create claude_desktop_config.json
cat > ~/.config/clawdbot/claude_desktop_config.json << 'EOF'
{
  "mcpServers": {
    "clawdbot": {
      "command": "node",
      "args": ["/opt/clawdbot/dist/mcp-server.js"],
      "transport": "stdio",
      "env": {
        "NODE_ENV": "production",
        "LOG_LEVEL": "info"
      }
    }
  },
  "globalShortcut": "Ctrl+Shift+Space",
  "theme": "system"
}
EOF

# Set proper permissions
chmod 600 ~/.config/clawdbot/claude_desktop_config.json`}
              </pre>
            </CardContent>
          </Card>

          {/* Step 5 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Step 5: Database Migration & Build</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 text-sm">Initialize database schema and build production assets:</p>
              <pre className="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
{`# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate deploy

# Build production bundle
npm run build

# Verify build output
ls -la dist/  # Should contain compiled JavaScript files`}
              </pre>
            </CardContent>
          </Card>

          {/* Step 6 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Step 6: Configure systemd Service</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 text-sm">Create a systemd service for automatic startup and process management:</p>
              <pre className="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
{`# Create systemd service file
sudo cat > /etc/systemd/system/clawdbot.service << 'EOF'
[Unit]
Description=Clawdbot AI Assistant
After=network.target postgresql.service redis.service

[Service]
Type=simple
User=root
WorkingDirectory=/opt/clawdbot
ExecStart=/usr/bin/node dist/server.js
Restart=on-failure
RestartSec=10
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=clawdbot
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
EOF

# Reload systemd and start service
sudo systemctl daemon-reload
sudo systemctl enable clawdbot
sudo systemctl start clawdbot

# Check service status
sudo systemctl status clawdbot`}
              </pre>
            </CardContent>
          </Card>

          {/* Step 7 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Step 7: Configure Nginx Reverse Proxy with SSL</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 text-sm">Set up Nginx as reverse proxy with Let&apos;s Encrypt SSL certificate:</p>
              <pre className="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
{`# Install Nginx and Certbot
sudo apt install -y nginx certbot python3-certbot-nginx

# Create Nginx configuration
sudo cat > /etc/nginx/sites-available/clawdbot << 'EOF'
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

# Enable site and remove default
sudo ln -s /etc/nginx/sites-available/clawdbot /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default

# Test and reload Nginx
sudo nginx -t
sudo systemctl reload nginx

# Obtain SSL certificate
sudo certbot --nginx -d your-domain.com --non-interactive --agree-tos -m your@email.com`}
              </pre>
            </CardContent>
          </Card>

          {/* Step 8 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Step 8: Configure Firewall</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 text-sm">Secure your server with UFW firewall rules:</p>
              <pre className="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
{`# Enable UFW firewall
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Allow SSH (important: don't lock yourself out!)
sudo ufw allow ssh

# Allow HTTP and HTTPS
sudo ufw allow 'Nginx Full'

# Enable firewall
sudo ufw enable

# Verify rules
sudo ufw status verbose`}
              </pre>
            </CardContent>
          </Card>

          {/* Step 9 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Step 9: Verify Installation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 text-sm">Test your clawdbot installation:</p>
              <pre className="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
{`# Check all services are running
sudo systemctl status clawdbot
sudo systemctl status nginx
sudo systemctl status postgresql
sudo systemctl status redis

# Test API endpoint
curl -X GET https://your-domain.com/api/health

# Check logs for any errors
sudo journalctl -u clawdbot -f`}
              </pre>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-800">Common Issues & Troubleshooting</CardTitle>
            </CardHeader>
            <CardContent className="text-amber-900 text-sm space-y-4">
              <div>
                <p className="font-semibold">Error: EACCES permission denied</p>
                <p className="text-amber-700">Fix: Run <code className="bg-amber-100 px-1 rounded">sudo chown -R $USER:$USER /opt/clawdbot</code></p>
              </div>
              <div>
                <p className="font-semibold">Error: Cannot connect to PostgreSQL</p>
                <p className="text-amber-700">Fix: Check DATABASE_URL format and ensure PostgreSQL is running with <code className="bg-amber-100 px-1 rounded">sudo systemctl status postgresql</code></p>
              </div>
              <div>
                <p className="font-semibold">Error: MCP server failed to start</p>
                <p className="text-amber-700">Fix: Verify claude_desktop_config.json syntax and file permissions</p>
              </div>
              <div>
                <p className="font-semibold">Error: npm install fails with ERESOLVE</p>
                <p className="text-amber-700">Fix: Use <code className="bg-amber-100 px-1 rounded">npm install --legacy-peer-deps</code> flag</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Too Complicated?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Skip all these steps. We&apos;ll deploy Clawdbot for you in 24 hours.
          </p>
          <Link href="/">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Get It Done For $99/month
            </Button>
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
