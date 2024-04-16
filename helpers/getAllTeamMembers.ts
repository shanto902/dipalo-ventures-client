import { TTeam } from '@/components/common/types';
import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';

const getAllTeamMembers = async (): Promise<TTeam[]> => {
  try {
    const result = await directus.request(
      readItems('teams' as any, {
        filter: {
          status: {
            _eq: 'published',
          },
        },
        sort: ['serialNo', 'serialNo'],
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
};

export default getAllTeamMembers;
