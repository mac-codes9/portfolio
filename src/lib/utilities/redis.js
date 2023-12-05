import { UPSTASH_URI } from "$env/static/private";
import Redis from "ioredis";

export default function redisClient() {
  const client = new Redis(UPSTASH_URI);

  return client;
}
