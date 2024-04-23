import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';
import { cache } from 'react';
const getGoldenVisa = cache(async () => {
  try {
    const result = await directus.request(
      readItems('goldenVisa' as any, {
        fields: ['benefits.collection.benefits'],
      })
    );
    return result;
  } catch (error) {
    throw new Error('Visa Not Found');
  }
});

export default getGoldenVisa;
