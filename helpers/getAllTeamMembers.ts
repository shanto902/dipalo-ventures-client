import { TTeam } from '@/components/types';
import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';
import { cache } from 'react';

const getAllTeamMembers = cache(async (): Promise<TTeam[]> => {
  try {
    const result = await directus.request(
      readItems('teams' as any, {
        filter: {
          status: {
            _eq: 'published',
          },
        },
        sort: ['sort'],
        fields: [
          'id',
          'name',
          'serialNo',
          'photo',
          'designation',
          'linkedinLink',
          'bio',
          'priorInvestments.id',
          'priorInvestments.status',
          'priorInvestments.companyName',
          'priorInvestments.companyLogo',
          'priorInvestments.companyLink',
        ],
      })
    );
    return result as TTeam[];
  } catch (error) {
    throw new Error('Team Members Not Found');
  }
});

export default getAllTeamMembers;
