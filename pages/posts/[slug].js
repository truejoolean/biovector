import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Image from "../../components/image";
import { getStrapiMedia } from "../../lib/media";
import Head from 'next/head';

export default function Post({ listing }) {
  const imageUrl = getStrapiMedia(listing.image);
  // const $ = cheerio.load(listing.content);
  return (
    <Layout>
      <Head><title>Biovector | {listing.title}</title></Head>
      <section class="max-w-screen-lg flex mx-auto">
        <div class="header mt-8 flex border items-center">
          <div>
            <img src={getStrapiMedia(listing.image)} className="h-32 w-32"/>
          </div>
          <div className="ml-8">
            <h1 className="text-5xl">
              {listing.title}
            </h1>
            <p className="text-base text-gray-700">{listing.state} · {listing.employerType}</p>
          </div>
        </div>
      </section>
      <br/>
      <section className="max-w-screen-lg mx-auto text-gray-800">
        {/*<p className="text-gray-800">{listing.content}</p>*/}
        <ReactMarkdown source={listing.content} escapeHtml={false} className="markdown"/>

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