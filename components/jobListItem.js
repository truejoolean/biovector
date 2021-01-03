import Link from 'next/link';
import { getStrapiMedia } from "../lib/media";

export default function JobListItem( { listing } ) {
	const imageUrl = getStrapiMedia(listing.image);

	return (
		<Link as={`/posts/${listing.slug}`} href="/posts/[id]">
			<a>
				<li className="w-full h-32 flex bg-white hover:shadow-lg mb-5 duration-300">
					<div className="content flex my-auto ml-12">
						<img src={imageUrl} className="h-32"/>
						<div className="ml-8 my-auto text-2xl">
							<div className="text-base text-gray-400">{listing.company}</div>
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