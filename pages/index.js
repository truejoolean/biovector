import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import JobListItem from '../components/jobListItem'
import Layout from '../components/layout'
import NavBar from '../components/navbar'
import FilterSection from '../components/filterSection'
import { fetchAPI } from "../lib/api";

// import { getAllJobsData, getPosts } from '../lib/jobs'

const siteTitle = "Biovector | Biotechnology Jobs Germany"

export default function Home({ listings }) {
	{/*
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	function handleChange() {
		console.log("handle Change called in index.js! this keyword: " + this);
	}*/}

	console.log(listings)
  return (
	<Layout>
		<Head><title>{siteTitle}</title></Head>
		
		<div className="w-full">
			<img src="/images/lab.png" className="mx-auto"/>
		</div>
		{/*
		<div className="sloganContainer absolute top-40 z-40">
				<span className="slogantext">Because the right fit is a necessity.</span><br />
				<span className="slogantext">Not a luxury.</span><br />
				<span className="slogantext">Biovector.</span>
		</div>
		*/}
		<section className="jobsAndFilter max-w-screen-xl flex mx-auto justify-between mt-16">
			<div className="border w-2/12">
				<FilterSection handleChangeIndex={handleChangeGlobal}/>
			</div>
			<ul className="w-9/12">
				{listings.map((listing, i) => <JobListItem listing = {listing} />)}
			</ul>
		</section>
	</Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [listings, categories, homepage] = await Promise.all([
    fetchAPI("/articles?status=published"), // articles are now called listings
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { listings, categories, homepage },
    revalidate: 1,
  };
}