// import { TBenefit, TResidencyAdvisor, TTeam } from '@/components/types';
import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';
import { cache } from 'react';

const getAllBenefits = cache(async () => {
  try {
    const result = await directus.request(
      readItems('benefits' as any, {
        sort: ['sort'],
        fields: [
          'id',
          'name',
          'icon',
          'designation',
          'categoryTitle',
          'items.*',
        ],
      })
    );

    console.log(result);
    return result;
  } catch (error) {
    throw new Error('benefits Not Found');
  }
});

export default getAllBenefits;
