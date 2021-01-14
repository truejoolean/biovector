import Link from 'next/link';
// import Image from 'next/image'
import { getStrapiMedia } from "../lib/media";

export default function JobListItem( { listing } ) {
	// console.log("listing.image in JobListItem: ", listing.image);
	const imageUrl = getStrapiMedia(listing.image);
	// console.log("imageUrl: ", imageUrl);
	return (
		<Link as={`/posts/${listing.slug}`} href="/posts/[id]">
			<a>
				<li className="w-full h-32 flex bg-white hover:shadow-lg duration-300 mb-5">
					<div className="content flex my-auto ml-12">
						<img src={imageUrl} className="h-32"/>
						{/*<img src={require("/uploads/hki_bcd123e80a.jpg")} />*/}
						{/*<img src={require("" + listing.image.url)} />*/}
						{/* <Image src="http://localhost:1337/uploads/hki_bcd123e80a.jpg" laoyut="fill"/>*/}
						<div className="ml-8 my-auto text-2xl">
							<div className="text-base text-gray-400">{listing.companyName}</div>
							<div>
								{listing.title}
							</div>
							<div className="text-base text-gray-400">
								{listing.state} · {listing.city} · {listing.employerType}
							</div>
						</div>
					</div>
				</li>
			</a>
		</Link>
	)
}