export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface Methods {
  get: {
    resData: Comment[];
  };
}
