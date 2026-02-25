export interface Book {
  id: number;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

export const books: Book[] = [
  {
    id: 1,
    title: 'The Geometry of the Soul',
    description: 'An exploration of the timeless patterns and divine mathematics that shape our inner universe. A guide to understanding your own sacred design.',
    price: '$22.00',
    imageUrl: 'https://picsum.photos/seed/book1/400/600',
  },
  {
    id: 2,
    title: 'A Light in the Endless Void',
    description: 'In the darkest moments, a single spark of awareness can illuminate the path home. This book is a collection of meditations on finding that inner light.',
    price: '$18.50',
    imageUrl: 'https://picsum.photos/seed/book2/400/600',
  },
  {
    id: 3,
    title: 'The Art of Becoming',
    description: 'Life is not a race to a destination, but a masterpiece of becoming. Learn to embrace the journey of your own unfolding with grace and courage.',
    price: '$25.00',
    imageUrl: 'https://picsum.photos/seed/book3/400/600',
  },
];
