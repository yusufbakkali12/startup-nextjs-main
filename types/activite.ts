export type Activite = {
    id: number;
    images: Array<string>;
    name: string;
    path: string;
    contact: {
        nom: string;
        email: string;
        tel: string;
        whatsapp: string;
    }
    description: string;
    rating: number;
    location: string;
    siegeSocial: string;
    site: string;
  };