import Layout from "@/components/Layout";

type Props = {
  params: {
    id: string;
  };
};

export default function ReviewPage({ params: { id } }: Props) {
  return <Layout>review {id}</Layout>;
}
