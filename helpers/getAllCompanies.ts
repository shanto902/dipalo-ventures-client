import {
  TCaseStudy,
  TCompany,
  TResidencyAdvisor,
  TTeam,
} from '@/components/types';
import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';
import { cache } from 'react';
const getAllCompanies = cache(async (): Promise<TCompany[]> => {
  try {
    const result = await directus.request(
      readItems('companies' as any, {
        fields: [
          'id',
          'status',
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
        status,
        shortDescription,
      } = item;

      const companyData: TCompany = {
        id,
        companyName,
        websiteLink,
        status,
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
});

export default getAllCompanies;
