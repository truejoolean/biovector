import React, { useState } from 'react';
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Image from "../../components/image";
// import Modal from "../../components/modal"
import { getStrapiMedia } from "../../lib/media";
import Router from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { prettify, processOneJob } from '../../util/makePretty.js'
import Modal from '../../components/modal'

import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// import { ReactElement } from 'react';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

let show = false;

export default function Post({ listing }) {

  console.log(listing)
  // console.log("http://localhost:1337" + listing.pdfFile.url)
  // console.log("http://localhost:1337" + listing.image.formats.thumbnail.url)
  const structuredData = {
    "@type": "JobPosting",
    "@context": "https://schema.org/",
    "title": listing.title,
    "description": listing.description,
    "datePosted": listing.publishedAt, // todo: check if correct format
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
    console.log("TRIGGA")
    setNumPages(numPages);
  }

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
    <Layout footer={false}>
      <Head>
        <title>{listing.title} | Biotech Jobs Germany</title>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}/>
        <meta name="description" content={listing.description} />
      </Head>
      <Modal job={true} closeFunc={closeModal} isShown={isShown} instructions={listing.applicationInstructions}/>
      <section className="max-screen-lg flex mx-auto md:mt-4">
      <Link href="/"><a><div className=""><img src="/images/icons/left-arrow.svg" alt="left arrow icon" className="w-10 back-button"/></div></a></Link>

        <div className="header mt-8 flex items-center">
          <div>
            <img src={getStrapiMedia(listing.image)} className="w-60" alt={listing.companyName + " logo"}/>
          </div>
          <div className="ml-8">
          {listing.companyName}
            <h1 className="text-4xl lg:text-2xl md:text-lg">
              {listing.title}
            </h1>
            <p className="text-base text-gray-700">{prettify(listing.companyCity)} · {prettify(listing.employerType)}</p>
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
          : <section className="max-screen-md mx-auto text-gray-800 md:w-11/12"><ReactMarkdown source={listing.content} escapeHtml={false} className="markdown"/></section>
        }

        <section className="max-screen-md mx-auto text-gray-800">
        <div className="flex mt-6 sm:block">
          <div className="w-1/2 border-l-4 pl-4">
            <h2 className="text-2xl">Contact</h2>
            {listing.firstName} {listing.lastName}<br />
            {listing.telephoneNumber}<br />
            {listing.mail}<br />
          </div>
          <div className="w-1/2 border-l-4 pl-4">
            <h2 className="text-2xl">Location</h2>
              {listing.companyName}<br />
              {listing.companyStreet}<br />
              {listing.companyPostalCode} {listing.companyCity.charAt(0).toUpperCase() + listing.companyCity.slice(1)}<br />
              {listing.companyState.charAt(0).toUpperCase() + listing.companyState.slice(1)}
          </div>
        </div>
        {/*<Modal show={show} handleClose={hideModal}><p>Modal</p></Modal>*/}
        

        <div>
        <div className="fixed left-0 bottom-0 w-full h-16 border-t-2 bg-white">
          <div className="flex justify-end">
          {
          listing.redirectForApplication ?
              <Link href={listing.redirectTo}><a target="_blank" /*rel="noopener noreferrer"*/><button
              // onClick={showModal}
              className="track-apply-button p-2 my-2 mr-8 text-white bg-blue-700">Apply now at {listing.companyName}</button>
              </a></Link>
              : <button
              // onClick={showModal}
              className="track-apply-button p-2 my-2 mr-8 text-white bg-blue-700" onClick={showModal}>Apply now at {listing.companyName}</button>}
          </div>
        </div>

        <div className="h-20 w-full" /></div>
      </section>
    </Layout>

    )
}


export async function getStaticPaths() {
  const jobs = await fetchAPI("/jobs");

  return {
    paths: jobs.map((job) => ({
      params: {
        slug: job.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await fetchAPI(
    `/jobs?slug=${params.slug}`
  ); // not exactly sure about &status=published
  // const categories = await fetchAPI("/categories");
  let listing = data[0];
  listing = processOneJob(listing)
  console.log(listing)

  return {
    props: { listing },
    revalidate: 1,
  };
}