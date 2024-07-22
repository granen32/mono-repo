
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "leferi default title",
  description: "default leferi",
};

export default function Page() {
  return <main><Link href="/test">test</Link></main>;
}