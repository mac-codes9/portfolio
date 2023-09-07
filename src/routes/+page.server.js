import redisClient from '$lib/redis'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const client = redisClient();

  return {
    clicks: await client.get('clicks')
  }
}
