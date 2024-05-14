// import { TBenefit, TResidencyAdvisor, TTeam } from '@/components/types';
import { TFocusArea } from '@/components/types';
import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';
import { cache } from 'react';

const getAllFocusAreas = cache(async (): Promise<TFocusArea[]> => {
  try {
    const result = await directus.request(
      readItems('focusAreas' as any, {
        sort: ['sort'],
        fields: ['id', 'title', 'image', 'lists.text'],
      })
    );

    return result as unknown as TFocusArea[];
  } catch (error) {
    throw new Error('focusAreas Not Found');
  }
});

export default getAllFocusAreas;
