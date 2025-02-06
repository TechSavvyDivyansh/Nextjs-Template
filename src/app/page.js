"use client"

import Image from "next/image";
import { usemyHackContext } from "@/context";
import Form from "@/components/Form";

export default function Home() {
  const {mydata}=usemyHackContext()
  return (
    <div>
      <h1 className="font-mycustom">{mydata}</h1>
      <Form/>
    </div>
  );
}
