"use client";

import {
  Autocomplete,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export function ReviewEditor() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography>投稿について不明な点はこちらをご覧ください</Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <Autocomplete
          options={["A", "B", "C"]}
          renderInput={(params) => (
            <TextField {...params} label="科目名" required />
          )}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <FormControl fullWidth required>
          <InputLabel id="year-input">受講学年</InputLabel>
          <Select labelId="year-input" label="受講学年">
            <MenuItem value="1">1年</MenuItem>
            <MenuItem value="2">2年</MenuItem>
            <MenuItem value="3">3年</MenuItem>
            <MenuItem value="4">4年</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={8}>
        <TextField label="教師名" fullWidth />
      </Grid>
      <Grid item xs={12} md={4}>
        <FormControl fullWidth required>
          <InputLabel id="grade-input">成績</InputLabel>
          <Select labelId="grade-input" label="成績">
            <MenuItem value={-1}>非公開</MenuItem>
            <MenuItem value={4}>秀</MenuItem>
            <MenuItem value={3}>優</MenuItem>
            <MenuItem value={2}>良</MenuItem>
            <MenuItem value={1}>可</MenuItem>
            <MenuItem value={0}>不可</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <TextField label="メッセージ" required multiline rows={5} fullWidth />
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" spacing={2} justifyContent="end">
          <Button>投稿</Button>
        </Stack>
      </Grid>
    </Grid>
  );
}
