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
  creatorSlug: string;
  creator?: ICreator;
}

export interface ICreator {
  id?: number;
  slug?: string;
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
  merchs: IProduct[];
}

