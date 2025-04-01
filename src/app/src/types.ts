// src/types.ts

export type Service = {
  name: string;
  description: string;
  price: number;
  descriptionFull: {
    html: string;
  };
  image?: {
    url: string;
    fileName: string;
  };
};
