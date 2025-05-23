export type Explore = {
  id: number;
  path: string;
  images: string[];
  name: string;
  resume_description: string;
  category: "nature" | "culture";
  description: {
    title: string;
    content: string;
  }[];
  rating: number;
}