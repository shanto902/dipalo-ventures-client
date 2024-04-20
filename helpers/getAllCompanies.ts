import {
  TCaseStudy,
  TCompany,
  TResidencyAdvisor,
  TTeam,
} from '@/components/types';
import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';

const getAllCompanies = async (): Promise<TCompany[]> => {
  try {
    const result = await directus.request(
      readItems('companies' as any, {
        filter: {
          status: {
            _eq: 'published',
          },
        },
        fields: [
          'id',
          'companyName',
          'logo',
          'websiteLink',
          'category.categoryName',
          'stage.stage',
          'location.state',
          'shortDescription',
        ],
      })
    );

    const companiesData = result.map((item: any) => {
      const {
        id,
        companyName,
        websiteLink,
        logo,
        category = {},
        location = {},
        stage = {},
        shortDescription,
      } = item;

      const companyData: TCompany = {
        id,
        companyName,
        websiteLink,
        logo,
        shortDescription,
        category: category.categoryName,
        state: location.state,
        stage: stage.stage,
      };

      return companyData;
    });

    return companiesData as TCompany[];
  } catch (error) {
    throw new Error('Categories Not Found');
  }
};

export default getAllCompanies;
