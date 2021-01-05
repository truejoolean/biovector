import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import NavBar from '../components/navbar'

import { ReactElement } from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const siteTitle = "Biovector | Biotechnology Jobs Germany"

export default function FindTalent() {

  return (
	<Layout>
		<Head>
			<title>{siteTitle}</title>
			<meta name="description" content="The Biovector lists biotechnology jobs and vacancies and thus connects employees and employers in this nascent field." />
		</Head>
		<section>
			<div style={{ backgroundImage: 'url(/images/female_scientist.jpg)', backgroundPosition: 'center', backgroundSize: 'cover' }}>
				<div className="mx-auto max-w-screen-lg py-32">
					<h1 className="text-5xl font-semibold inline-block p-2 w-1/2" style={{ background: 'rgba(255,255,255,.9)' }}>Grow your biotech company with the best talents.</h1>
				</div>
			</div>
		</section>
		<section className="mt-8 w-screen-lg">
			<h2 className="text-4xl text-center font-semibold">We are unlike any other job platform.</h2>
			<div className="flex mx-auto max-w-screen-lg mt-8">
				<div className="w-1/2 border-r-2">
					<div className="flex flex-col align-items w-96 items-center mx-auto">
						<div className="w-20 h-20 bg-gray-400" />
						<h2 className="text-xl">Targeted listings</h2>
						<p className="text-center">Your listings drown on other platforms in a sea of 1000s of listings. The Biovector helps them stay afloat.</p>
					</div>
					<div className="flex flex-col align-items w-96 items-center mx-auto mt-4 pt-8 border-t-2">
						<div className="w-20 h-20 bg-gray-400" />
						<h2 className="text-xl">Targeted listings</h2>
						<p className="text-center">Your listings drown on other platforms in a sea of 1000s of listings. The Biovector helps them stay afloat.</p>
					</div>
				</div>
				<div className="w-1/2">
					<div className="flex flex-col align-items w-96 items-center mx-auto">
						<div className="w-20 h-20 bg-gray-400" />
						<h2 className="text-xl">Targeted listings</h2>
						<p className="text-center">Your listings drown on other platforms in a sea of 1000s of listings. The Biovector helps them stay afloat.</p>
					</div>
					<div className="flex flex-col align-items w-96 items-center mx-auto mt-4 pt-8 border-t-2">
						<div className="w-20 h-20 bg-gray-400" />
						<h2 className="text-xl">Targeted listings</h2>
						<p className="text-center">Your listings drown on other platforms in a sea of 1000s of listings. The Biovector helps them stay afloat.</p>
					</div>
				</div>
			</div>
		</section>

		
	</Layout>
  )
}