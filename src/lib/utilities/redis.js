import Redis from "ioredis";

export default function redisClient() {
  const client = new Redis(
    "rediss://default:40bc6b7b8d7f4a51a12741001470ec63@evolving-lobster-32763.upstash.io:32763",
  );

  return client;
}
