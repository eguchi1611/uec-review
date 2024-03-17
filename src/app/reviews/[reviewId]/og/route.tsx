/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getReviewById } from "@/features/review/getReviewById";
import { ImageResponse } from "next/og";

export async function GET(
  _request: Request,
  { params: { reviewId } }: { params: { reviewId: string } },
) {
  const { review } = await getReviewById(reviewId);

  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <img
            alt=""
            width={1200}
            height={630}
            src="http://localhost:3000/og_base.png"
            style={{ position: "absolute", top: 0, left: 0 }}
          />
          <div
            style={{
              fontSize: 80,
              position: "absolute",
              left: 63,
              width: 650,
              wordBreak: "break-all",
            }}
          >
            {review?.classes?.name}
          </div>
          <div
            style={{
              fontSize: 36,
              position: "absolute",
              left: 63,
              bottom: 63,
            }}
          >
            {`@ ${review?.users?.name}`}
          </div>
          <img
            alt=""
            width={321.3}
            height={321.3}
            src={review?.users?.avatar_url}
            style={{
              position: "absolute",
              top: 180.3083333333,
              right: 112.35,
              borderRadius: 9999,
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
