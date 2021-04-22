import { ActionType } from './ActionType';

export interface ActionModel {
  type: ActionType;
  value: any;
}

export interface GenreModel {
  id: number;
  name: string;
}

export interface VideoModel {
  id: number;
  artist: string;
  title: string;
  release_year: number;
  genre_id: number;
  image_url: string;
}

export interface DataModel {
  genres: GenreModel[];
  videos: VideoModel[];
}
