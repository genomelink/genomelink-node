import Report from '../src/Report';

describe('Report', () => {
  it('should work', async () => {
    const report = await Report.fetch({
      name: 'eye-color',
      population: 'european',
      token: 'GENOMELINKTEST'
    });

    expect(report.summary.text).toBe('Tend to not have brown eyes, slightly');
  });
});