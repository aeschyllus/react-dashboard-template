export interface UserState {
  isLoading: boolean;
  users: User[];
  error: any;
}

interface User {
  id: number;
  name: string;
  phone: string;
  username: string;
  email: string;
}
