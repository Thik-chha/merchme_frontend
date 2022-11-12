export type navItem = {
  label: string;
  href?: string;
  subLabel?: string;
  children?: navItem[];
};

export interface IProduct {
  id?: number;
  slug?: string;
  isNew: boolean;
  imageURL: string;
  name: string;
  price: number;
  rating: number;
  numReviews: number;
  creatorSlug: string;
  creator?: ICreator;
  type: "shirt" | "sticker";
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

