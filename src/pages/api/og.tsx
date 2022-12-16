/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";
export const config = {
  runtime: "experimental-edge",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          color: "white",
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          alt=""  
          src="https://raw.githubusercontent.com/Anurag30112003/mysite/main/src/img/asto.png"
          style={{ margin: "0 30px" }}
        />{" "}
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
