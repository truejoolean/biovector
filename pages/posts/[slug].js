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

import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// import { ReactElement } from 'react';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

let show = false;

export default function Post({ listing }) {
  console.log("process.env.STRAPI_URL: ", process.env.NEXT_PUBLIC_STRAPI_API_URL)
  // function showModal() {
  //   console.log('showModal called')
  //   show = true;
  //   console.log("show is now: ", show)
  // }
  // function hideModal() {
  //   console.log("hideModal called")
  //   show = false;
  // }

  // showModal = showModal.bind(this)

  console.log(listing)
  // console.log("http://localhost:1337" + listing.pdfFile.url)
  // console.log("http://localhost:1337" + listing.image.formats.thumbnail.url)
  const structuredData = {
    "@context": "https://schema.org/",
    "@†ype": "JobPosting",
    "title": listing.title,
    "description": listing.content,
    "datePosted": listing.publishedAt, // todo: check if correct format
    "hiringOrganization": {
      "@type": "Organization",
      "name": listing.companyName,
      "logo": "http://localhost:1337" + listing.image.formats.thumbnail.url,
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

  return (
    <Layout footer={false}>
      <Head>
        <title>{listing.title} | Biovector</title>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}/>
        <meta name="description" content={listing.description} />
      </Head>
      <section class="max-w-screen-lg flex mx-auto">
      <div className="absolute" onClick={() => Router.back()}><img src="/images/icons/icon_back.svg" /></div>

        <div class="header mt-8 flex items-center">
          <div>
            <img src={getStrapiMedia(listing.image)} className="w-32"/>
          </div>
          <div className="ml-8">
          {listing.company}
            <h1 className="text-4xl">
              {listing.title}
            </h1>
            <p className="text-base text-gray-700">{listing.state} · {listing.employerType}</p>
          </div>
        </div>
      </section>
      <hr className="my-4 max-w-screen-lg mx-auto"/>

        {/*<p className="text-gray-800">{listing.content}</p>*/}
        {listing.usePdf ? (<div className="max-w-screen-lg mx-auto text-gray-800">
          <Document
            file={"http://localhost:1337" + listing.pdfFile.url}
            onLoadSuccess={onDocumentLoadSuccess}
            className="max-w-screen-lg"
            >
            {[1,2].map(page => (
            <Page pageNumber={page} width={1000} />
             ))}
          </Document>
          <hr /><hr className="mt-2" />
        </div>)
          : <section className="max-w-screen-md mx-auto text-gray-800"><ReactMarkdown source={listing.content} escapeHtml={false} className="markdown"/></section>
        }

        <section className="max-w-screen-md mx-auto text-gray-800">
        <div className="flex mt-6">
          <div className="w-1/2 border-l-4 pl-4">
            <h2 className="text-2xl">Kontakt</h2>
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
        <div className="fixed left-0 bottom-0 w-full h-16 border-t-2 bg-white">
          <div className="flex justify-end">
            <button
            // onClick={showModal}
            className="p-2 my-2 mr-8 text-white bg-blue-700">Apply now</button>
          </div>
        </div>
        <div className="h-20 w-full" />
      </section>
    </Layout>

    )
}


export async function getStaticPaths() {
  const articles = await fetchAPI("/articles");

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(
    `/articles?slug=${params.slug}&status=published`
  );
  const categories = await fetchAPI("/categories");

  return {
    props: { listing: articles[0], categories },
    revalidate: 1,
  };
}