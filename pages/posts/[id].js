import Head from 'next/head'
import Layout from '../../components/layout'
import { connectToDatabase } from "../../util/mongodb";
var ObjectId = require('mongodb').ObjectID;

export default function Post({ listing }) {
	// console.log("listingData: ", listingData)
	return (
		<Layout>
			<Head><title>Biovector | {listing.title}</title></Head>
			<section class="max-w-screen-lg flex mx-auto">
				<div class="header mt-8 flex border items-center">
					<div>
						<img src="/images/profile.jpg" className="h-32 w-32"/>
					</div>
					<div className="ml-8">
						<h1 className="text-5xl">
							{listing.title}
						</h1>
						<p className="text-base text-gray-700">{listing.city} · {listing.employer} · {listing.type}</p>
					</div>
				</div>
			</section>
			<br/>
			<section className="max-w-screen-lg mx-auto text-gray-800">
				<p className="text-gray-800">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
			</section>
		</Layout>

  	)
}

async function getAllPostIds() {
	const { db } = await connectToDatabase();
	const allIds = await db
		.collection("listings")
		.find({})
	 	.project( {_id: 1} )
	 	.map(function(listing) {
	 		return {params: {id: listing._id.toString()}}
	 	})
		.toArray();
	console.log(allIds);
	return allIds;
}

async function getListingData(id) {
	const { db } = await connectToDatabase();
	console.log("called getListingData with id: " + id);
	console.log(typeof(id))

	const listingData = await db
		.collection("listings")
		.find({ "_id": ObjectId(id) })
		.toArray()
	console.log("Post: ", listingData)
	// return JSON.parse(JSON.stringify(listingData[0]);
	return JSON.parse(JSON.stringify(listingData[0]))
}

export async function getStaticProps({ params }) {
	const listingData = await getListingData(params.id);
	console.log(listingData);
	return {
		props: {
			listing: listingData
		}
	}
}

export async function getStaticPaths() {
	const paths = await getAllPostIds();
	console.log("paths: ", paths)
	return {
		paths,
		fallback:false
	}
}