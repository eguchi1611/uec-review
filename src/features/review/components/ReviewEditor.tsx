"use client";

import { useClasses } from "@/features/class/hooks/useClasses";
import {
  Autocomplete,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Review } from "../types";

type Props = {
  defaultValues?: Review;
};

export type Inputs = {
  classId: string | null;
  year: string;
  teacherName: string;
  result: string;
  message: string;
};

export function ReviewEditor({ defaultValues }: Props) {
  const { classes } = useClasses();

  const classData = useMemo(
    () => Object.fromEntries(classes.map((e) => [String(e.id), e.name])),
    [classes],
  );

  const classOptions = useMemo(() => Object.keys(classData), [classData]);

  const { control } = useFormContext<Inputs>();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography>投稿について不明な点はこちらをご覧ください</Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <Controller
          control={control}
          name="classId"
          rules={{ required: "選択してください" }}
          render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
            <Autocomplete
              options={classOptions}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="科目名"
                  required
                  error={!!error}
                  helperText={error?.message}
                />
              )}
              getOptionLabel={(option) => classData[option] ?? ""}
              onChange={(_e, value) => onChange(value)}
              {...rest}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Controller
          control={control}
          name="year"
          rules={{ required: "入力してください" }}
          render={({ field, fieldState: { error } }) => (
            <FormControl fullWidth required error={!!error}>
              <InputLabel id="year-input">受講学年</InputLabel>
              <Select labelId="year-input" label="受講学年" {...field}>
                <MenuItem value="1">1年</MenuItem>
                <MenuItem value="2">2年</MenuItem>
                <MenuItem value="3">3年</MenuItem>
                <MenuItem value="4">4年</MenuItem>
              </Select>
              {error?.message && (
                <FormHelperText>{error.message}</FormHelperText>
              )}
            </FormControl>
          )}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <Controller
          control={control}
          name="teacherName"
          render={({ field, fieldState: { error } }) => (
            <TextField
              label="教師名 (任意)"
              fullWidth
              {...field}
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Controller
          control={control}
          name="result"
          rules={{ required: "選択してください" }}
          render={({ field, fieldState: { error } }) => (
            <FormControl fullWidth required error={!!error}>
              <InputLabel id="grade-input">成績</InputLabel>
              <Select labelId="grade-input" label="成績" {...field}>
                <MenuItem value="-1">非公開</MenuItem>
                <MenuItem value="4">秀</MenuItem>
                <MenuItem value="3">優</MenuItem>
                <MenuItem value="2">良</MenuItem>
                <MenuItem value="1">可</MenuItem>
                <MenuItem value="0">不可</MenuItem>
              </Select>
              <FormHelperText>{error?.message}</FormHelperText>
            </FormControl>
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          control={control}
          name="message"
          rules={{ required: "入力してください" }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              label="メッセージ"
              required
              multiline
              rows={5}
              fullWidth
              {...field}
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" spacing={2} justifyContent="end">
          <Button type="submit">{defaultValues ? "更新" : "投稿"}</Button>
        </Stack>
      </Grid>
    </Grid>
  );
}
