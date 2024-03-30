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

export async function POST() {
  await mongoose.connect(URI);
  let postdata = new Userchat({
    imageid: "2.png",
    title: "Suggest when to visit doctor",
    summary: "Knowing when to visit a doctor depends on various factors ",
  });
  const result = await postdata.save();
  return NextResponse.json({ result, success: true });
}
