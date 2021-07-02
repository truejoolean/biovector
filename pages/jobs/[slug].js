import React, { useState } from 'react';
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
// import Image from "../../components/image";
// import Modal from "../../components/modal"
import { getStrapiMedia } from "../../lib/media";
import Router from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { prettify, processOneJob } from '../../util/makePretty.js'
import Modal from '../../components/modal'

import { useRouter } from 'next/router'
import { translate } from '../../util/translator'

import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// import { ReactElement } from 'react';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

let show = false;

export default function Post({ listing }) {

  const router = useRouter();
  const { locale } = router; // is this equal to const locale = router.locale ? 
  const lang = locale === 'en' ? 'en' : 'de'

  // console.log(listing)
  // console.log("http://localhost:1337" + listing.pdfFile.url)
  // console.log("http://localhost:1337" + listing.image.formats.thumbnail.url)
  let employmentType = "OTHER"; // preprocess for Google For Jobs
  switch(listing.extra) {
    case "fullVacancy":
      employmentType = "FULL_TIME";
      break;
    case "internship":
      employmentType = "INTERN";
      break;
    case "workingStudent":
      employmentType = "PART_TIME";
      break;
    default:
      break;
  }

  // console.log("listing.image.url", listing.image.url);

  const structuredData = {
    "@type": "JobPosting",
    "@context": "https://schema.org/",
    "title": listing.title,
    "description": listing.description,
    "datePosted": listing.publishedAt, // todo: check if correct format
    "validThrough": listing.validUntil,
    "employmentType": employmentType,
    "hiringOrganization": {
      "@type": "Organization",
      "name": listing.companyName,
      // "logo": "https://api.biovector.de" + listing.image.formats.thumbnail.url,
      "logo": "https://api.biovector.de" + listing.image.url,
      "sameAs": "http://biovector.de" // todo
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": listing.companyStreet,
        "addressLocality": listing.companyCity,
        "addressRegion": listing.companyState,
        "postalCode": listing.companyPostalCode,
        "addressCountry": "de"
      }
    }
  }
  const imageUrl = getStrapiMedia(listing.image);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    // console.log("TRIGGA")
    setNumPages(numPages);
  }

  function applyButtonClicked() {
    console.log("listing: ", listing)
    console.log('applyButtonClicked for plausible')
    plausible('apply-button-click', {props: {title: listing.title + " " + listing.companyName, company: listing.companyName }})
  }

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
  // console.log("SLUG: ", listing.slug);
  console.log("listing.image: " + listing.image.url);
  return (
    <Layout footer={false} navbarAbsolute={false}>
      <Head>

        <link rel="alternate" hreflang="en" href={"https://biovector.de/jobs/" + listing.slug}/>
        <link rel="alternate" hreflang="de" href={"https://biovector.de/de/jobs/" + listing.slug}/>
        <link rel="alternate" hreflang="x-default" href={"https://biovector.de/jobs/" + listing.slug}/>


        <title>{listing.title}</title>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}/>
        <meta name="description" content={listing.description} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@biovector_jobs" />
        <meta name="twitter:title" content={listing.title} />
        <meta name="twitter:description" content={listing.description} />
        <meta name="twitter:image" content={"https://api.biovector.de" + listing.image.url} />

        <meta property="og:title" content={listing.title} />
        <meta property="og:image" content={"https://api.biovector.de" + listing.image.url} />
        <meta property="og:description" content={listing.description} />
        <meta property="og:url" content={"https://biovector.de/listing/jobs" + listing.slug} />
        

      </Head>
      <Modal job={true} closeFunc={closeModal} isShown={isShown} instructions={listing.applicationInstructions}/>
      <section className="max-screen-lg flex mx-auto md:mt-4">
      <Link href="/"><a><div className=""><img src="/images/icons/left-arrow.svg" alt="left arrow icon" className="w-10 back-button"/></div></a></Link>

        <div className="header mt-8 flex items-center">
          <div>
            <Image width="250" height="250" quality="100" src={getStrapiMedia(listing.image)} alt={listing.companyName + " logo"}/>

          </div>
          <div className="ml-8 text-gray-800">
          {listing.companyName}
            <h1 className="text-4xl lg:text-2xl md:text-lg">
              {listing.title}
            </h1>
            <p className="text-base">{prettify(listing.companyCity)} · {prettify(listing.employerType)}</p>
          </div>
        </div>
      </section>
      <hr className="my-4 max-screen-lg mx-auto"/>

        {/*<p className="text-gray-800">{listing.content}</p>*/}
        {listing.usePdf ? (<div className="max-screen-lg mx-auto text-gray-800">
          <Document
            file={"https://api.biovector.de" + listing.pdfFile.url}
            onLoadSuccess={onDocumentLoadSuccess}
            className="max-screen-lg"
            >
            {[1,2].map(page => (
            <Page pageNumber={page} width={1000} />
             ))}
          </Document>
          <hr /><hr className="mt-2" />
        </div>)
          : <section className="max-screen-md mx-auto text-gray-800 md:w-11/12"><ReactMarkdown style={{ color:'#666' }} source={listing.content} escapeHtml={false} className="markdown text-gray-800"/></section>
        }

        <section className="max-screen-md mx-auto text-gray-800">
        <div className="flex mt-6 sm:block">
          <div className="w-1/2 border-l-4 pl-4">
            <h2 className="text-2xl">{translate("contact", lang)}</h2>
            {listing.firstName} {listing.lastName}
            <br />{listing.telephoneNumber}
            <br />{listing.mail}<br />
          </div>
          <div className="w-1/2 border-l-4 pl-4">
            <h2 className="text-2xl">{translate("location", lang)}</h2>
              {listing.companyName}<br />
              {listing.companyStreet}<br />
              {listing.companyPostalCode} {listing.companyCity.charAt(0).toUpperCase() + listing.companyCity.slice(1)}<br />
              {listing.companyState.charAt(0).toUpperCase() + listing.companyState.slice(1)}
          </div>
        </div>
        {/*<Modal show={show} handleClose={hideModal}><p>Modal</p></Modal>*/}
        

        <div>
        <div className="fixed left-0 bottom-0 w-full h-20 border-t-2 bg-white">
          <div className="flex justify-end" onClick={applyButtonClicked}>
          {
          listing.redirectForApplication ?
              <Link href={listing.redirectTo}><a target="_blank" /*rel="noopener noreferrer"*/><button
              // onClick={showModal}
              className="track-apply-button p-3 my-3 mr-8 md:w-full text-white bg-blue-700 text-lg">{translate("applynow", lang)} {listing.companyName}</button>
              </a></Link>
              : <button
              // onClick={showModal}
              className="track-apply-button p-3 my-3 mr-8 md:w-full text-white bg-blue-700 text-lg" onClick={showModal}>Apply now at {listing.companyName}</button>}
          </div>
        </div>

        <div className="h-20 w-full" /></div>
      </section>
    </Layout>

    )
}


export async function getStaticPaths() {
  const jobs = await fetchAPI("/jobs?_limit=-1");
  let paths = [];

  for (let i = 0; i < jobs.length; i++) {
    paths.push({params: { slug: jobs[i].slug }, locale: 'en'});
    paths.push({params: { slug: jobs[i].slug }, locale: 'de'});
  }

  return {
    paths,
    fallback: false,
    // revalidate: 10
  }
/*
  return {
    paths:
    jobs.map((job) => ({
      params: { slug: job.slug}, locale: 'en'
    }))
    fallback: false,
  };*/
}

export async function getStaticProps({ params }) {
  const data = await fetchAPI(
    `/jobs?slug=${params.slug}`
  ); // not exactly sure about &status=published
  // const categories = await fetchAPI("/categories");
  let listing = data[0];
  listing = processOneJob(listing)
  // console.log(listing)

  return {
    props: { listing },
    revalidate: 10,
  };
}