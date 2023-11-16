import { CLIENT_ID, REDIRECT_URI, SCOPE } from '@env';

export const env = {
  redirectUri: REDIRECT_URI || process.env.REDIRECT_URI,
  clientId: CLIENT_ID || process.env.CLIENT_ID,
  scope: SCOPE || process.env.SCOPE,
};
