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
    title: "Analyse my health report",
    summary: "If you have any general health-related questions or concerns ",
    messages:{"sender":"Analyse my health report" ,
     "AI" :" If you have any general health-related questions or concerns, feel free to ask, and I'll do my best to provide helpful information based on publicly available knowledge. However, please remember that my responses are not a substitute for professional medical advice, diagnosis, or treatment.",
     "sender":"yes i am having mood swings",
     "AI":"Mood swings can be caused by various factors, including stress, hormonal changes, lack of sleep, diet, underlying health conditions, and life events."
    }
  });
  const result = await postdata.save();
  return NextResponse.json({ result, success: true });
}
