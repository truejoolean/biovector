const { configureSitemap } = require('@sergeymyssak/nextjs-sitemap');
// import { getStaticPaths } from '../pages/jobs/[slug].js';

getStaticPaths();

/*
function getStrapiURL(path = "") {
  // let strapi_url = "http://157.230.107.81"
  // let strapi_url = "http://159.65.125.113:1337"
  let strapi_url = "https://api.biovector.de"
  return `${
    strapi_url
  }${path}`;
}

// Helper to make GET requests to Strapi
async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}


async function getDynamicPaths() {
  const jobs = await fetchAPI("/jobs");
  // let paths = [];

  return jobs;
}

*/

/*
async function getDynamicPaths() {
  const jobs = await getStrapiURL("/jobs");
  let paths = [];

  // for (let i = 0; i < jobs.length; i++) {
  //   paths.push({params: { slug: jobs[i].slug }, locale: 'en'});
  //   paths.push({params: { slug: jobs[i].slug }, locale: 'de'});
  // }

  // return {
  //   paths,
  //   fallback: false
  // }
  console.log("my custom paths: ", paths)

  // return paths.map((item) => `/jobs/${item}`);

  const data = ['house', 'flower', 'table'];
  return data.map((item) => `/project/${item}`);
}
*/
 
getDynamicPaths().then((paths) => {
  console.log("paths given: ", paths);
  const Sitemap = configureSitemap({
    baseUrl: 'https://biovector.de',
    include: paths,
    // exclude: ['/test', '/modal', '/api/hello'], // or exclude: ['/project/*']
    excludeIndex: false,
    langs: ['en', 'de'],
    /*
    pagesConfig: {
      '/project/*': {
        priority: '0.5',
        changefreq: 'daily',
      },
    },
    */
    isTrailingSlashRequired: true,
    // targetDirectory: './public',
    // pagesDirectory: './pages'
    // targetDirectory: __dirname + '../public',
    // pagesDirectory: __dirname + '../pages',
  });
  Sitemap.generateSitemap();
});