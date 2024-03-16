"use client";

import { Box } from "@mui/material";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  format,
} from "date-fns";
import { useEffect, useState } from "react";

type Props = {
  createdAt: string;
};

export default function ReviewCreatedAtLabel({ createdAt }: Props) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timeout = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => {
      clearInterval(timeout);
    };
  });

  return (
    <Box typography="body2" color="text.secondary">
      {getCreatedAtLabel(now.getTime(), new Date(createdAt).getTime())}
    </Box>
  );
}

function getCreatedAtLabel(now: number, date: number): string {
  const diffSeconds = differenceInSeconds(now, date);
  const diffMinutes = differenceInMinutes(now, date);
  const diffHours = differenceInHours(now, date);
  const diffDays = differenceInDays(now, date);

  if (now - date <= 60 * 1000) {
    // 1分以内
    return `${diffSeconds}秒前`;
  } else if (now - date <= 60 * 60 * 1000) {
    // 1時間以内
    return `${diffMinutes}分前`;
  } else if (now - date <= 24 * 60 * 60 * 1000) {
    // 1日以内
    return `${diffHours}時間前`;
  } else if (now - date <= 2 * 24 * 60 * 60 * 1000) {
    // 2日以内
    return "昨日";
  } else if (now - date <= 3 * 24 * 60 * 60 * 1000) {
    // 3日以内
    return "一昨日";
  } else if (now - date <= 7 * 24 * 60 * 60 * 1000) {
    // 1週間以内
    return `${diffDays}日前`;
  } else if (now - date <= 365 * 24 * 60 * 60 * 1000) {
    // 1年以内
    return format(date, "M月d日");
  } else {
    // それ以前
    return format(date, "y年M月d日");
  }
}
