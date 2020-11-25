import Head from 'next/head'
import styles from '../styles/Home.module.css'
import JobListItem from '../components/jobListItem'
import Layout from '../components/layout'
import NavBar from '../components/navbar'
import FilterSection from '../components/filterSection'
import { getAllJobsData, getPosts } from '../lib/jobs'

// const { PrismaClient } = require("@prisma/client")

const siteTitle = "Biovector | Biotechnology Jobs Germany"

function handleChange() {
  console.log("New Filter activated.");
}

export default function Home( { allJobsData }) {
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
				<FilterSection handleChange={handleChange}/>
			</div>
			<ul className="w-9/12">
				{allJobsData.map(( { id, title, description } ) => <JobListItem id={id} title={title} description={description} />)}
			</ul>
		</section>
	</Layout>
  )
}

export async function getStaticProps() {
	const allJobsData = getAllJobsData()
	return {
		props: {
			allJobsData
		}
	}
}