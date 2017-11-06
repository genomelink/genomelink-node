import { API_BASE } from './constants';
import { fetchBy } from './utils';

export default class Report {
  static async fetch({ name, population, token }) {
    const path = `${API_BASE}/v1/reports/${name}/?population=${population}`;

    const options = {
      headers: {
        authorization: `Bearer ${token}`
      }
    };

    return new Report(await fetchBy(path, options));
  }

  constructor(data) {
    this._data = data;
  }

  get phenotype() {
    return this._data['phenotype'];
  }

  get population() {
    return this._data['population'];
  }

  get scores() {
    return this._data['scores'];
  }

  get summary() {
    return this._data['summary'];
  }
}
