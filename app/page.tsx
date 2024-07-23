
import type { Metadata } from "next";
import Link from "next/link";
import Login from "@/app/components/common/Login";

export const metadata: Metadata = {
  title: "leferi default title",
  description: "default leferi",
};

export default function Page() {
  return <main><Login/></main>;
}