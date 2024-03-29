import Link from 'next/link';
import Image from 'next/image'
// import Image from 'next/image'
import { getStrapiMedia } from "../lib/media";
import { prettify } from '../util/makePretty.js'

export default function JobListItem( { listing } ) {
	// console.log("listing.image in JobListItem: ", listing.image);
	const imageUrl = getStrapiMedia(listing.image);
	// console.log("imageUrl: ", imageUrl);
	return (
		<Link as={`/jobs/${listing.slug}`} href="/jobs/[id]">
			<a>
				<li className="w-full h-36 flex bg-white hover:shadow-lg duration-300 mb-5 lg:h-auto">
					<div className="flex my-auto items-center">
						{/*<img src={require('../public/images/lab.png')} /> */}
						{/*<img src={imageUrl} className="h-32 w-32 md:w-20 md:h-20 ml-4" alt={listing.companyName + " logo"}/>*/}
						<div className="ml-4 w-32 h-32 my-auto" style={{ minWidth: '128px'}}>
							<Image src={imageUrl} className="h-32 w-32 md:w-20 md:h-20 ml-4" height="128" width="128" alt={listing.companyName + "logo"}/>
						</div>
						{/*<img src={require("/uploads/hki_bcd123e80a.jpg")} />*/}
						{/*<img src={require("" + listing.image.url)} />*/}
						{/* <Image src="http://localhost:1337/uploads/hki_bcd123e80a.jpg" laoyut="fill"/>*/}
						<div className="ml-4 my-auto text-2xl lg:text-lg">
							<div className="text-base text-gray-400">{listing.companyName}</div>
							<div className="text-gray-700">
								{listing.title}
							</div>
							<div className="text-base text-gray-400">
								{prettify(listing.companyState)} · {prettify(listing.companyCity)} · {prettify(listing.employerType)} · {prettify(listing.extra)}
							</div>
						</div>
					</div>
				</li>
			</a>
		</Link>
	)
}
// next/Image works for external CDN stuff
// react-optimize-images shoudl work for background images