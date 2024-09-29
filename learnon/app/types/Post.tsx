export type Post = {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
};

export type PostForm = {
  title: string;
  content: string;
};

export type PostWithComments = Post & {
  comments: Comment[];
};

export type Comment = {
  id: string;
  content: string;
};

export type CommentForm = {
  content: string;
};