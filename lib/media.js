import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
	console.log("getStrapiMedia with media object: ", media)
  // const imageUrl = media[0].url.startsWith("/")
    const imageUrl = media.url.startsWith("/")

    ? getStrapiURL(media.url)
    : media.url;
  return imageUrl;
}