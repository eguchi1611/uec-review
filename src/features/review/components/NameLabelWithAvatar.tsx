import { StretchedLink } from "@/components/common/StretchedLink";
import { Avatar, Box } from "@mui/material";

type Props = {
  href: string;
};

export function NameLabelWithAvatar({ href }: Props) {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={2}
      position="relative"
      width="fit-content"
    >
      <Avatar />
      <Box>
        <Box lineHeight={1}>名前</Box>
        <Box typography="body2" color="text.secondary">
          @ pro_uecer
        </Box>
      </Box>
      <StretchedLink href={href} />
    </Box>
  );
}
