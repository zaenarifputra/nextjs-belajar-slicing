export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ICreatePost {
  userId: number;
  title: string;
  body: string;
}

export interface IUpdatePost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IDeletePost {
  id: number;
}
