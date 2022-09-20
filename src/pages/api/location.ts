import { geolocation,ipAddress } from '@vercel/edge';


export const config = {
  runtime: "experimental-edge",
};

export default async function handler(request: Request) {
  const { city } = geolocation(request);
  const ip = ipAddress(request) || 'unknown';

  return new Response(`<h1>Your location is ${city} and ip address is ${ip}</h1>`,
    {
      status: 200,
      headers: {
        "Cache-Control": "s-maxage=86400",
        'content-type': 'text/html',
      },
    }
  );
}
