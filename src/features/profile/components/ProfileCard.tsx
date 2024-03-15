import { Avatar, Box, Stack } from "@mui/material";

export function ProfileCard() {
  return (
    <Box>
      <Box display="flex" gap={2} alignItems="center">
        <Avatar sx={{ width: 64, height: 64 }} />
        <Box typography="h5">名前</Box>
      </Box>
      <Stack spacing={2} mt={2}></Stack>
    </Box>
  );
}

{
  /* <Box
        display="flex"
        gap={2}
        alignItems="start"
        justifyContent="space-between"
      >
        <NameLabelWithAvatar href="/users/pro_uecer" />
        <Button variant="outlined" startIcon={<IconShare />}>
          共有
        </Button>
      </Box>
      <Typography variant="h1">共有</Typography> */
}
