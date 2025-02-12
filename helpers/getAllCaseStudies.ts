import { TCaseStudy, TResidencyAdvisor, TTeam } from '@/components/types';
import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';
import { cache } from 'react';
const getAllCaseStudies = cache(async (): Promise<TCaseStudy[]> => {
  try {
    const result = await directus.request(
      readItems('caseStudies' as any, {
        filter: {
          status: {
            _eq: 'published',
          },
        },
        fields: [
          'id',
          'companyName',
          'companyLogo',
          'companyLink',
          'bannerPicture',
          'overview',
          'solution',
        ],
      })
    );
    return result as TCaseStudy[];
  } catch (error) {
    throw new Error('Case Studies Not Found');
  }
});

export default getAllCaseStudies;
