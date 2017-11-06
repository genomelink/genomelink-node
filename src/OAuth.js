import { API_BASE } from './constants';
import { fetchBy, createURLSearchParams } from './utils';
import url from 'url';

export default class OAuth {
  static authorizeUrl({ clientId = process.env.GENOMELINK_CLIENT_ID,
                        callbackUrl = process.env.GENOMELINK_CALLBACK_URL,
                        scope }) {
    return API_BASE +
      '/oauth/authorize' +
      `?redirect_uri=${callbackUrl}` +
      `&client_id=${clientId}` +
      `&scope=${scope}` +
      '&response_type=code';
  }

  static async token({ clientId = process.env.GENOMELINK_CLIENT_ID,
                       clientSecret = process.env.GENOMELINK_CLIENT_SECRET,
                       callbackUrl = process.env.GENOMELINK_CALLBACK_URL,
                       requestUrl }) {
    const path = API_BASE + '/oauth/token';
    const query = url.parse(requestUrl, true).query;
    const authorizationCode = query.code;
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: createURLSearchParams({
        'grant_type': 'authorization_code',
        'code': authorizationCode,
        'client_id': clientId,
        'client_secret': clientSecret,
        'redirect_uri': callbackUrl
      })
    };

    const result = await fetchBy(path, options);

    return result.access_token;
  }
}
