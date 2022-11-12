import { ICreator, IProduct } from "../interfaces";

export const products: IProduct[] = [
  {
    isNew: true,
    imageURL: "/assets/luga.jpg",
    name: "Wayfarer Classic",
    price: 450,
    rating: 4.2,
    numReviews: 34,
    creatorSlug: "dixita",
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
    creatorSlug: "dixita-karki",
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
    id: 4,
    firstName: "Dixita",
    lastName: "Karki",
    status: "Singer",
    imageUrl: "/dixita.webp",
    handles: {
      instagram: "dixita-karki",
      facebook: "dixita-karki",
      other: 'dixita-karki'
    },
    merchs: products,
    slug: "dixita-karki"
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
