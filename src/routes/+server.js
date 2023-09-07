import redisClient from '$lib/redis';
import {json} from '@sveltejs/kit';

export async function GET({cookies}) {
  const client = redisClient();
  const newClicks = await client.incr('clicks');
  cookies.set('clicked', 'true', {path: '/'});

  return json(newClicks)
}
