import { REDIRECT_URI, CLIENT_ID, SCOPE } from '@env';

export const env = {
  redirectUri: REDIRECT_URI || process.env.REDIRECT_URI,
  clientId: CLIENT_ID || process.env.CLIENT_ID,
  scope: SCOPE || process.env.SCOPE,
};
