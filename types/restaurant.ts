export type Restaurant = {
    id: number;
    images: Array<string>;
    name: string;
    path: string;
    description: string;
    rating: number;
    Horaires: string;
    cantact: {
      Tel: string;
      Site?: string;
    };
    location: string;
  };