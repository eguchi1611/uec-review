import IconBookmarkBorder from "@mui/icons-material/BookmarkBorder";
import IconMoreHoriz from "@mui/icons-material/MoreHoriz";
import IconShare from "@mui/icons-material/Share";
import IconStar from "@mui/icons-material/Star";
import {
  Box,
  Button,
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
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          lacinia ac erat at tristique. Donec aliquam, sapien nec eleifend
          consectetur, ex ligula faucibus diam, sit amet fermentum lectus nisi
          ut tellus. Praesent placerat, dolor a maximus vulputate, lacus libero
          porta urna, in tincidunt sapien sem nec diam. Integer et nunc a nunc
          elementum hendrerit quis et urna. Vestibulum eu auctor justo. Quisque
          iaculis tristique eros vel sagittis. Nunc id vulputate dolor. Nunc
          quis convallis est. Phasellus id diam nec enim suscipit mattis sed a
          leo. In elementum enim sed vestibulum lobortis. Morbi non libero nec
          dui convallis tempus ac non neque. Ut pulvinar faucibus tempus. Proin
          placerat, odio at laoreet laoreet, sem nunc consequat est, sed
          fermentum nunc turpis eget ex. Pellentesque et ante nisi. Praesent
          fermentum imperdiet ipsum in congue. Ut et ullamcorper nibh.
          Suspendisse facilisis nulla eget risus blandit, eget dapibus velit
          sodales.
        </Typography>
        <Box display="flex" alignItems="center" gap={1}>
          <Button color="primary" size="small" startIcon={<IconStar />}>
            32
          </Button>
          <Button
            color="inherit"
            size="small"
            startIcon={<IconBookmarkBorder />}
            sx={{ mr: "auto" }}
          >
            10
          </Button>
          <Button
            color="inherit"
            size="small"
            startIcon={<IconShare />}
          ></Button>
        </Box>
      </Stack>
    </Paper>
  );
}
