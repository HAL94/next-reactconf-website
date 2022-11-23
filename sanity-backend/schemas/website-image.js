export default {
  name: 'images',
  title: 'Image Asset',
  type: 'document',
  fields: [
    {
      name: 'imageKey',
      title: 'Image Key',
      type: 'slug',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'imageUrl',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
