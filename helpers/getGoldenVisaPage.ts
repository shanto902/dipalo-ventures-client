// import { TBenefit, TResidencyAdvisor, TTeam } from '@/components/types';
import { TGoldenVisaPage } from '@/components/types';
import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';
import { cache } from 'react';

const getGoldenVisaPage = cache(async (): Promise<TGoldenVisaPage> => {
  try {
    const result = await directus.request(
      readItems('goldenVisa' as any, {
        fields: ['*'],
      })
    );

    return result as unknown as TGoldenVisaPage;
  } catch (error) {
    throw new Error('benefits Not Found');
  }
});

export default getGoldenVisaPage;
