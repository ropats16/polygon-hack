export const schemaContent = {
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "NFT Standard Schema Test",
  type: "object",
  properties: {
    description: {
      type: "string",
      maxLength: 420,
    },
    profileImage: {
      type: "string",
      maxLength: 200,
    },
    name: {
      type: "string",
      maxLength: 150,
    },
    handle: {
      type: "string",
      maxLength: 150,
    },
    id: {
      type: "string",
      maxLength: 5,
    },
    assets: {
      type: "array",
      items: {
        type: "object",
        properties: {
          itemDescription: {
            type: "string",
            maxLength: 420,
          },
          itemImage: {
            type: "string",
            maxLength: 200,
          },
          itemName: {
            type: "string",
            maxLength: 150,
          },
          itemAttributes: [
            {
              strength: {
                type: "integer",
                maxLength: 2,
              },
              stamina: {
                type: "integer",
                maxLength: 2,
              },
              speed: {
                type: "integer",
                maxLength: 2,
              },
              health: {
                type: "integer",
                maxLength: 2,
              },
              magicMastery: {
                type: "integer",
                maxLength: 2,
              },
            },
          ],
        },
      },
    },
  },
  required: ["name", "handle"],
};
