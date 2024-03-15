import { Avatar, Box, Paper, Typography } from "@mui/material";

export function ProfileCard() {
  return (
    <Paper sx={{ p: 2 }}>
      <Box display="flex" alignItems="center" gap={2}>
        <Avatar />
        <Box>名前</Box>
      </Box>
      <Typography variant="h1">Hello</Typography>
    </Paper>
  );
}
