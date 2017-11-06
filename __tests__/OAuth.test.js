import OAuth from '../src/OAuth';

describe('OAuth', () => {
  // describe('authorizeUrl', () => {
  //   it('should work', () => {
  //     const clientId = 'xxxxxxxxxxxxxxxx';
  //     const callbackUrl = 'http://127.0.0.1:5000/callback';
  //     const scope = 'report:eye-color';
  //
  //     const url = OAuth.authorizeUrl({
  //       clientId: clientId,
  //       callbackUrl: callbackUrl,
  //       scope: scope
  //     });
  //
  //     expect(url).toBe(`https://genomelink.io/oauth/authorize?redirect_uri=${callbackUrl}&client_id=${clientId}&scope=${scope}&response_type=code`);
  //   });
  // });

  // describe('token', () => {
  //   it('should work', async () => {
  //     const clientId = 'xxxxxxxxxxxxxxxxxxxxxxxxxxx';
  //     const clientSecret = 'xxxxxxxxxxxxxxxxxxxxxx';
  //     const callbackUrl = 'http://127.0.0.1:5000/callback';
  //     const requestUrl = 'http://127.0.0.1:5000/callback?code=xxxxxxxxxxxxxxxxxxxx';
  //
  //     const token = await OAuth.token({
  //       clientId: clientId,
  //       clientSecret: clientSecret,
  //       callbackUrl: callbackUrl,
  //       requestUrl: requestUrl
  //     });
  //
  //     expect(token).toBe(true);
  //   });
  // });
});