const serve = require('metalsmith-serve');
const watch = require('metalsmith-watch');
const metalsmith = require('./common');
metalsmith.use(serve({
    port: 8081,
    verbose: true
    }))
    .use(watch({
      paths: {
        "${src}/**/*": true,
        "layout/**/*": "**/*",
      }
    }))
  .build(function(err) {
      if (err) {
        console.error(err);
      } else {
        console.log('Metalsmith build completed')
      }
    });