import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "contacts.json");

interface Contact {
  email: string;
  timestamp: string;
  ip?: string;
}

async function ensureDataFile() {
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    await fs.writeFile(DATA_FILE, JSON.stringify([], null, 2));
  }
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    await ensureDataFile();

    const data = await fs.readFile(DATA_FILE, "utf-8");
    const contacts: Contact[] = JSON.parse(data);

    const newContact: Contact = {
      email,
      timestamp: new Date().toISOString(),
    };

    contacts.push(newContact);

    await fs.writeFile(DATA_FILE, JSON.stringify(contacts, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json(
      { error: "Failed to save contact" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await ensureDataFile();
    const data = await fs.readFile(DATA_FILE, "utf-8");
    const contacts: Contact[] = JSON.parse(data);
    return NextResponse.json(contacts);
  } catch (error) {
    console.error("Error reading contacts:", error);
    return NextResponse.json(
      { error: "Failed to read contacts" },
      { status: 500 }
    );
  }
}
