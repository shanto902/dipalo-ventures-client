import {
  TCaseStudy,
  TFounderVideo,
  TResidencyAdvisor,
  TTeam,
} from '@/components/types';
import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';

const getAllFounderVideos = async (): Promise<TFounderVideo[]> => {
  try {
    const result = await directus.request(
      readItems('founderVideos' as any, {
        filter: {
          status: {
            _eq: 'published',
          },
        },
        fields: ['id', 'name', 'companyLogo', 'companyName', 'videoLink'],
      })
    );

    return result as TFounderVideo[];
  } catch (error) {
    throw new Error('Founder Videos Not Found');
  }
};

export default getAllFounderVideos;
