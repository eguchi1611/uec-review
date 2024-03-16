"use client";

import { Layout } from "@/components/Layout";

export default function Error({ error }: { error: unknown }) {
  console.error(error);
  return <Layout>不明なエラーが発生しました</Layout>;
}
