import axios from 'axios';

import { DISCORD_URL } from './discord-auth';

export const api = axios.create({
  baseURL: DISCORD_URL,
});
