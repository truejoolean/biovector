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
	country: ['ger'],
	city: ['muc'],
	employerType: ['corporate', 'startup', 'academia'],
	language: ['de', 'en'],
}

const filterReducer = (state, { payload, actionType }) => {
	switch (actionType) {
		case 'SET_FILTER': {
			const { value, prop, filterTitle } = payload;
			return {
				...state,
				[filterTitle]: value === false
					? state[filterTitle].filter(option => option !== prop) // nimm aus state raus
					: [...state[filterTitle], prop] // tu in state rein
			};
		}

		default:
			return state;
	}
}

export default function Home({ listings }) {
	const [filterState, filterDispatch] = useReducer(filterReducer, filterInitState);

	// const [filters, setFilters] = useState(0);
	{/*
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	function handleChange() {
		console.log("handle Change called in index.js! this keyword: " + this);
	}*/}

	let filters = []

	function filterHandler(newFilter) {
		console.log("filterHandler called in index.js");
		if (filters.includes(newFilter)) {
			filters = filters.filter(e => e !== newFilter)
		} else {
			console.log("pushing in new filter: " + newFilter)
			filters.push(newFilter)
		}
		console.log("New Filters: ", filters);
	}

	console.log(listings)
  return (
	<Layout bg="bg-gray-100">
		<Head><title>{siteTitle}</title></Head>

		<div style={{ backgroundImage: 'url(/images/lab.png)', backgroundPosition: 'center' }}>
			<div className="mx-auto max-w-screen-lg py-32">
				<h1 className="text-5xl font-semibold inline-block p-2" style={{ background: 'rgba(255,255,255,.9)' }}>Find Germany's most exciting jobs in Biotech.</h1>
			</div>
		</div>

		{/*
		<div className="sloganContainer absolute top-40 z-40">
				<span className="slogantext">Because the right fit is a necessity.</span><br />
				<span className="slogantext">Not a luxury.</span><br />
				<span className="slogantext">Biovector.</span>
		</div>
		*/}
		<section className="jobsAndFilter max-w-screen-lg mx-auto mt-16">
			<div className="mb-4">
				<input type="text" placeholder="Anything specific?" className="w-full p-2 border-gray-500 border-b-2"/>
			</div>
			<div className="border w-full">
				<FilterSection filterState={filterState} filterDispatch={filterDispatch} />
			</div>
			<ul className="w-full mt-4">
				{listings
					// .filter(({ employerType }) => filterState.employerType.includes(employerType))
					.map((listing, i) => <JobListItem listing={listing} />)}
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