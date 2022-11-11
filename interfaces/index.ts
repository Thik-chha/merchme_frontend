export type navItem = {
  label: string;
  href?: string;
  subLabel?: string;
  children?: navItem[];
};

export interface IProduct {
  isNew: boolean;
  imageURL: string;
  name: string;
  price: number;
  rating: number;
  numReviews: number;
}
