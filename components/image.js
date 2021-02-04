import { getStrapiMedia } from "../lib/media";
import Image from 'next/image'

const MyImage = ({ image, style }) => {
  const imageUrl = getStrapiMedia(image);

  return (
    {/*<img
      src={imageUrl}
      alt={image.alternativeText || image.name}
      style={style}
    /*/}>
    <Image
    	src={imageUrl}
    	layout='fill'
    />
  );
};

// export default MyImage;
// this component shouldn't be used