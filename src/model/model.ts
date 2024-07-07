export interface Artist {
  id: number;
  real_name: string;
  genre: number;
  img_url: string;
  hot: boolean;
}

export interface Song {
  id: number;
  realName: string;
  artist: string;
  file_url: string;
  hits: number;
  genre: number;
}
