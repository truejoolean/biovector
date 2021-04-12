import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import JobListItem from '../components/jobListItem'
import Layout from '../components/layout'
import FilterSection from '../components/filterSection'
import { fetchAPI } from "../lib/api";
import React, { useState, useReducer } from 'react';
import { processJobs } from '../util/makePretty.js'

// import t from '../locales/translator';
import { translate } from '../util/translator.js';
// import de from '../locales/de';

// import { getAllJobsData, getPosts } from '../lib/jobs'

// const siteTitle = "Biotech Jobs Germany | biovector.de | Biotechnology"

const filterInitState = {
	search: "",
	city: 'blank',
	state: 'blank',
	extra: ['thesis', 'fullVacancy', 'workingStudent', 'internship'],
	employerType: ['industry', 'startup', 'academia', 'consulting'],
	language: ['german', 'english']
}

const filterReducer = (state, { payload, actionType }) => {
	switch (actionType) {
		case 'CHECKBOX_SET_FILTER': {
			const { value, prop, filterTitle } = payload;
			return {
				...state,
				[filterTitle]: value === false
					? state[filterTitle].filter(option => option !== prop) // nimm aus state raus
					: [...state[filterTitle], prop] // tu in state rein
			};
		}
		case 'DROPDOWN_SET_FILTER': {
			const { filterTitle, prop } = payload;
			// console.log({...state, [filterTitle]: prop})
			return {
				...state,
				[filterTitle]: prop
			};
		}

		case 'SEARCHBAR_SET_FILTER': {
			// console.log(payload)
			const prop = payload.prop;
			return {
				...state,
				search: prop
			}
		}

		case 'RESET_FILTER': {
			const { filterTitle } = payload;
			return {
				...state,
				[filterTitle]: filterInitState[filterTitle]
			}
		}

		// case 'RESET_FILTER': {
		// 	let newPayload = {}
		// 	filterReducer({ // or filterDispatch??

		// 	}) 
		// }

		default:
			return state;
	}
}

export default function Home({ listings, allCities, allStates }) {
	const [filterState, filterDispatch] = useReducer(filterReducer, filterInitState);
	const router = useRouter();
	const { locale } = router; // is this equal to const locale = router.locale ? 
	const lang = locale === 'en' ? 'en' : 'de'

	// console.log("allCities: ", allCities);
	// console.log(filterState.search)
	// console.log(filterState.city)
	// console.log(listings)

	function showMailingPopup() {
		console.log("showMailingPopup")
		!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/ac98e47188302a54db3dff986/2fa6448b43f36c8da429d1fbe.js");
	}

  return (
	<Layout bg="bg-gray-100" footer={true} navbarAbsolute={true}>
		<Head>
			<script id="mcjs" dangerouslySetInnerHTML={{__html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/ac98e47188302a54db3dff986/2fa6448b43f36c8da429d1fbe.js");`}} />

			<link rel="alternate" hreflang="en" href="https://biovector.de/"/>
			<link rel="alternate" hreflang="de" href="https://biovector.de/de"/>
			<link rel="alternate" hreflang="x-default" href="https://biovector.de/"/>

			<title>{translate("sitetitle", lang)}</title>
			<meta name="description" content={translate("pageMetaTitle", lang)} />
		</Head>
		<div className="bannerHomePage">
			<div className="mx-auto max-screen-lg md:w-11/12 py-32">
				<h1 className="text-5xl md:text-3xl font-semibold inline-block p-2" style={{ background: 'rgba(255,255,255,.9)' }}>{translate("tagline", lang)}</h1>
			</div>
		</div>
		{/*<section className="newsletter lg:w-11/12 max-screen-lg mx-auto mt-4">
			<button onClick={showMailingPopup} className="w-full bg-blue-700 text-white rounded-lg px-4 py-4 md:py-2 md:text-xs text-xl">Click here to receive the job posts to your inbox!</button>
		</section>*/}
		<section className="jobsAndFilter lg:w-11/12 max-screen-lg mx-auto mt-4">
			<div className="w-full" style={{ color:'#666' }}>
				<FilterSection allCities={allCities} allStates={allStates} filterState={filterState} filterDispatch={filterDispatch} />
			</div>
			<ul className="w-full mt-4">
			{/*console.log("companyCity: " + listings[0].companyCity)*/}
				{listings
					.filter(({ employerType }) => filterState.employerType.includes(employerType))
					.filter(({ companyCity }) => filterState.city === 'blank' ? filterState : filterState.city.toLowerCase() === companyCity.toLowerCase())
					.filter(({ companyState }) => filterState.state === 'blank' ? filterState : filterState.state.toLowerCase() === companyState.toLowerCase())
					.filter(({ extra }) => filterState.extra.includes(extra))
					.filter(({ title, companyName }) => filterState.search === "" ? filterState : (title.toLowerCase().includes(filterState.search.toLowerCase()) || title.toLowerCase().includes(companyName.toLowerCase())))
					.map((listing, i) => <JobListItem listing={listing} />)}
			</ul>
		</section>
	</Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const listingsAsArray = await Promise.all([
    fetchAPI("/jobs?_sort=publishedAt:DESC") // articles are now called listings
  ]);

  let listingsPre = listingsAsArray[0]

  // The filter section is rendered based on the available cities
  let allCities = [];
  let allStates = [];

  let listingsPost = processJobs(listingsPre)

  for (let i = 0; i < listingsPost.length; i++) {
  	if (!allCities.includes(listingsPost[i].companyCity.toLowerCase())) allCities.push(listingsPost[i].companyCity.toLowerCase());
  	if (!allStates.includes(listingsPost[i].companyState.toLowerCase() )) allStates.push(listingsPost[i].companyState.toLowerCase());
  }

  return {
    props: { listings: listingsPost , allCities, allStates },
    revalidate: 60,
  };
}