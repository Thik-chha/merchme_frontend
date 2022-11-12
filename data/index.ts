import { ICreator, IProduct } from "../interfaces";

export const products: IProduct[] = [
  {
    isNew: true,
    imageURL: "/assets/luga.jpg",
    name: "Wayfarer Classic",
    price: 450,
    rating: 4.2,
    numReviews: 34,
    creatorSlug: "srv",
    type: "shirt",
    slug: "wayfarer-shirt"
  },
  {
    isNew: false,
    imageURL: "/assets/luga.jpg",
    name: "Wayfarer Classic",
    price: 450,
    rating: 4.2,
    numReviews: 34,
    creatorSlug: "srv",
    type: "shirt",
    slug: "wayfarer-shirt"
  },
  {
    isNew: false,
    imageURL: "/assets/luga.jpg",
    name: "Wayfarer Classic",
    price: 450,
    rating: 4.2,
    numReviews: 34,
    creatorSlug: "srv",
    type: "shirt",
    slug: "wayfarer-shirt"
  },
  {
    isNew: true,
    imageURL: "/assets/luga.jpg",
    name: "Wayfarer Classic",
    price: 450,
    rating: 4.2,
    numReviews: 34,
    creatorSlug: "srv",
    type: "shirt",
    slug: "wayfarer-shirt"
  },
  {
    isNew: true,
    imageURL: "/assets/luga.jpg",
    name: "Wayfarer Classic",
    price: 450,
    rating: 4.2,
    numReviews: 34,
    creatorSlug: "srv",
    type: "shirt",
    slug: "wayfarer-shirt"
  },
];

export const CREATORS: ICreator[] = [
  {
    id: 1,
    firstName: "Sajjan Raj",
    lastName: "Vaidya",
    status: "Singer, Musician ",
    imageUrl: "/assets/srv.webp",
    handles: {
      instagram: "sajjanrajvaidya",
      facebook: "sajjanrajvaidya",
      other: 'nice'
    },
    merchs: products,
    slug: "srv"
  },
  {
    id: 2,
    firstName: "Yabesh",
    lastName: "Thapa",
    status: "Singer, Musician ",
    imageUrl: "/assets/yabesh.jpeg",
    handles: {
      instagram: "yabush69",
      youtube: "yabush69",
    },
    slug: "yabush69",
    merchs: products,
  },
];
