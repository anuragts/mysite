// import type { NextApiRequest, NextApiResponse } from "next";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   res
//     .status(200)
//     .json({
//       name: "Anurag",
//       about: "I am full stack developer",
//       madewith: ["Next.js", "Typescript", "Tailwindcss", "ReactIcons"],
//       twitter: "https://twitter.com/theanuragdev",
//       red: "https://anuragdev.me",
//       message: "Congratulations you reached api endpoint",
//     });
// }
// pages/api/user.ts
import type { NextRequest } from "next/server";
import { geolocation,ipAddress } from '@vercel/edge';


export const config = {
  runtime: "experimental-edge",
};

export default async function handler(request: Request) {
  const { city } = geolocation(request);
  const ip = ipAddress(request) || 'unknown';

  return new Response(
    JSON.stringify({
      name: "Anurag",
      city : `Your city is ${city}`,
      ip : `Your ip is ${ip}`,
      about: "I am full stack developer",
      madewith: ["Next.js", "Typescript", "Tailwindcss", "ReactIcons"],
      twitter: "https://twitter.com/theanuragdev",
      red: "https://anuragdev.me",
      message: "Congratulations you reached api endpoint",
    }),
    {
      status: 200,
      headers: {
        "Cache-Control": "s-maxage=86400",
      },
    }
  );
}
