const Metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');

module.exports = Metalsmith(__dirname)
  .metadata({ // Any key-value pairs to be added to any file.
    site: {
      url: 'https://deepakk87.github.io',
      title: 'My Personal Blog Site',
      description: "In my personal blog site I will be talking about Programming/Software Engineering, Homeschooling etc"
    }
  })
  .source('./src')
  .destination('./public')
  .use(markdown());