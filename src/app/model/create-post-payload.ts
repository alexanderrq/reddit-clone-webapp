export interface CreatePostPayload {
  description: string;
  postId?: number;
  postName: string;
  subredditName: string;
  url?: string;
}
