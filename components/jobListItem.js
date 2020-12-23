import Link from 'next/link';
import { getStrapiMedia } from "../lib/media";

export default function JobListItem( { listing } ) {
	const imageUrl = getStrapiMedia(listing.image);

	return (
		<Link as={`/posts/${listing.slug}`} href="/posts/[id]">
			<a>
				<li className="w-full h-28 flex bg-white hover:shadow-lg mb-5 duration-300">
					<div className="content flex my-auto ml-12">
						<img src={imageUrl} className="h-16"/>
						<div className="ml-8 my-auto text-2xl">
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