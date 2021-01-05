import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Image from "../../components/image";
import { getStrapiMedia } from "../../lib/media";
import Router from 'next/router';
import Head from 'next/head';
// import { ReactElement } from 'react';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Post({ listing }) {
  const structuredData = {
    "@context": "https://schema.org/",
    "@†ype": "JobPosting",
    "title": listing.title,
    "description": listing.content,
    "datePosted": listing.publishedAt, // todo: check if correct format
    "hiringOrganization": {
      "@type": "Organization",
      "name": listing.companyName,
      "logo": "http://localhost:3000" + listing.image.formats.thumbnail.url,
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

  return (
    <Layout>
      <Head>
        <title>{listing.title} | Biovector</title>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}/>
        <meta name="description" content={listing.description} />
      </Head>
      <section class="max-w-screen-lg flex mx-auto">
      {/*<div onClick={() => Router.back()}>--Go back</div> */}
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
      <section className="max-w-screen-md mx-auto text-gray-800">
        {/*<p className="text-gray-800">{listing.content}</p>*/}
        <ReactMarkdown source={listing.content} escapeHtml={false} className="markdown"/>
        <div className="flex mt-6">
          <div className="w-1/2 border-l-4 pl-4">
            <h2 className="text-2xl">Kontakt</h2>
            Dr. Peter Pan<br />
            0152341248498<br />
            peter@pan.de<br />
          </div>
          <div className="w-1/2 border-l-4 pl-4">
            <h2 className="text-2xl">Location</h2>
              Leibniz-Institut für Naturstoff-Forschung und Infektionsbiologie e. V.<br />Adolf-Reichwein-Straße 23<br />07745 Jena<br />Thüringen
              <br />Deutschland

          </div>
        </div>
        <button className="mt-4 w-full h-28 bg-blue-700 rounded items-center flex justify-center hover:bg-blue-800">
          <h1 className="text-4xl text-white text-center">Bewerbung</h1>
        </button>
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