"use client";

import { request } from "http";
import { Router } from "next/router";
import { NextResponse } from "next/server";

export default function Home() {
  const hasAcc = localStorage.getItem("Acc");
  if (hasAcc == null) {
    return NextResponse.redirect(new URL("/login"));
  }
}
// <Image
//     width={2400}
//     height={1080}
//     alt="hello"
//     src="/Selection_001.png"
//     className="absolute"
// />
