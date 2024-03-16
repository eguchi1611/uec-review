import { StretchedLink } from "@/components/common/StretchedLink";
import { Avatar, Box } from "@mui/material";

type Props = {
  href: string;
  name: string;
  avatarUrl?: string;
};

export function NameLabelWithAvatar({ href, name, avatarUrl }: Props) {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={2}
      position="relative"
      width="fit-content"
    >
      <Avatar src={avatarUrl} />
      <Box>
        <Box lineHeight={1}>{name}</Box>
        <Box typography="body2" color="text.secondary">
          {/* @ id */}
        </Box>
      </Box>
      <StretchedLink href={href} />
    </Box>
  );
}
