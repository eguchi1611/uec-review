import Link from "next/link";

type Props = {
  href: string;
};

export function StretchedLink({ href }: Props) {
  return (
    <Link
      href={href}
      style={{
        position: "absolute",
        inset: 0,
      }}
    />
  );
}
