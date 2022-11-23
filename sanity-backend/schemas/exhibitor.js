export default {
    name: 'exhibitor',
    title: 'Exhibitor List',
    type: 'document',
    fields: [
      {
        name: 'industry',
        title: 'Exhibitor Industry',
        type: 'string',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'exhibitorName',
        title: 'Sponser Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'exhibitorCountry',
        title: 'Exhibitor Country',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'exhibitorImage',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }      
    ],
  };
  