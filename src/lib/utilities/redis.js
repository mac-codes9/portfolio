import Redis from "ioredis";
import {UPSTASH_URI} from "$env/static/private"

export default function redisClient() {
  const client = new Redis(UPSTASH_URI);

  return client;
}