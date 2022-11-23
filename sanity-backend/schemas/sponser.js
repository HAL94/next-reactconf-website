export default {
    name: 'sponser',
    title: 'Sponser List',
    type: 'document',
    fields: [
      {
        name: 'industry',
        title: 'Sponser Industry',
        type: 'string',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'sponserName',
        title: 'Sponser Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'sponserCountry',
        title: 'Sponser Country',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'sponserImage',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'sponserTier',
        title: 'Sponser Tier',
        type: 'reference',
        to: { type: 'sponser-tier' },
      },
    ],
  };
  