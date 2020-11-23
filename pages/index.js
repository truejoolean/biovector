import Head from 'next/head'
import styles from '../styles/Home.module.css'
import JobListItem from '../components/jobListItem'
import Layout from '../components/layout'
import NavBar from '../components/navbar'
import { getAllJobsData } from '../lib/jobs'

const siteTitle = "Biovector | Biotechnology Jobs Germany"

export default function Home( { allJobsData }) {
  return (
	<Layout>
		<Head><title>{siteTitle}</title></Head>
		<NavBar />
		<div className="relative top-0 z-10 mx-auto max-w-screen-xl">
			<img src="/images/lab.png" className="mx-auto"/>
		</div>
		<section className="jobsAndFilter max-w-screen-xl flex mx-auto justify-between">
			<div className="bg-black w-3/12 h-32"></div>
			<ul className="w-8/12">
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