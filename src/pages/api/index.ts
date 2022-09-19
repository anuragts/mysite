import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res
    .status(200)
    .json({
      name: "Anurag",
      about: "I am full stack developer",
      madewith: ["Next.js", "Typescript", "Tailwindcss", "ReactIcons"],
      twitter: "https://twitter.com/theanuragdev",
      red: "https://anuragdev.me",
      message: "Congratulations you reached api endpoint",
    });
}
