// lib/queries.ts
export const SERVICES_QUERY = `
{
  services(orderBy: name_ASC) {
    name
    description
    price
    descriptionFull {
      html
    }
    image {
      url
      fileName
    }
  }
}
`;
