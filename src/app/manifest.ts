import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Parivartan Welfare Society',
    short_name: 'PWS',
    description: 'A premium international standard NGO dedicated to eradicating hunger, providing medical support, and empowering communities.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F6F2E8',
    theme_color: '#23361D',
  }
}
