import redisClient from "$lib/utilities/redis";

const client = redisClient();

export async function GET() {
  return new Response(await client.get("clicks"));
}

export async function PUT({ cookies }) {
  cookies.set("clicked", true, { path: "/" });
  return new Response(await client.incr("clicks"));
}
