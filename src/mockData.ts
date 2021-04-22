import { DataModel } from './types/Models';

export const mockData: DataModel = {
  genres: [
    {
      id: 1,
      name: 'ABC',
    },
    {
      id: 2,
      name: 'XYZ',
    },
  ],
  videos: [
    {
      artist: 'QWERTY',
      genre_id: 1,
      id: 1,
      image_url: '',
      release_year: 2000,
      title: 'TEST',
    },
    {
      artist: 'Another Artist',
      genre_id: 2,
      id: 2,
      image_url: '',
      release_year: 2001,
      title: 'Some Other Video',
    },
    {
      artist: 'QWERTY',
      genre_id: 2,
      id: 3,
      image_url: '',
      release_year: 2002,
      title: 'Yet Another Video',
    },
  ],
};
