import React, { useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router';
import Layout from '../components/layout'
import Modal from '../components/modal'

import { ReactElement } from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { translate } from '../util/translator'


const siteTitle = "Find talents for your biotech endeavours | Biotechnology Jobs Germany"

const tile = "mx-auto hover:shadow-lg hover:bg-gray-100 duration-300"

export default function FindTalent() {
	const router = useRouter();
	const { locale } = router; // is this equal to const locale = router.locale ? 
	const lang = locale === 'en' ? 'en' : 'de'

	const [isShown, setIsShown] = useState(false);

	const showModal = () => {
		// console.log("showModal called")
		setIsShown(true)
	}

	function closeModal () {
		// console.log(window.innerHeight)
		setIsShown(false)
		// console.log("closeModal called")
	}

	return (
	<Layout footer={true} navbarAbsolute={true}>
		<Head>

			<link rel="alternate" hreflang="en" href="https://biovector.de/findTalent"/>
			<link rel="alternate" hreflang="de" href="https://biovector.de/de/findTalent"/>
			<link rel="alternate" hreflang="x-default" href="https://biovector.de/findTalent"/>

			<title>{siteTitle}</title>
			<meta name="description" content={translate("findtalentmetatitle", lang)} />
		</Head>
		<Modal closeFunc={closeModal} isShown={isShown} instructions="aa"/>
		<section>
			<div className="bannerFindTalent">
				<div className="mx-auto max-screen-lg md:w-11/12 py-32">
					<h1 className="text-5xl md:text-2xl font-semibold inline-block p-2 w-3/4" style={{ background: 'rgba(255,255,255,.9)' }}>{translate("talenttagline", lang)}</h1>
				</div>
			</div>
		</section>
		<section className="mt-8 w-screen-lg">
			<h2 className="text-4xl text-center font-semibold">{translate("hereswhy", lang)}</h2>
			<div className="flex md:block mx-auto max-screen-lg mt-8">
				<div className="w-1/2 md:w-full border-r-2 md:border-0">
					<div className={tile}>
						<div className="flex flex-col align-items w-96 items-center mx-auto h-64">
							<img className="w-24" src="/images/icons/icon_target.png" />
							<h2 className="text-xl mt-2">{translate("targetedlistingstitle", lang)}</h2>
							<p className="text-center mt-2">{translate("targetedlistingsdescription", lang)}</p>
						</div>
					</div>
					<hr className="md:hidden"/>
					<div className={tile}>
						<div className="flex flex-col align-items w-96 items-center mx-auto pt-4 h-64">
							<img className="w-24" src="/images/icons/icon_pricing.png" />
							<h2 className="text-xl mt-2">{translate("fairpricingtitle", lang)}</h2>
							<p className="text-center mt-2">{translate("fairpricingdescription", lang)}</p>
						</div>
					</div>
				</div>
				<div className="w-1/2 md:w-full">
					<div className={tile}>
						<div className="flex flex-col align-items w-96 items-center mx-auto h-64">
							<img className="w-24" src="/images/icons/icon_scientist.png" />
							<h2 className="text-xl mt-2">{translate("focussedexpertisetitle", lang)}</h2>
							<p className="text-center mt-2">{translate("focussedexpertisedescription", lang)}</p>
						</div>
					</div>
					<hr className="md:hidden" />
					<div className={tile}>
						<div className="flex flex-col align-items w-96 items-center mx-auto pt-4 h-64">
							<img className="w-24" src="/images/icons/icon_global.png" />
							<h2 className="text-xl mt-2">{translate("internationaltalentstitle", lang)}</h2>
							<p className="text-center mt-2">{translate("internationaltalentsdescription", lang)}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="mt-8" style={{backgroundColor: '#FFE01A'}}>
			<h3 className="max-screen-md mx-auto text-bold text-4xl md:text-2xl text-center py-8 px-4 flex items-center justify-center">{translate("completelyfree", lang)}</h3>
		</section>
		<div className="max-screen-md mx-auto mt-4">
			<button onClick={showModal} className="flex w-full justify-center bg-blue-700 text-white rounded-lg px-4 py-4 md:py-2 md:text-xs text-2xl font-bold">{translate("postnow", lang)}</button>
		</div>
	{/*
		<section className="mt-16 max-screen-lg mx-auto">
			<h2 className="text-4xl text-center font-semibold">{translate("featuresandpricing", lang)}</h2>
			<table className="mt-4 w-full">
				<tr>
					<th className="w-3/12"></th>
					<th style={{backgroundColor: '#032742'}} className="w-4/12 bg-blue-900 text-white text-3xl font-normal border p-4">Basic</th>
					<th style={{backgroundColor: '#032742'}} className="w-4/12 bg-blue-900 text-white text-3xl font-normal border p-4">Pro</th>
				</tr>
				<tr>
					<td style={{backgroundColor: '#032742'}} className="w-3/12 bg-blue-900 text-white text-xl p-4 text-center font-light">{translate("price", lang)}</td>
					<td className="border w-4/12 text-center text-2xl hover:shadow-lg hover:bg-gray-100 duration-300">350<span className="text-xs font-normal">€</span></td>
					<td className="border w-4/12 text-center text-2xl">750<span className="text-xs font-normal">€</span></td>
				</tr>
				<tr>
					<td style={{backgroundColor: '#032742'}} className="w-3/12 bg-blue-900 text-white text-xl p-4 text-center font-light border">{translate("months", lang)}</td>
					<td className="border w-4/12 text-center font-bold text-2xl hover:shadow-lg hover:bg-gray-100 duration-300">3</td>
					<td className="border w-4/12 text-center font-bold text-2xl">6</td>
				</tr>
				<tr>
					<td style={{backgroundColor: '#032742'}} className="w-3/12 bg-blue-900 text-white text-xl p-4 text-center font-light border">{translate("targetedads", lang)}</td>
					<td className="border w-4/12 text-center font-bold text-2xl hover:shadow-lg hover:bg-gray-100 duration-300">70<span className="text-xs font-normal">€</span></td>
					<td className="border w-4/12 text-center font-bold text-2xl">120<span className="text-xs font-normal">€</span></td>
				</tr>
				<tr>
					<td style={{backgroundColor: '#032742'}} className="w-3/12 bg-blue-900 text-white text-xl p-4 text-center font-light border">{translate("extrapostgoogleads", lang)}</td>
					<td className="border w-4/12 text-center font-bold text-2xl hover:shadow-lg hover:bg-gray-100 duration-300"><img className="mx-auto" src="/images/icons/icon_tick.svg" /></td>
					<td className="border w-4/12 text-center font-bold text-2xl"><img className="mx-auto" src="/images/icons/icon_tick.svg" /></td>
				</tr>
				<tr>
					<td style={{backgroundColor: '#032742'}} className="w-3/12 bg-blue-900 text-white text-xl p-4 text-center font-light border">{translate("admanagement", lang)}</td>
					<td className="border w-4/12 text-center font-bold text-2xl hover:shadow-lg hover:bg-gray-100 duration-300"><img className="mx-auto" src="/images/icons/icon_tick.svg" /></td>
					<td className="border w-4/12 text-center font-bold text-2xl"><img className="mx-auto" src="/images/icons/icon_cross.svg" /></td>
				</tr>
				<tr>
					<td className="w-3/12"></td>
					<td style = {{backgroundColor: '#FFE01A'}} onClick={showModal} className="w-4/12 text-center font-bold text-2xl text-gray-900 p-4 hover:shadow-lg hover:bg-gray-100 cursor-pointer track-order-now">{translate("order", lang)}</td>
					<td className="border w-4/12 text-center font-bold text-2xl">{translate('comingsoon', lang)}</td>
				</tr>
			</table>
		</section>
	*/}

		
	</Layout>
  )
}