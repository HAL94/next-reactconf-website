import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: process.env['NEXT_PUBLIC_SANITY_API_PROJECT_ID'],
    token: process.env['NEXT_PUBLIC_SANITY_TOKEN'],
    apiVersion: process.env['NEXT_PUBLIC_SANITY_API_VERSION'],
    useCdn: process.env['NEXT_PUBLIC_SANITY_USE_CDN'],
    dataset: process.env['NEXT_PUBLIC_SANITY_API_DATASET']
});

