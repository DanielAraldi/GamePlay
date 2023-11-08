export interface UserProps {
  id: string;
  token: string;
  email: string;
  username: string;
  firstName: string;
  avatar: string;
}

export interface AuthContextData {
  user: UserProps;
}
