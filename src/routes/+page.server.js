import redisClient from '$lib/utilities/redis'

/** @type {import('./$types').PageServerLoad} */
export async function load({cookies}) {
  const clicked = cookies.get('clicked');
  const client = redisClient();

  return {
    clicks: await client.get('clicks'),
    clicked
  }
}
