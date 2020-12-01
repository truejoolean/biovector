import Layout from '../../components/layout'
import { connectToDatabase } from "../../util/mongodb";

export default function Post() {
  return <h1>Post</h1>
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
	const listingData = await db
		.collection("listings")
		.find({ "_id": id })
		.toArray()
	console.log("Post: ", listingData)
	return listingData;
}

export async function getStaticProps({ params }) {
	const listingData = await getListingData(params.id);
	return {
		props: {
			listingData
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