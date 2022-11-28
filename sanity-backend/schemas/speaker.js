export default {
  name: 'speaker',
  title: 'Speakers List',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Speaker Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sessionTitle',
      title: 'Session Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sessionDetails',
      title: 'Session Points',
      type: 'text',
    },
    {
      name: 'speakerImage',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    }
  ],
};
