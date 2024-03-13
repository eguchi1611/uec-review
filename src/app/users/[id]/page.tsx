import Layout from "@/components/Layout";

type Props = {
  params: {
    id: string;
  };
};

export default function UsersPage({ params: { id } }: Props) {
  return <Layout>User page {id}</Layout>;
}
