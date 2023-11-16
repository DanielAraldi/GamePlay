import { AuthServiceProps, UserAuthProps, UserProps } from '../@types';
import { api, CDN_IMAGE } from '../config';

export const AuthService: AuthServiceProps = {
  async getUser(): Promise<UserProps> {
    const { data } = await api.get<UserAuthProps>('/users/@me');

    const id = data.id;
    const firstName = data.username.split(' ')[0];
    const avatar = `${CDN_IMAGE}/avatars/${id}/${data.avatar || ''}.png`;

    return {
      id,
      avatar,
      firstName,
      email: data.email || '',
      username: data.username,
      token: String(api.defaults.headers.authorization),
    };
  },
};
