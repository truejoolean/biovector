export function getStrapiURL(path = "") {
	// let strapi_url = "http://157.230.107.81"
	// let strapi_url = "http://159.65.125.113:1337"
  let strapi_url = "https://api.biovector.de"
  return `${
    strapi_url
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}