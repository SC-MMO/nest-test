interface User {
  id: number;
  username: string;
  email: string;
  createdAt: string;
}

interface Post {
  id: number;
  title: string;
  content: string;
  author: User;
  authorId: number;
}

interface AuthResponse {
  authenticated: boolean;
  user: User;
}

export type { User, Post, AuthResponse };
