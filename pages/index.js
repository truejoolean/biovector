import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import JobListItem from '../components/jobListItem'
import Layout from '../components/layout'
import NavBar from '../components/navbar'
import FilterSection from '../components/filterSection'
// import { getAllJobsData, getPosts } from '../lib/jobs'
import { connectToDatabase } from "../util/mongodb";

const siteTitle = "Biovector | Biotechnology Jobs Germany"

function handleChangeGlobal() {
  console.log("New Filter activated");
}

export default function Home({ listings }) {
	{/*
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	function handleChange() {
		console.log("handle Change called in index.js! this keyword: " + this);
	}*/}

  return (
	<Layout>
		<Head><title>{siteTitle}</title></Head>
		<NavBar />
		<div className="relative -top-20 z-10 mx-auto w-full">
			<img src="/images/lab.png" className="mx-auto"/>
		</div>
		{/*
		<div className="sloganContainer absolute top-40 z-40">
				<span className="slogantext">Because the right fit is a necessity.</span><br />
				<span className="slogantext">Not a luxury.</span><br />
				<span className="slogantext">Biovector.</span>
		</div>
		*/}
		<section className="jobsAndFilter max-w-screen-xl flex mx-auto justify-between">
			<div className="border w-2/12">
				<FilterSection handleChangeIndex={handleChangeGlobal}/>
			</div>
			<ul className="w-9/12">
				{listings.map(( { _id, title, description } ) => <JobListItem id={_id} title={title} description={description} />)}
			</ul>
		</section>
	</Layout>
  )
}

export async function getStaticProps() {
  const { db } = await connectToDatabase();

	const listings = await db
		.collection("listings")
		.find({})
		.limit(1000)
		.toArray();

	console.log(listings)

  return {
    props: {
      listings: JSON.parse(JSON.stringify(listings)),
    },
  };
}