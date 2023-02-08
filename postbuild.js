const fs = require('fs');

fs.copyFileSync('./LICENSE', './storybook-static/LICENSE');
fs.copyFileSync('./package.json', './storybook-static/package.json');
fs.copyFileSync('./README.md', './storybook-static/README.md');
