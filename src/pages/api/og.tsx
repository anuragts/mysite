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
          alt="Vercel"  
          src="https://www.meme-arsenal.com/memes/0c10fa934c1572cf74a4ec5662464857.jpg"
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
