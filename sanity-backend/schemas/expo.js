export default {
    name: 'conf',
    title: 'Conference Details',
    type: 'document',    
    fields: [
      {
        name: 'confName',
        title: 'Event Name',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'confDescription',
        title: 'About The Event',
        type: 'text',
        validation: Rule => Rule.required()
      },
      {
        name: 'confStartDate',
        title: 'Event Start Date',
        type: 'date',
        validation: Rule => Rule.required()
      },
      {
        name: 'confEndDate',
        title: 'Event End Date',
        type: 'date',
        validation: Rule => Rule.required().min(Rule.valueOfField('confStartDate'))
      },
      {
        name: 'confLocation',
        title: 'Event Location',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'confOpeningTimes',
        title: 'Opening Times',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'confCodeOfConduct',
        title: 'Code of Conduct',
        type: 'text',
        validation: Rule => Rule.required()
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{type: 'reference', to: {type: 'images'}}],
      },
    ],
  };
  