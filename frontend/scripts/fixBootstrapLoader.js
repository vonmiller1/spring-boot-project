/* fixBootstrapLoader.js */
const fs = require('fs');
const path = require('path');

/**
 *
 * the use of postcss requires a postcss.config.js file
 * be present, even if it is just an empty module export.
 *
 */

// create post css config
function createPostCssConfig() {
  const file = path.join('node_modules', 'bootstrap-loader', 'postcss.config.js');
  const content = 'module.exports = {};\n';

  fs.writeFile(file, content, { flag: 'w' }, function (err) {
    if (err) {
      console.error('postcss bootstrap-loader fix failed:', err.message);
      process.exitCode = 1;
      return;
    }
    console.log('postcss bootstrap-loader fix applied');
    console.log('  - postcss.config.js has been created\n');
  });
}

// run function
createPostCssConfig();
