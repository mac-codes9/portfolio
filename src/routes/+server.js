import redisClient from '$lib/redis';
import {json} from '@sveltejs/kit';

export async function GET() {
  const client = redisClient();
  const newClicks = await client.incr('clicks');
  console.log(newClicks);

  return json(newClicks)
}
