export function getStrapiURL(path = "") {
	console.log(process.env.STRAPI_URL)
	console.log("getStrapiURL: ", (process.env.STRAPI_URL || "http://localhost:1337"))
  return `${
    process.env.STRAPI_URL || "http://localhost:1337"
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}