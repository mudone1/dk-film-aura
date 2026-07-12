import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "data", "projects.json");

export async function GET() {
  const raw = await fs.readFile(DATA_PATH, "utf-8");
  const data = JSON.parse(raw);
  return NextResponse.json(data);
}

// Simple content-update endpoint. On Vercel's serverless filesystem this
// write is ephemeral (resets on redeploy) — swap this for Firestore/a DB
// once you're ready to manage content from a live admin panel.
export async function POST(req: NextRequest) {
  const body = await req.json();

  if (!body?.projects || !Array.isArray(body.projects)) {
    return NextResponse.json(
      { error: "Expected a { projects: [...] } payload" },
      { status: 400 }
    );
  }

  await fs.writeFile(DATA_PATH, JSON.stringify(body, null, 2), "utf-8");
  return NextResponse.json({ ok: true, count: body.projects.length });
}
