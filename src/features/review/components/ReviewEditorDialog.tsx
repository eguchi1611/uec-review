import IconClear from "@mui/icons-material/Clear";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useReviewHelper } from "../hooks/useReviewHelper";
import { Review } from "../types";
import { Inputs, ReviewEditor } from "./ReviewEditor";

type Props = {
  open: boolean;
  onClose: () => void;
  defaultValues?: Review;
};

export function ReviewEditorDialog({ open, onClose, defaultValues }: Props) {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const { postReview, updateReview } = useReviewHelper();

  const isEdit = !!defaultValues;

  const methods = useForm({
    defaultValues: {
      classId: isEdit ? String(defaultValues.class_id) : null,
      year: isEdit ? String(defaultValues.year) : "",
      teacherName: isEdit ? defaultValues.teacher_name || "" : "",
      message: isEdit ? defaultValues.message : "",
      result: isEdit
        ? defaultValues.result != null
          ? String(defaultValues.result)
          : "-1"
        : "",
    },
  });

  const onSubmit = useCallback(
    async (data: Inputs) => {
      if (isEdit) {
        if (await updateReview(defaultValues.id, data)) {
          onClose();
          methods.reset();
          return true;
        }
      } else {
        if (await postReview(data)) {
          onClose();
          methods.reset();
          return true;
        }
      }
      return false;
    },
    [onClose, defaultValues, postReview, updateReview, methods, isEdit],
  );

  return (
    <FormProvider {...methods}>
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="sm"
        scroll="body"
        fullScreen={mobile}
      >
        <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
          <DialogTitle>
            <Box sx={{ position: "relative" }}>
              {defaultValues
                ? `レビューを編集 (ID: ${defaultValues.id})`
                : "レビューを投稿"}
              <IconButton
                size="small"
                sx={{ position: "absolute", top: 0, right: 0 }}
                onClick={onClose}
              >
                <IconClear />
              </IconButton>
            </Box>
          </DialogTitle>
          <DialogContent>
            <ReviewEditor defaultValues={defaultValues} />
          </DialogContent>
        </form>
      </Dialog>
    </FormProvider>
  );
}
