import React, { useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Modal from '../components/modal'

import { ReactElement } from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const siteTitle = "Biovector | Biotechnology Jobs Germany"

const tile = "mx-auto hover:shadow-lg hover:bg-gray-100 duration-300"

export default function FindTalent() {

	const [isShown, setIsShown] = useState(false);

	const showModal = () => {
		console.log("showModal called")
		setIsShown(true)
	}

	function closeModal () {
		console.log(window.innerHeight)
		setIsShown(false)
		console.log("closeModal called")
	}

	return (
	<Layout footer={true}>
		<Head>
			<title>{siteTitle}</title>
			<meta name="description" content="The Biovector lists biotechnology jobs and vacancies and thus connects employees and employers in this nascent field." />
		</Head>
		<Modal closeFunc={closeModal} isShown={isShown} instructions="aa"/>
		<section>
			<div style={{ backgroundImage: 'url(/images/female_scientist.jpg)', backgroundPosition: 'center', backgroundSize: 'cover' }}>
				<div className="mx-auto max-screen-lg md:w-11/12 py-32">
					<h1 className="text-5xl md:text-2xl font-semibold inline-block p-2 w-3/4" style={{ background: 'rgba(255,255,255,.9)' }}>Grow your biotech company with the best talents.</h1>
				</div>
			</div>
		</section>
		<section className="mt-8 w-screen-lg">
			<h2 className="text-4xl text-center font-semibold">We are unlike any other job platform. Here's why:</h2>
			<div className="flex md:block mx-auto max-screen-lg mt-8">
				<div className="w-1/2 md:w-full border-r-2 md:border-0">
					<div className={tile}>
						<div className="flex flex-col align-items w-96 items-center mx-auto h-64">
							<img className="w-24" src="/images/icons/icon_target.png" />
							<h2 className="text-xl mt-2">Targeted listings</h2>
							<p className="text-center mt-2">Other platforms drown your expensive listing in a sea of 1000s of job postings. The Biovector's selectivity and filtering helps them stay afloat.</p>
						</div>
					</div>
					<hr className="md:hidden"/>
					<div className={tile}>
						<div className="flex flex-col align-items w-96 items-center mx-auto pt-4 h-64">
							<img className="w-24" src="/images/icons/icon_pricing.png" />
							<h2 className="text-xl mt-2">Fair pricing</h2>
							<p className="text-center mt-2">We want you to invest into amazing talents, not recruiters.</p>
						</div>
					</div>
				</div>
				<div className="w-1/2 md:w-full">
					<div className={tile}>
						<div className="flex flex-col align-items w-96 items-center mx-auto h-64">
							<img className="w-24" src="/images/icons/icon_scientist.png" />
							<h2 className="text-xl mt-2">Focussed expertise</h2>
							<p className="text-center mt-2">Having gathered experience in multiple biotechnology enterprises, we know the intricacies of this special labor market.</p>
						</div>
					</div>
					<hr className="md:hidden" />
					<div className={tile}>
						<div className="flex flex-col align-items w-96 items-center mx-auto pt-4 h-64">
							<img className="w-24" src="/images/icons/icon_global.png" />
							<h2 className="text-xl mt-2">International talents</h2>
							<p className="text-center mt-2">We attract high-potentials from around the world to Germany</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="mt-8" style={{backgroundColor: '#FFE01A'}}>
			<h3 className="max-screen-md mx-auto text-bold text-4xl md:text-2xl text-center py-8 px-4 flex items-center justify-center">We consider it integral to our mission to feature listings for student academia for free.</h3>
		</section>
		<section className="mt-16 max-screen-lg mx-auto">
			<h2 className="text-4xl text-center font-semibold">Features & Pricing</h2>
			<table className="mt-4 w-full">
				<tr>
					<th className="w-3/12"></th>
					<th style={{backgroundColor: '#032742'}} className="w-4/12 bg-blue-900 text-white text-3xl font-normal border p-4">Basic</th>
					<th style={{backgroundColor: '#032742'}} className="w-4/12 bg-blue-900 text-white text-3xl font-normal border p-4">Pro</th>
				</tr>
				<tr>
					<td style={{backgroundColor: '#032742'}} className="w-3/12 bg-blue-900 text-white text-xl p-4 text-center font-light">Price</td>
					<td className="border w-4/12 text-center text-2xl hover:shadow-lg hover:bg-gray-100 duration-300">350<span className="text-xs font-normal">€</span></td>
					<td className="border w-4/12 text-center text-2xl">750<span className="text-xs font-normal">€</span></td>
				</tr>
				<tr>
					<td style={{backgroundColor: '#032742'}} className="w-3/12 bg-blue-900 text-white text-xl p-4 text-center font-light border">Months of exposure</td>
					<td className="border w-4/12 text-center font-bold text-2xl hover:shadow-lg hover:bg-gray-100 duration-300">3</td>
					<td className="border w-4/12 text-center font-bold text-2xl">6</td>
				</tr>
				<tr>
					<td style={{backgroundColor: '#032742'}} className="w-3/12 bg-blue-900 text-white text-xl p-4 text-center font-light border">Investment into targeted advertisement</td>
					<td className="border w-4/12 text-center font-bold text-2xl hover:shadow-lg hover:bg-gray-100 duration-300">70<span className="text-xs font-normal">€</span></td>
					<td className="border w-4/12 text-center font-bold text-2xl">120<span className="text-xs font-normal">€</span></td>
				</tr>
				<tr>
					<td style={{backgroundColor: '#032742'}} className="w-3/12 bg-blue-900 text-white text-xl p-4 text-center font-light border">Extra post on Google Jobs</td>
					<td className="border w-4/12 text-center font-bold text-2xl hover:shadow-lg hover:bg-gray-100 duration-300"><img className="mx-auto" src="/images/icons/icon_tick.svg" /></td>
					<td className="border w-4/12 text-center font-bold text-2xl"><img className="mx-auto" src="/images/icons/icon_tick.svg" /></td>
				</tr>
				<tr>
					<td style={{backgroundColor: '#032742'}} className="w-3/12 bg-blue-900 text-white text-xl p-4 text-center font-light border">Manual management of advertisement campaigns</td>
					<td className="border w-4/12 text-center font-bold text-2xl hover:shadow-lg hover:bg-gray-100 duration-300"><img className="mx-auto" src="/images/icons/icon_tick.svg" /></td>
					<td className="border w-4/12 text-center font-bold text-2xl"><img className="mx-auto" src="/images/icons/icon_cross.svg" /></td>
				</tr>
				<tr>
					<td className="w-3/12"></td>
					<td style = {{backgroundColor: '#FFE01A'}} onClick={showModal} className="w-4/12 text-center font-bold text-2xl text-gray-900 p-4 hover:shadow-lg hover:bg-gray-100 cursor-pointer track-order-now">Order now</td>
					<td className="border w-4/12 text-center font-bold text-2xl">Coming soon!</td>
				</tr>
			</table>
		</section>

		
	</Layout>
  )
}