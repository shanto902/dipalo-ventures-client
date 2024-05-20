import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dipalo Ventures',
    short_name: 'Dipalo Ventures',
    description:
      'We invest in a balanced portfolio across pre-seed to early-stage rounds in physical products utilizing data intelligence and designed for sustainability.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
