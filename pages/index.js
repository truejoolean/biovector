import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import JobListItem from '../components/jobListItem'
import Layout from '../components/layout'
import FilterSection from '../components/filterSection'
import { fetchAPI } from "../lib/api";
import React, { useState, useReducer } from 'react';
import { processJobs } from '../util/makePretty.js';
import GeneralModal from '../components/generalModal.js';


// import t from '../locales/translator';
import { translate } from '../util/translator.js';
// import de from '../locales/de';

// import { getAllJobsData, getPosts } from '../lib/jobs'

// const siteTitle = "Biotech Jobs Germany | biovector.de | Biotechnology"

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

let show = false;

export default function Home({ listings, allCities, allStates }) {
	const [filterState, filterDispatch] = useReducer(filterReducer, filterInitState);
	const router = useRouter();
	const { locale } = router; // is this equal to const locale = router.locale ? 
	const lang = locale === 'en' ? 'en' : 'de'

	console.log("number of posts: ", listings.length)

	// console.log("allCities: ", allCities);
	// console.log(filterState.search)
	// console.log(filterState.city)
	// console.log(listings)

	function showMailingPopup() {
		console.log("showMailingPopup")

	}

	const [isShown, setIsShown] = useState(false);

	  const showModal = () => {
	    // console.log("showModal called")
	    setIsShown(true)
	    plausible('newsletter-signup')
	  }

	  function closeModal () {
	    // console.log(window.innerHeight)
	    setIsShown(false)
	    // console.log("closeModal called")
	  }

  return (
	<Layout bg="bg-gray-100" footer={true} navbarAbsolute={true}>
		<Head>
			<link rel="alternate" hreflang="en" href="https://biovector.de/"/>
			<link rel="alternate" hreflang="de" href="https://biovector.de/de"/>
			<link rel="alternate" hreflang="x-default" href="https://biovector.de/"/>
{/*
      <meta name="image" property='og:image' content="https://biovector.de/images/microscope.png" />
      <meta property='og:title' content='Biovector | Biotech Jobs Germany | Biotechnology'/>
			<meta property='og:description' content="The Biovector collects Germany's top vacancies for biotechnology, ranging from theses in startups over working student opportunities to consulting careers."/>
			<meta property='og:url' content='https://biovector.de'/>
*/}


<title>Biovector | Biotech Jobs Germany | Biotechnology</title>
<meta name="description" content="The Biovector collects Germany's top vacancies for biotechnology, ranging from theses in startups over working student opportunities to consulting careers." />


<meta property="og:url" content="https://biovector.de/" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Biovector | Biotech Jobs Germany | Biotechnology" />
<meta property="og:description" content="The Biovector collects Germany's top vacancies for biotechnology, ranging from theses in startups over working student opportunities to consulting careers." />
<meta property="og:image" content="https://biovector.de/images/microscope.png" />

<meta name="twitter:card" content="summary_large_image" />
<meta property="twitter:domain" content="biovector.de" />
<meta property="twitter:url" content="https://biovector.de/" />
<meta name="twitter:title" content="Biovector | Biotech Jobs Germany | Biotechnology" />
<meta name="twitter:description" content="The Biovector collects Germany's top vacancies for biotechnology, ranging from theses in startups over working student opportunities to consulting careers." />
<meta name="twitter:image" content="https://biovector.de/images/microscope.png" />

      

			<title>{translate("sitetitle", lang)}</title>
			<meta name="description" content={translate("pageMetaTitle", lang)} />
		</Head>
		<GeneralModal closeFunc={closeModal} isShown={isShown} />
		<div className="bannerHomePage">
			<div className="mx-auto max-screen-lg md:w-11/12 py-32">
				<h1 className="text-5xl md:text-3xl font-semibold inline-block p-2" style={{ background: 'rgba(255,255,255,.9)' }}>{translate("tagline", lang)}</h1>
			</div>
		</div>
		<section className="md:hidden sm:hidden newsletter lg:w-11/12 max-screen-lg mx-auto mt-4 flex justify-around">
			<div className="w-11/12 mr-4" onClick={() => plausible('facebook-click')}>
				<a href="https://www.facebook.com/biovectorJobs" target="_blank">
					<button
					className="justify-center items-center flex w-full bg-blue-700 text-white rounded-lg px-4 py-4 md:py-2 md:text-xs text-xl">
						<img src="/images/icons/facebook.png" className="h-6 mr-4" />Get your dream job right to your Facebook feed!
					</button>
				</a>
			</div>
			<div className="w-11/12" onClick={() => plausible('twitter-click')}>
				<a href="https://twitter.com/biovector_jobs" target="_blank">
					<button
					className="justify-center items-center flex w-full bg-blue-700 text-white rounded-lg px-4 py-4 md:py-2 md:text-xs text-xl">
						<img src="/images/icons/twitter.png" className="h-6 mr-4" />Get your dream job right to your Twitter feed!
					</button>
				</a>
			</div>
		{/*
			<div>
				<button
				onClick={showModal}
				className="justify-center items-center flex w-full bg-blue-700 text-white rounded-lg px-4 py-4 md:py-2 md:text-xs text-xl">
					<img src="/images/icons/bell.svg" className="w-7 mr-4" />Click here to receive the job posts to your inbox!
				</button>
			</div>
		*/}
		</section>
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
    fetchAPI("/jobs?_limit=-1&_sort=publishedAt:DESC") // articles are now called listings
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
    // revalidate: 1,
  };
}



