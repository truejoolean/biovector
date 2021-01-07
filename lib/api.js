export function getStrapiURL(path = "") {
	let strapi_url = "http://159.65.125.113:1337"
  return `${
    strapi_url || "http://localhost:1337"
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}