const metalsmith = require('./common');
metalsmith.build(function(err) {
      if (err) {
        console.error(err);
      } else {
        console.log('Metalsmith build completed')
      }
    });