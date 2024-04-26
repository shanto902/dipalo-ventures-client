// import { TBenefit, TResidencyAdvisor, TTeam } from '@/components/types';
import { TBenefit } from '@/components/types';
import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';
import { cache } from 'react';

const getAllBenefits = cache(async (): Promise<TBenefit[]> => {
  try {
    const result = await directus.request(
      readItems('benefits' as any, {
        sort: ['sort'],
        fields: ['id', 'categoryTitle', 'icon', 'items.text'],
      })
    );

    return result as unknown as TBenefit[];
  } catch (error) {
    throw new Error('benefits Not Found');
  }
});

export default getAllBenefits;
