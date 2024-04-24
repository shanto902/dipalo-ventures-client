import {
  TCaseStudy,
  TResidencyAdvisor,
  TTeam,
  TTestimonial,
} from '@/components/types';
import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';
import { cache } from 'react';
const getAllTestimonials = cache(async (): Promise<TTestimonial[]> => {
  try {
    const result = await directus.request(
      readItems('testimonials' as any, {
        filter: {
          status: {
            _eq: 'approved',
          },
        },
        fields: [
          'id',
          'name',
          'photo',
          'designation',
          'companyName',
          'testimony',
          'videoLink',
        ],
      })
    );
    return result as TTestimonial[];
  } catch (error) {
    throw new Error('Testimonial Not Found');
  }
});

export default getAllTestimonials;
