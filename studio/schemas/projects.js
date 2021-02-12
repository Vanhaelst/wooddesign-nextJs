export default {
  name: "projects",
  title: "Projecten",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Description",
      name: "description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};
