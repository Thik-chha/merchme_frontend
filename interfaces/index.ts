export type navItem = {
  label: string;
  href?: string;
  subLabel?: string;
  children?: navItem[];
};

export interface IProduct {
  id?: number;
  isNew: boolean;
  imageURL: string;
  name: string;
  price: number;
  rating: number;
  numReviews: number;
}

export interface ICreator {
  id?: number;
  firstName: string;
  lastName: string;
  status: string;
  imageUrl: string;
  handles: {
    tiktok?: string;
    youtube?: string;
    facebook?: string;
    instagram?: string;
    other?: string;
  };
}
