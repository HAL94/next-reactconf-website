export default {
  name: 'sponser-tier',
  title: 'Sponser Tier',
  type: 'document',
  fields: [
    {
      name: 'sponserTier',
      title: 'Sponser Tier',
      type: 'slug',
      validation: (Rule) => Rule.required()
    },    
  ],
};
