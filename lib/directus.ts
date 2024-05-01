import { createDirectus, rest, staticToken } from '@directus/sdk';
const directus = createDirectus(process.env.NEXT_PUBLIC_API_URL as string)
  .with(staticToken(process.env.ACCESS_TOKEN as string))
  .with(
    rest({
      onRequest: (options) => ({
        ...options,
        next: {
          revalidate: 0,
        },
      }),
    })
  );

export default directus;
