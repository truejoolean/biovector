const fs = require('fs')
const globby = require('globby')
const fetch = require('node-fetch')
// const { getStaticPaths } = require('../pages/jobs/[slug].js')

// console.log(getStaticPaths());

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
  let jobPaths = [];
  jobs.map((job) => {
    jobPaths.push(job.slug);
  })
  return jobPaths;
}

async function generateSiteMap() {
  const jobPaths = await getDynamicPaths();
  // console.log("paths: ", jobPaths);
  const pages = await globby([
    'pages/**/*.js',
    '!pages/_*.js',
    '!pages/**/[slug].js',
    '!pages/api',
    'posts/*.md',
    '!pages/test.js',
    '!pages/modal.js'
  ])

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
          ${pages
            .map(page => {
              const path = page
                .replace('pages', '')
                .replace('.js', '')
                .replace('.md', '')
              const route = path === '/index' ? '' : path;
              return `<url>
                          <loc>${`https://biovector.de${route}`}</loc>
                      </url>
                      `
            })
            .join('')}
          ${jobPaths
            .map(jobPath => {
              return `<url><loc>${`https://biovector.de/jobs/${jobPath}`}</loc><xhtml:link rel="alternate" hreflang="en" href=${`https://biovector.de/jobs/${jobPath}`} /><xhtml:link rel="alternate" hreflang="de" href=${`https://biovector.de/de/jobs/${jobPath}`} /></url>`
            }).join('')}
      </urlset>
  `
  console.log(sitemap);
  fs.writeFileSync('public/sitemap.xml', sitemap)
}

generateSiteMap()