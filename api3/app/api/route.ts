import { NextResponse } from "next/server";
import { db } from "@/lib/Database/DbConnection";

export async function GET() {
  try {
    const rows = db.prepare("SELECT * FROM RespostasClienteQuestionario").all();
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}