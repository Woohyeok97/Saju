import { NextResponse } from "next/server";
import SajuData from '@/db/saju.json'

export async function GET() {
  return NextResponse.json(SajuData)
}