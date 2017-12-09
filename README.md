# GENOME LINK Node.js SDK

Node.js client library to quickly get started with the GENOME LINK API


## Requirements

Node >= 8.9.0


## Installation

To install, use `npm` or `yarn`:

```bash
npm install --save genomelink-node
```
```bash
yarn add genomelink-node
```

## Examples

```
> const genomeLink = require('genomelink-node');
> const callback = (report) => { console.log(report.summary.text); }
> genomeLink.Report.fetch({ name: 'eye-color', population: 'european', token: 'GENOMELINKTEST001' }).then((report) => { callback(report); });
Tend to not have brown eyes, slightly
```

* [Express web app](https://github.com/AWAKENS-dev/api-oauth-example-node-express)

