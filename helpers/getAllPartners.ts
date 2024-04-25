// import { TBenefit, TResidencyAdvisor, TTeam } from '@/components/types';
import { TPartner } from '@/components/types';
import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';
import { cache } from 'react';

const getAllPartners = cache(async (): Promise<TPartner[]> => {
  try {
    const result = await directus.request(
      readItems('partners' as any, {
        filter: {
          status: {
            _eq: 'published',
          },
        },
        sort: ['sort'],
        fields: ['id', 'companyName', 'logo', 'websiteLink'],
      })
    );
    return result as TPartner[];
  } catch (error) {
    throw new Error('Partners Not Found');
  }
});

export default getAllPartners;
