import { TResidencyAdvisor, TTeam } from '@/components/common/types';
import directus from '@/lib/directus';
import { Query, readItems } from '@directus/sdk';

const getAllResidencyAdvisors = async (): Promise<TResidencyAdvisor[]> => {
  try {
    const result = await directus.request(
      readItems('residencyAdvisors' as any, {
        filter: {
          status: {
            _eq: 'published',
          },
        },
        fields: [
          'id',
          'name',
          'photo',
          'designation',
          'linkedinLink',
          'companyName',
        ],
      })
    );

    return result as TResidencyAdvisor[];
  } catch (error) {
    throw new Error('ResidencyAdvisors Not Found');
  }
};

export default getAllResidencyAdvisors;
