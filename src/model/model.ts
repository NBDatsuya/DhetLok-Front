export interface Artist {
  id: number;
  realName: string;
  genre: number;
  imgUrl: string;
  hot: boolean;
}

export interface Song {
  id: number;
  realName: string;
  artist: string;
  fileUrl: string;
  hits: number;
  genre: number;
}
