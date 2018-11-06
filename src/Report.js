import { API_BASE } from './constants';
import { fetchBy } from './utils';

export default class Report {
  static async fetch({ name = '', population = '', token = '', clientSecret = '' }) {
    let path = '';
    let options = {};

    if (token.startsWith('T_')) {
      // Enterprise edition endpoint
      if (!clientSecret) {
        clientSecret = process.env.GENOMELINK_CLIENT_SECRET;
        if (!clientSecret) {
          throw new Error('GENOMELINK_CLIENT_SECRET is not provided.');
        }
      }

      path = `${API_BASE}/v1/enterprise/reports/`;

      let encodedToken = encodeURIComponent(token);
      let body = `token=${encodedToken}`;

      options = {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${clientSecret}`,
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        body: body
      };
    } else {
      // Community edition endpoint
      path = `${API_BASE}/v1/reports/${name}/?population=${population}`;
      options = {
        headers: {
          authorization: `Bearer ${token}`
        }
      };
    }
    return new Report(await fetchBy(path, options));
  }

  constructor(props) {
    Object.assign(this, props);
  }
}
