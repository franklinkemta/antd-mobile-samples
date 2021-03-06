const path = require('path');
const commonConfig = require('./bisheng.common.config');

module.exports = Object.assign({}, commonConfig, {
  port: 8002,
  source: {
    components: './components',
  },
  output: './_site/kitchen-sink',
  root: '/kitchen-sink/',
  entryName: 'kitchen-sink',
  theme: './ant-design-mobile/site/kitchen/src',
  htmlTemplate: path.join(__dirname, '../ant-design-mobile/site/kitchen/src/static/template.html'),
  doraConfig: {
    verbose: true,
    plugins: ['dora-plugin-upload'],
  },
});
