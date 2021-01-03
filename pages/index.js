import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import JobListItem from '../components/jobListItem'
import Layout from '../components/layout'
import NavBar from '../components/navbar'
import FilterSection from '../components/filterSection'
import { fetchAPI } from "../lib/api";
import React, { useState, useReducer } from 'react';

// import { getAllJobsData, getPosts } from '../lib/jobs'

const siteTitle = "Biovector | Biotechnology Jobs Germany"

const filterInitState = {
	city: 'blank',
	state: 'blank',
	extra: ['thesis', 'full vacancy', 'working student', 'internship'],
	employerType: ['corporate', 'startup', 'academia', 'consulting'],
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
			console.log({...state, [filterTitle]: prop})
			return {
				...state,
				[filterTitle]: prop
			};
		}

		case 'RESET_FILTER': {
			const { filterTitle } = payload;
			return {
				...state,
				[filterTitle]: filterInitState[filterTitle]
			}
		}

		default:
			return state;
	}
}

export default function Home({ listings }) {
	const [filterState, filterDispatch] = useReducer(filterReducer, filterInitState);

  return (
	<Layout bg="bg-gray-100">
		<Head><title>{siteTitle}</title></Head>

		<div style={{ backgroundImage: 'url(/images/lab.png)', backgroundPosition: 'center' }}>
			<div className="mx-auto max-w-screen-lg py-32">
				<h1 className="text-5xl font-semibold inline-block p-2" style={{ background: 'rgba(255,255,255,.9)' }}>Find Germany's most exciting jobs in Biotech.</h1>
			</div>
		</div>

		<section className="jobsAndFilter max-w-screen-lg mx-auto mt-16">
			<div className="w-full">
				<FilterSection filterState={filterState} filterDispatch={filterDispatch} />
			</div>
			<ul className="w-full mt-4">
			{console.log(listings[0].city)}
				{listings
					.filter(({ employerType }) => filterState.employerType.includes(employerType))
					// .filter(({ city }) => filterState.city === city)
					.filter(({ city }) => filterState.city === 'blank' ? filterState : filterState.city === city)
					.map((listing, i) => <JobListItem listing={listing} />)}
			</ul>
		</section>
		<section>
			Footer
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