import Layout from "@/components/Layout";

type Props = {
  params: {
    id: string;
  };
};

export default function ClassPage({ params: { id } }: Props) {
  return <Layout>Class Page, ID: {id}</Layout>;
}
