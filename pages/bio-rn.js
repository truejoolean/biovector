import JobListItem from '../components/jobListItem'
import { fetchAPI } from "../lib/api";
import { processJobs } from '../util/makePretty.js';
import { translate } from '../util/translator.js';

export default function BioRN({ listings }) {
  return(
    <div>
      <div className="bannerHomePage lowerBannerHeight">
        <a href="https://biovector.de"><div className="ml-4"><img src="/images/logo_blue_bar_white.svg" className="h-16 mx-auto"/></div></a>
        <div className="mx-auto max-screen-lg md:w-11/12 py-16">
          <h1 className="text-5xl md:text-3xl font-semibold inline-block p-2" style={{ background: 'rgba(255,255,255,.9)' }}>{translate("tagline", "de")}</h1>
        </div>
      </div>
      <section className="jobsAndFilter lg:w-11/12 max-screen-lg mx-auto mt-4">
        <ul className="w-full mt-4">
        {/*console.log("companyCity: " + listings[0].companyCity)*/}
          {listings
            /*
            .filter(({ employerType }) => filterState.employerType.includes(employerType))
            .filter(({ companyCity }) => filterState.city === 'blank' ? filterState : filterState.city.toLowerCase() === companyCity.toLowerCase())
            .filter(({ companyState }) => filterState.state === 'blank' ? filterState : filterState.state.toLowerCase() === companyState.toLowerCase())
            .filter(({ extra }) => filterState.extra.includes(extra))
            .filter(({ title, companyName }) => filterState.search === "" ? filterState : (title.toLowerCase().includes(filterState.search.toLowerCase()) || title.toLowerCase().includes(companyName.toLowerCase())))
            */
            .map((listing, i) => <JobListItem gray={true} listing={listing} />)}
        </ul>
        <a href="https://biovector.de"><button className="flex w-full justify-center bg-blue-700 text-white rounded-lg px-4 py-4 md:py-2 md:text-md text-2xl font-bold hover:bg-blue-600 duration-300">Zu allen Jobanzeigen von Biovector</button></a>
      </section>
    </div>
    
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const listingsAsArray = await Promise.all([
    fetchAPI("/jobs?_limit=-1&_sort=publishedAt:DESC") // articles are now called listings
  ]);

  let listingsPre = listingsAsArray[0]
  let listingsPost = processJobs(listingsPre).slice(0,10)

  // let listingsFiltered = listingsPost.filter(listing => listing.company.city === "heidelberg" || listing.company.city === "mannheim")
  // listingsFiltered = listingsFiltered.slice(0, 4);

  return {
    props: { listings: listingsPost },
    // revalidate: 1,
  };
}