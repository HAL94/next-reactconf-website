export default {
    name: 'sector',
    title: 'Exhibition Sectors',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Sector Name',
        type: 'string',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'image',
        title: 'Sector Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: (Rule) => Rule.required(),
      },      
    ],
  };
  