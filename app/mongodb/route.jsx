import { Userchat } from "./model/userchat";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
const URI = process.env.MURI;

export async function GET() {
  await mongoose.connect(URI);
  let data = {};
  try {
    data = await Userchat.find();
  } catch (e) {
    data = { success: false };
  }

  return NextResponse.json({ result: data });
}

export async function POST(request) {
  const payload = await request.json()
  await mongoose.connect(URI);
  let postdata = new Userchat(payload);
  const result = await postdata.save();
  return NextResponse.json({ result, success: true });
}
