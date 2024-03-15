import IconBookmarkBorder from "@mui/icons-material/BookmarkBorder";
import IconImportContacts from "@mui/icons-material/ImportContacts";
import IconMoreHoriz from "@mui/icons-material/MoreHoriz";
import IconShare from "@mui/icons-material/Share";
import IconStar from "@mui/icons-material/Star";
import {
  Box,
  Button,
  Chip,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { NameLabelWithAvatar } from "./NameLabelWithAvatar";

export function ReviewCard() {
  return (
    <Paper sx={{ p: 2 }}>
      <Stack spacing={1}>
        <Box display="flex" alignItems="start">
          <NameLabelWithAvatar href="/users/pro_uecer" />
          <IconButton sx={{ ml: "auto" }}>
            <IconMoreHoriz />
          </IconButton>
        </Box>
        <Box display="flex" alignItems="start">
          <Button startIcon={<IconImportContacts />} sx={{ mr: "auto" }}>
            微分積分学第一
          </Button>
          <Chip label="優" color="success" variant="outlined" />
        </Box>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          lacinia ac erat at tristique. Donec aliquam, sapien nec eleifend
          consectetur, ex ligula faucibus diam, sit amet fermentum lectus nisi
          ut tellus.
        </Typography>
        <Box display="flex" alignItems="center" gap={1}>
          <Button color="primary" startIcon={<IconStar />}>
            32
          </Button>
          <Button
            color="inherit"
            startIcon={<IconBookmarkBorder />}
            sx={{ mr: "auto" }}
          >
            10
          </Button>
          <Button color="inherit" startIcon={<IconShare />}>
            共有
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
}
